import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { OtherProduct } from '@/components/OtherProduct/OtherProduct';
import { Quote } from '@/components/Quote/Quote';
import { Text } from '@/components/Text/Text';
import { WineCharacteristicProps } from '@/components/WineCharacteristics/WineCharacteristic';
import { WineCharacteristics } from '@/components/WineCharacteristics/WineCharacteristics';
import { WineCTABox } from '@/components/WineCTABox/WineCTABox';
import { WineShowcase } from '@/components/WineShowcase/WineShowcase';
import { ROUTES } from '@/constants/routes';
import { Locale } from '@/i18n/config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.wineSelection' });

  return {
    description: t('description'),
    title: t('title'),
  };
}

export default async function WhiteWinePage() {
  const t = await getTranslations('wine');
  const tSeo = await getTranslations('seo.wineSelection');

  const properties: WineCharacteristicProps[] = [
    {
      label: t('common.properties.conservation'),
      value: t('selection.properties.consumption'),
    },
    {
      label: t('common.properties.variety'),
      value: '59% Chasselas, 41% Chardonnay',
    },
    {
      label: t('common.properties.soil'),
      value: t('selection.properties.soil'),
    },
    {
      label: t('common.properties.orientation'),
      value: t('selection.properties.orientation'),
    },
    {
      label: t('common.properties.viticulture'),
      value: t('selection.properties.viticulture'),
    },
    {
      label: t('common.properties.harvest'),
      value: t('selection.properties.harvest'),
    },
    {
      label: t('common.properties.maceration'),
      value: t('selection.properties.maceration'),
    },
    {
      label: t('common.properties.harvestProcessing'),
      value: t('selection.properties.harvestProcessing'),
    },
    {
      label: t('common.properties.pressing'),
      value: t('selection.properties.pressing'),
    },
    {
      label: t('common.properties.clearing'),
      value: t('selection.properties.clearing'),
    },
    {
      label: t('common.properties.alcoholicFermentation'),
      value: t('selection.properties.alcoholicFermentation'),
    },
    {
      label: t('common.properties.malolacticFermentation'),
      value: t('selection.properties.malolacticFermentation'),
    },
    {
      label: t('common.properties.maturing'),
      value: t('selection.properties.maturing'),
    },
    {
      label: t('common.properties.bottling'),
      value: t('selection.properties.bottling'),
    },
    {
      label: t('common.properties.quantity'),
      value: t('selection.properties.quantity'),
    },
  ];

  return (
    <>
      <h1 className="sr-only">{tSeo('h1')}</h1>

      <WineShowcase
        alcohol={12.3}
        name="Sélection"
        quantity={5473}
        src="/img/bottle.white.wine.webp"
        type="white"
        volume={750}
        year={2025}
      />

      <WineCTABox type="selection" />

      <h2 className="sr-only">{tSeo('h2.1')}</h2>
      <Text align="center" className="md:mb-30">
        {t('selection.intro.p1')}
        <br />
        <br />
        {t('selection.intro.p2')}
      </Text>

      <h2 className="sr-only">{tSeo('h2.2')}</h2>
      <Quote className="text-primary-yellow">{t('selection.quote')}</Quote>

      <h2 className="sr-only">{tSeo('h2.3')}</h2>
      <WineCharacteristics items={properties} />

      <OtherProduct
        alt="Grande Réserve"
        name="Grande Réserve"
        src="/img/bottle.red.wine.hidden.webp"
        type="red"
        url={ROUTES.wine.reserve}
      />
    </>
  );
}
