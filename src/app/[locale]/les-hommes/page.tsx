import { getTranslations } from 'next-intl/server';

export default async function MenPage() {
  const t = await getTranslations('wines');

  return <div>{t('title')}</div>;
}
