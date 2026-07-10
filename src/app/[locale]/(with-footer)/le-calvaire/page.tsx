import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SeeWinesButton } from '@/components/buttons/SeeWinesButton/SeeWinesButton';
import { HeroImage } from '@/components/HeroImage/HeroImage';
import { ImageAndText } from '@/components/ImageAndText/ImageAndText';
import { Text } from '@/components/Text/Text';
import { Locale } from '@/i18n/config';
import { cn } from '@/libs/cn';
import { handleRichTags } from '@/libs/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.brand' });

  return {
    description: t('description'),
    title: t('title'),
  };
}

export default async function BrandPage() {
  const t = await getTranslations('brand');
  const tSeo = await getTranslations('seo.brand');

  return (
    <div>
      <h1 className="sr-only">{tSeo('title')}</h1>

      <HeroImage
        alt={t('alt')}
        imgClassName={cn('lg:object-[center_85%]')}
        src="/img/white-trunk.webp"
        title={t.rich('title', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.1')}</h2>
      <Text align="center" textSize="lg">
        {t('content.p1')}
      </Text>

      <h2 className="sr-only">{tSeo('h2.2')}</h2>
      <ImageAndText
        alt={t('images.p2')}
        imageClassName={cn('2xl:object-[50%_30%]')}
        src="/img/new.grape.webp"
        text={t.rich('content.p2', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.3')}</h2>
      <ImageAndText
        alt={t('images.p3')}
        reverse
        src="/img/soil.webp"
        text={t.rich('content.p3', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.4')}</h2>
      <ImageAndText
        alt={t('images.p4')}
        className="mb-20"
        src="/img/grape-result.webp"
        text={t.rich('content.p4', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.5')}</h2>
      <Text align="center" textSize="lg">
        {t.rich('content.p5', handleRichTags)}
      </Text>

      <Text align="center" className="text-center">
        <SeeWinesButton />
      </Text>
    </div>
  );
}
