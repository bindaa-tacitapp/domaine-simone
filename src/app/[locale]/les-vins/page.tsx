import { getTranslations } from 'next-intl/server';

export default async function WinesPage() {
  const t = await getTranslations('wines');

  return <div>{t('title')}</div>;
}
