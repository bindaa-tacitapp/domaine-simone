import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { FormContactOther } from '@/components/forms/FormContactOther';
import { OtherFormsDisclaimer } from '@/components/OtherFormsDisclaimer/OtherFormsDisclaimer';
import { cn } from '@/libs/cn';

export default async function ContactOtherPage() {
  const t = await getTranslations('forms');

  return (
    <ContentWrapper className={cn('flex flex-col gap-10 mb-10')} narrow>
      <h1 className={cn('font-h1')}>{t('other.title')}</h1>

      <OtherFormsDisclaimer type="other" />

      <FormContactOther />
    </ContentWrapper>
  );
}
