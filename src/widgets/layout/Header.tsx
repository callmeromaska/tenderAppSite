import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/prices', label: 'Цены' },
  { to: '/calculator', label: 'Калькулятор' },
  { to: '/contacts', label: 'Контакты' },
];

export function Header() {
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
        </div>
      </header>
    </div>
  );
}
