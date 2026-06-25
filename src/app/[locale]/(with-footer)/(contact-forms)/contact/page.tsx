import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { FormContact } from '@/components/forms/FormContact';
import { cn } from '@/libs/cn';

export default async function ContactPage() {
  const t = await getTranslations('forms');

  return (
    <ContentWrapper className={cn('flex flex-col gap-10 mb-10')} narrow>
      <h1 className={cn('font-h1')}>{t('other.title')}</h1>

      <FormContact />
    </ContentWrapper>
  );
}
