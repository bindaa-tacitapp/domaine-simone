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
  const t = await getTranslations({ locale, namespace: 'seo.domain' });

  return {
    description: t('description'),
    title: t('title'),
  };
}

export default async function DomainePage() {
  const t = await getTranslations('domain');
  const tSeo = await getTranslations('seo.domain');
  const tCommon = await getTranslations('common');

  return (
    <div>
      <h1 className="sr-only">{tCommon('nav.domain')}</h1>

      <HeroImage
        alt={t('alt')}
        imgClassName={cn('2xl:object-[50%_45%]')}
        src="/img/bottle.top.webp"
        title={<h1>{t.rich('title', handleRichTags)}</h1>}
      />

      <h2 className="sr-only">{tSeo('h2.1')}</h2>
      <Text align="center" textSize="lg">
        {t.rich('text.intro', handleRichTags)}
      </Text>

      <h2 className="sr-only">{tSeo('h2.2')}</h2>
      <ImageAndText
        alt={t('text.soil.alt')}
        src="/img/calvaire.webp"
        text={t.rich('text.soil.text', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.3')}</h2>
      <ImageAndText
        alt={t('text.slope.alt')}
        reverse
        src="/img/slope.webp"
        text={t.rich('text.slope.text', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.4')}</h2>
      <ImageAndText
        alt={t('text.sun.alt')}
        className="mb-20"
        src="/img/new.grown.grape.webp"
        text={t.rich('text.sun.text', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.5')}</h2>
      <Text align="center" textSize="lg">
        {t('text.outro')}
      </Text>

      <Text align="center" className="text-center">
        <SeeWinesButton />
      </Text>
    </div>
  );
}
