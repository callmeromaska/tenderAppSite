import { PageMeta } from '@/app/PageMeta';
import { MainContainer } from '@/shared/ui/MainContainer/MainContainer';
import { Hero } from '@/widgets/hero/Hero';
import { AboutSection } from '@/widgets/about/AboutSection';
import { ServicesSection } from '@/widgets/services/ServicesSection';
import { ConditionsSection } from '@/widgets/conditions/ConditionsSection';
import { CalculatorCta } from '@/widgets/calculator/CalculatorCta';
import { AssistantSection } from '@/widgets/assistant/AssistantSection';
import { ContactSection } from '@/widgets/contact/ContactSection';
import { AssistantWidget } from '@/widgets/assistant/AssistantWidget';

export function HomePage() {
  return (
    <>
      <PageMeta title="ЭлектроМонтаж" />
      <MainContainer>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ConditionsSection />
        <CalculatorCta />
        <AssistantSection />
        <ContactSection />
      </MainContainer>
      <AssistantWidget />
    </>
  );
}
