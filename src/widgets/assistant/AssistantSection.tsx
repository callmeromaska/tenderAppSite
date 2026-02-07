import { useState } from 'react';
import {
  assistantCapabilities,
  assistantExampleQuestions,
} from '@/shared/content/assistant';
import { Button } from '@/shared/ui/Button/Button';
import { LeadForm } from '@/features/lead-form/LeadForm';
import { Modal } from '@/shared/ui/Modal/Modal';
import styles from './AssistantSection.module.css';

export function AssistantSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className={styles.section} aria-labelledby="assistant-heading">
      <div className={styles.container}>
        <h2 id="assistant-heading" className={styles.heading}>
          ИИ-Помощник
        </h2>
        <p className={styles.subtitle}>
          Получите профессиональную консультацию и расчёт проекта с помощью искусственного интеллекта
        </p>
        <div className={styles.grid}>
          <div className={styles.block}>
            <h3 className={styles.blockTitle}>Возможности Умного Инженера</h3>
            <ul className={styles.list}>
              {assistantCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className={styles.blockTitle}>Примеры вопросов:</h3>
            <ul className={styles.examples}>
              {assistantExampleQuestions.map((q) => (
                <li key={q} className={styles.example}>
                  &quot;{q}&quot;
                </li>
              ))}
            </ul>
            <Button variant="primary" onClick={() => setShowForm(true)}>
              Оформить заявку
            </Button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Оформить заявку"
      >
        <LeadForm onSuccess={() => setShowForm(false)} />
      </Modal>
    </section>
  );
}
