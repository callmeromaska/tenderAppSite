import { PageMeta } from '@/app/PageMeta';
import { MainContainer } from '@/shared/ui/MainContainer/MainContainer';
import { CalculatorWidget } from '@/widgets/calculator/CalculatorWidget';
import { AssistantWidget } from '@/widgets/assistant/AssistantWidget';

export function CalculatorPage() {
  return (
    <>
      <PageMeta title="Калькулятор стоимости" description="Рассчитайте стоимость электромонтажных работ онлайн." />
      <MainContainer>
        <CalculatorWidget />
      </MainContainer>
      <AssistantWidget />
    </>
  );
}
