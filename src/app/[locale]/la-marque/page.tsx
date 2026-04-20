import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { HeroImage } from '@/app/components/HeroImage/HeroImage';
import { Text } from '@/app/components/Text/Text';

export default async function DomainePage() {
  const t = await getTranslations('brand');
  const tCommon = await getTranslations('common');

  return (
    <div>
      <h1 className="sr-only">{tCommon('nav.brand')}</h1>

      <HeroImage src="/img/calvaire.webp" title={t('title')} />

      <Text align="center" textSize="lg">
        {t('intro')}
      </Text>

      <div className="relative w-1/2 h-[75vh] m-auto mb-50">
        <Image
          alt={t('alt')}
          blurDataURL="/img/placeholder-blur-picture.webp"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          src="/img/grape.webp"
        />
      </div>

      <Text align="center">
        {t.rich('outro', {
          br: () => <br />,
        })}
      </Text>
    </div>
  );
}
