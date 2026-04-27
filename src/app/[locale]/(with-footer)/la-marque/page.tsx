import { getTranslations } from 'next-intl/server';
import { SeeWinesButton } from '@/components/buttons/SeeWinesButton/SeeWinesButton';
import { HeroImage } from '@/components/HeroImage/HeroImage';
import { ImageAndText } from '@/components/ImageAndText/ImageAndText';
import { Text } from '@/components/Text/Text';
import { handleRichTags } from '@/libs/i18n';

export default async function BrandPage() {
  const t = await getTranslations('brand');
  const tCommon = await getTranslations('common');

  return (
    <div>
      <h1 className="sr-only">{tCommon('nav.brand')}</h1>

      <HeroImage src="/img/calvaire.webp" title={t('title')} />

      <Text align="center" textSize="lg">
        {t('content.p1')}
      </Text>

      <ImageAndText
        alt={t('images.p2')}
        src="/img/new.grape.webp"
        text={t.rich('content.p2', handleRichTags)}
      />

      <ImageAndText
        alt={t('images.p3')}
        reverse
        src="/img/new.grown.grape.webp"
        text={t.rich('content.p3', handleRichTags)}
      />

      <Text align="center">{t.rich('content.p4', handleRichTags)}</Text>

      <Text align="center" className="text-center">
        <SeeWinesButton />
      </Text>
    </div>
  );
}
