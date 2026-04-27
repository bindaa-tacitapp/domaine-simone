import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { SeeWinesButton } from '@/components/buttons/SeeWinesButton/SeeWinesButton';
import { HeroImage } from '@/components/HeroImage/HeroImage';
import { Text } from '@/components/Text/Text';
import { cn } from '@/libs/cn';
import { handleRichTags } from '@/libs/i18n';

export default async function BrandPage() {
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
          src="/img/brand.webp"
        />
      </div>

      <Text align="center">{t.rich('outro', handleRichTags)}</Text>

      <Text align="center" className="text-center">
        <SeeWinesButton />
      </Text>
    </div>
  );
}
