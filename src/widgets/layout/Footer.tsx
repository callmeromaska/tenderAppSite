import { Link } from 'react-router-dom';
import { contactsContent } from '@/shared/content/contacts';
import styles from './Footer.module.css';

export function Footer() {
  const { phone, email, address, schedule, whatsapp, telegram } = contactsContent;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h3 className={styles.title}>Контакты</h3>
            <p className={styles.line}>{phone}</p>
            <p className={styles.line}>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
            <p className={styles.line}>{address}</p>
            <p className={styles.line}>{schedule}</p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.title}>Связаться</h3>
            <div className={styles.social}>
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                WhatsApp
              </a>
              <a href={telegram.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Telegram
              </a>
            </div>
            <Link to="/contacts" className={styles.cta}>
              Форма заявки
            </Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {new Date().getFullYear()} ЭлектроМонтаж. Энергия ваших проектов.
          </span>
          <span className={styles.status}>Все системы в норме</span>
        </div>
      </div>
    </footer>
  );
}
