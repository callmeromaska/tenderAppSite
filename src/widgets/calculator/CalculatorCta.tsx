import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button/Button';
import styles from './CalculatorCta.module.css';

export function CalculatorCta() {
  return (
    <section className={styles.section} aria-labelledby="calculator-cta-heading">
      <div className={styles.container}>
        <h2 id="calculator-cta-heading" className={styles.heading}>
          Калькулятор стоимости
        </h2>
        <p className={styles.subtitle}>
          Рассчитайте стоимость работ онлайн с детальной сметой
        </p>
        <p className={styles.desc}>
          Рассчитайте стоимость электромонтажных работ с детальной сметой
        </p>
        <Link to="/calculator">
          <Button variant="secondary" size="lg">
            Открыть калькулятор
          </Button>
        </Link>
      </div>
    </section>
  );
}
