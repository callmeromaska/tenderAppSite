import { paymentSteps, deadlinesList } from '@/shared/content/prices';
import { Card } from '@/shared/ui/Card/Card';
import styles from './ConditionsSection.module.css';

interface ConditionsSectionProps {
  fullPage?: boolean;
}

export function ConditionsSection({ fullPage: _fullPage }: ConditionsSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="conditions-heading">
      <div className={styles.container}>
        <h2 id="conditions-heading" className={styles.heading}>
          Условия работы
        </h2>
        <p className={styles.subtitle}>
          Прозрачные условия сотрудничества и четкие сроки выполнения
        </p>

        <div className={styles.block}>
          <h3 className={styles.blockTitle}>Условия работы</h3>
          <p className={styles.text}>
            Мы выполняем электромонтажные и слаботочные работы любой сложности — от квартир и
            офисов до промышленных объектов. Все этапы сотрудничества прозрачны и зафиксированы
            договором.
          </p>
        </div>

        <h3 className={styles.blockTitle}>Порядок оплаты</h3>
        <div className={styles.steps}>
          {paymentSteps.map((step) => (
            <Card key={step.step} className={styles.stepCard}>
              <span className={styles.stepNum}>{step.step}</span>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.description}</p>
            </Card>
          ))}
        </div>

        <h3 className={styles.blockTitle}>Сроки выполнения работ</h3>
        <p className={styles.text}>
          Ориентировочные сроки выполнения электромонтажа для разных видов объектов:
        </p>
        <ul className={styles.deadlines}>
          {deadlinesList.map((item) => (
            <li key={item.type} className={styles.deadlineItem}>
              <span className={styles.deadlineType}>{item.type}</span>
              <span className={styles.deadlineDays}>{item.days}</span>
            </li>
          ))}
        </ul>
        <p className={styles.note}>Сроки указаны в рабочих днях</p>

        <div className={styles.guarantee}>
          <h3 className={styles.blockTitle}>Гарантия качества</h3>
          <p className={styles.text}>
            Мы предоставляем гарантию на все виды выполненных работ — 5 лет. В течение
            гарантийного срока любые обнаруженные недостатки устраняются за наш счёт.
          </p>
        </div>
      </div>
    </section>
  );
}
