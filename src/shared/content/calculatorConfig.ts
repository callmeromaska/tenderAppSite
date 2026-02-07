export interface CalculatorOption {
  value: string;
  label: string;
  pricePerUnit: number; // ₸/м² или ₸/точка
  unit: 'm2' | 'point' | 'hour';
}

export const objectTypes: CalculatorOption[] = [
  { value: 'apartment', label: 'Квартира', pricePerUnit: 1500, unit: 'm2' },
  { value: 'commercial', label: 'Коммерческое помещение', pricePerUnit: 2000, unit: 'm2' },
  { value: 'house', label: 'Частный дом', pricePerUnit: 1800, unit: 'm2' },
];

export const serviceTypes: CalculatorOption[] = [
  { value: 'electro', label: 'Электромонтаж', pricePerUnit: 1500, unit: 'm2' },
  { value: 'lowcurrent', label: 'Слаботочные системы', pricePerUnit: 1000, unit: 'point' },
  { value: 'it', label: 'IT-инфраструктура', pricePerUnit: 5000, unit: 'point' },
  { value: 'security', label: 'Системы безопасности', pricePerUnit: 3000, unit: 'point' },
  { value: 'maintenance', label: 'Техобслуживание', pricePerUnit: 5000, unit: 'hour' },
];

/** Детерминированный расчёт: площадь × коэффициент типа × цена за единицу (упрощённо) */
export function calculateEstimate(
  area: number,
  objectTypeKey: string,
  serviceTypeKey: string
): number {
  const obj = objectTypes.find((o) => o.value === objectTypeKey) ?? objectTypes[0];
  const svc = serviceTypes.find((s) => s.value === serviceTypeKey) ?? serviceTypes[0];
  if (svc.unit === 'hour') {
    return Math.round(area * 0.5 * svc.pricePerUnit);
  }
  if (svc.unit === 'point') {
    const points = Math.max(1, Math.floor(area / 20));
    return points * svc.pricePerUnit;
  }
  return Math.round(area * obj.pricePerUnit * 0.95);
}
