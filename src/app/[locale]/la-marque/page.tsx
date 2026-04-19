import { getTranslations } from 'next-intl/server';
import { HeroImage } from '@/app/components/HeroImage/HeroImage';

export default async function DomainePage() {
  const t = await getTranslations('brand');

  return (
    <div>
      <HeroImage src="/img/calvaire.webp" title={t('title')} />
    </div>
  );
}
