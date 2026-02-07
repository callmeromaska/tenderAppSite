import { useReducer, useState } from 'react';
import {
  objectTypes,
  serviceTypes,
  calculateEstimate,
} from '@/shared/content/calculatorConfig';
import { Button } from '@/shared/ui/Button/Button';
import { Select, type SelectOption } from '@/shared/ui/Select/Select';
import { Input } from '@/shared/ui/Input/Input';
import { LeadForm } from '@/features/lead-form/LeadForm';
import { Modal } from '@/shared/ui/Modal/Modal';
import styles from './CalculatorWidget.module.css';

interface CalculatorState {
  area: string;
  objectType: string;
  serviceType: string;
}

const initial: CalculatorState = {
  area: '',
  objectType: objectTypes[0].value,
  serviceType: serviceTypes[0].value,
};

type Action =
  | { type: 'SET_AREA'; payload: string }
  | { type: 'SET_OBJECT'; payload: string }
  | { type: 'SET_SERVICE'; payload: string }
  | { type: 'RESET' };

function reducer(state: CalculatorState, action: Action): CalculatorState {
  switch (action.type) {
    case 'SET_AREA':
      return { ...state, area: action.payload };
    case 'SET_OBJECT':
      return { ...state, objectType: action.payload };
    case 'SET_SERVICE':
      return { ...state, serviceType: action.payload };
    case 'RESET':
      return initial;
    default:
      return state;
  }
}

const objectOptions: SelectOption[] = objectTypes.map((o) => ({ value: o.value, label: o.label }));
const serviceOptions: SelectOption[] = serviceTypes.map((s) => ({ value: s.value, label: s.label }));

export function CalculatorWidget() {
  const [state, dispatch] = useReducer(reducer, initial);
  const [showFormModal, setShowFormModal] = useState(false);

  const areaNum = parseFloat(state.area.replace(',', '.')) || 0;
  const estimate =
    areaNum > 0
      ? calculateEstimate(areaNum, state.objectType, state.serviceType)
      : 0;

  return (
    <section className={styles.section} aria-labelledby="calculator-heading">
      <div className={styles.container}>
        <h1 id="calculator-heading" className={styles.heading}>
          Калькулятор стоимости
        </h1>
        <p className={styles.subtitle}>
          Рассчитайте стоимость работ онлайн с детальной сметой
        </p>

        <div className={styles.form}>
          <Input
            label="Площадь (м²)"
            type="number"
            min={1}
            value={state.area}
            onChange={(e) => dispatch({ type: 'SET_AREA', payload: e.target.value })}
            placeholder="Например, 65"
          />
          <Select
            label="Тип объекта"
            options={objectOptions}
            value={state.objectType}
            onChange={(e) => dispatch({ type: 'SET_OBJECT', payload: e.target.value })}
          />
          <Select
            label="Вид работ"
            options={serviceOptions}
            value={state.serviceType}
            onChange={(e) => dispatch({ type: 'SET_SERVICE', payload: e.target.value })}
          />
        </div>

        {estimate > 0 && (
          <div className={styles.result}>
            <p className={styles.resultLabel}>Ориентировочная стоимость</p>
            <p className={styles.resultValue}>{estimate.toLocaleString('ru-KZ')} ₸</p>
            <Button
              variant="primary"
              onClick={() => setShowFormModal(true)}
              className={styles.exactButton}
            >
              Точный расчёт
            </Button>
          </div>
        )}
      </div>

      <Modal
        isOpen={showFormModal}
        onClose={() => setShowFormModal(false)}
        title="Заявка на точный расчёт"
      >
        <LeadForm
          onSuccess={() => setShowFormModal(false)}
          submitLabel="Отправить заявку"
        />
      </Modal>
    </section>
  );
}
