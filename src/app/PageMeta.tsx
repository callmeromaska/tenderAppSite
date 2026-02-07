import { Helmet } from 'react-helmet-async';

interface PageMetaProps {
  title: string;
  description?: string;
}

const siteName = 'ЭлектроМонтаж';
const defaultDescription = 'Профессиональные электромонтажные и слаботочные работы в Астане. 10+ лет опыта, гарантия 5 лет.';

export function PageMeta({ title, description = defaultDescription }: PageMetaProps) {
  const fullTitle = title === siteName ? `${siteName} — Энергия Ваших Проектов` : `${title} | ${siteName}`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
