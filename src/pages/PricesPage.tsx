import { PageMeta } from '@/app/PageMeta';
import { MainContainer } from '@/shared/ui/MainContainer/MainContainer';
import { ConditionsSection } from '@/widgets/conditions/ConditionsSection';
import { AssistantWidget } from '@/widgets/assistant/AssistantWidget';

export function PricesPage() {
  return (
    <>
      <PageMeta title="Цены и условия" description="Порядок оплаты, сроки выполнения работ, гарантия 5 лет." />
      <MainContainer>
        <ConditionsSection fullPage />
      </MainContainer>
      <AssistantWidget />
    </>
  );
}
