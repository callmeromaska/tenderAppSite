import { Link } from 'react-router-dom';
import { servicesList } from '@/shared/content/services';
import { Card } from '@/shared/ui/Card/Card';
import { Button } from '@/shared/ui/Button/Button';
import styles from './ServicesSection.module.css';

interface ServicesSectionProps {
  fullPage?: boolean;
}

export function ServicesSection({ fullPage }: ServicesSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.container}>
        <h2 id="services-heading" className={styles.heading}>
          Наши услуги
        </h2>
        <p className={styles.subtitle}>
          Полный спектр электромонтажных и слаботочных работ
        </p>
        {!fullPage && (
          <p className={styles.linkWrap}>
            <Link to="/prices" className={styles.pricesLink}>
              Посмотреть прайс-лист
            </Link>
          </p>
        )}
        <div className={styles.grid}>
          {servicesList.map((service) => (
            <Card key={service.id} title={service.title} className={styles.card}>
              <ul className={styles.items}>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className={styles.price}>{service.priceFrom}</p>
            </Card>
          ))}
        </div>
        {fullPage && (
          <div className={styles.cta}>
            <Link to="/contacts">
              <Button variant="primary">Оставить заявку</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
