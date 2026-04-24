import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/app/components/ContentWrapper/ContentWrapper';
import { cn } from '@/libs/cn';

export default async function LegalNoticePage() {
  const t = await getTranslations('legalNotice');

  return (
    <ContentWrapper>
      <h1 className={cn('font-imbue text-4xl')}>{t('title')}</h1>
    </ContentWrapper>
  );
}
