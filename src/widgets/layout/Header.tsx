import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/prices', label: 'Цены' },
  { to: '/calculator', label: 'Калькулятор' },
  { to: '/contacts', label: 'Контакты' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleResize = () => {
      if (window.innerWidth > 767) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          ЭлектроМонтаж
        </Link>

        <nav className={styles.nav} aria-label="Основное меню">
          <ul className={styles.navList}>
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                  }
                  end={to === '/'}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.right}>
          <a href="tel:+77714215593" className={styles.phone}>
            +7 771 421 55 93
          </a>
          <Link to="/contacts" className={styles.cta}>
            Связаться
          </Link>
          <button
            type="button"
            className={styles.burger}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </header>

      <div
        className={`${styles.menuOverlay} ${menuOpen ? styles.menuOverlayOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.menuNav} aria-label="Мобильное меню">
          <ul className={styles.menuList}>
            {navItems.map(({ to, label }) => (
              <li key={to} className={styles.menuItem}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? `${styles.menuLink} ${styles.menuLinkActive}` : styles.menuLink
                  }
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
