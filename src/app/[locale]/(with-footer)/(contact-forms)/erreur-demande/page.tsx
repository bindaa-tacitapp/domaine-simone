import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';

export default async function EmailErrorPage() {
  const t = await getTranslations('forms.common.results.error');

  return (
    <ContentWrapper narrow>
      <h1 className="font-h1 mb-5">{t('title')}</h1>
      <p>{t('text')}</p>
    </ContentWrapper>
  );
}
