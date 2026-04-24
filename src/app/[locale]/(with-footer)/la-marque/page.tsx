import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { HeroImage } from '@/app/components/HeroImage/HeroImage';
import { Text } from '@/app/components/Text/Text';
import { cn } from '@/libs/cn';

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

      <div
        className={cn(
          'relative mx-5 h-[75vh] mb-10',
          'sm:mx-10',
          'lg:w-1/2 lg:mb-30 lg:mx-auto',
          '2xl:mb-50',
        )}
      >
        <Image
          alt={t('alt')}
          blurDataURL="/img/placeholder-blur-picture.webp"
          className="object-cover"
          fill
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
