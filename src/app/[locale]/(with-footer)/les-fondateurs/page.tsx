import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { SeeWinesButton } from '@/components/buttons/SeeWinesButton/SeeWinesButton';
import { HeroImage } from '@/components/HeroImage/HeroImage';
import { ImageAndText } from '@/components/ImageAndText/ImageAndText';
import { Text } from '@/components/Text/Text';
import { Locale } from '@/i18n/config';
import { handleRichTags } from '@/libs/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.founders' });

  return {
    description: t('description'),
    title: t('title'),
  };
}

export default async function MenPage() {
  const t = await getTranslations('men');
  const tSeo = await getTranslations('seo.founders');

  return (
    <div>
      <h1 className="sr-only">{tSeo('h1')}</h1>

      <HeroImage alt={t('alt')} src="/img/the-man.webp" title={t('title')} />

      <h2 className="sr-only">{tSeo('h2.1')}</h2>
      <Text align="center" textSize="lg">
        {t('intro')}
      </Text>

      <ImageAndText
        alt={t('damien.alt')}
        className="mb-20"
        reverse
        src="/img/damien.webp"
        text={t.rich('damien.text', handleRichTags)}
        title={t.rich('damien.title', handleRichTags)}
      />

      <ImageAndText
        alt={t('natalio.alt')}
        className="mb-20"
        src="/img/natalio.working.webp"
        text={t.rich('natalio.text', handleRichTags)}
        title={t.rich('natalio.title', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.2')}</h2>
      <Text align="center" textSize="lg">
        {t.rich('outro', handleRichTags)}
      </Text>

      <Text align="center" className="text-center">
        <SeeWinesButton />
      </Text>
    </div>
  );
}
