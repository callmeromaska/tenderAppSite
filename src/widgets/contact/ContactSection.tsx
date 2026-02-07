import { contactsContent } from '@/shared/content/contacts';
import { LeadForm } from '@/features/lead-form/LeadForm';
import styles from './ContactSection.module.css';

interface ContactSectionProps {
  fullPage?: boolean;
}

export function ContactSection({ fullPage: _fullPage }: ContactSectionProps) {
  const { phone, email, address, schedule, whatsapp, telegram } = contactsContent;
  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        <h2 id="contact-heading" className={styles.heading}>
          Свяжитесь с нами
        </h2>
        <p className={styles.subtitle}>
          Получите бесплатную консультацию и расчёт стоимости
        </p>
        <div className={styles.grid}>
          <div className={styles.info}>
            <div className={styles.block}>
              <h3 className={styles.label}>Телефон</h3>
              <a href={`tel:${phone.replace(/\s/g, '')}`} className={styles.value}>
                {phone}
              </a>
            </div>
            <div className={styles.block}>
              <h3 className={styles.label}>Email</h3>
              <a href={`mailto:${email}`} className={styles.value}>
                {email}
              </a>
            </div>
            <div className={styles.block}>
              <h3 className={styles.label}>Адрес</h3>
              <p className={styles.value}>{address}</p>
            </div>
            <div className={styles.block}>
              <h3 className={styles.label}>Режим работы</h3>
              <p className={styles.value}>{schedule}</p>
            </div>
            <div className={styles.social}>
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                WhatsApp
              </a>
              <a href={telegram.href} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Telegram
              </a>
            </div>
          </div>
          <div className={styles.formWrap}>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
