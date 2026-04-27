import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { FormContactPress } from '@/components/forms/FormContactPress';
import { OtherFormsDisclaimer } from '@/components/OtherFormsDisclaimer/OtherFormsDisclaimer';
import { cn } from '@/libs/cn';

export default async function ContactPressPage() {
  const t = await getTranslations('forms');

  return (
    <ContentWrapper className={cn('flex flex-col gap-10 mb-10')} narrow>
      <h1 className={cn('font-h1')}>{t('press.title')}</h1>

      <OtherFormsDisclaimer type="press" />

      <FormContactPress />
    </ContentWrapper>
  );
}
