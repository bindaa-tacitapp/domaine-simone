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
  const t = await getTranslations({ locale, namespace: 'seo.wineReserve' });

  return {
    description: t('description'),
    title: t('title'),
  };
}

export default async function RedWinePage() {
  const t = await getTranslations('wine');
  const tSeo = await getTranslations('seo.wineReserve');

  const properties: WineCharacteristicProps[] = [
    {
      label: t('common.properties.conservation'),
      value: t('reserve.properties.consumption'),
    },
    {
      label: t('common.properties.variety'),
      value: '33% Merlot, 33% Cabernet Sauvignon, 34% Cabernet franc',
    },
    {
      label: t('common.properties.soil'),
      value: t('reserve.properties.soil'),
    },
    {
      label: t('common.properties.orientation'),
      value: t('reserve.properties.orientation'),
    },
    {
      label: t('common.properties.viticulture'),
      value: t('reserve.properties.viticulture'),
    },
    {
      label: t('common.properties.harvest'),
      value: t('reserve.properties.harvest'),
    },
    {
      label: t('common.properties.maceration'),
      value: t('reserve.properties.maceration'),
    },
    {
      label: t('common.properties.harvestProcessing'),
      value: t('reserve.properties.harvestProcessing'),
    },
    {
      label: t('common.properties.pressing'),
      value: t('reserve.properties.pressing'),
    },
    {
      label: t('common.properties.ripeness'),
      value: t('reserve.properties.ripeness'),
    },
    {
      label: t('common.properties.alcoholicFermentation'),
      value: t('reserve.properties.alcoholicFermentation'),
    },
    {
      label: t('common.properties.malolacticFermentation'),
      value: t('reserve.properties.malolacticFermentation'),
    },
    {
      label: t('common.properties.maturing'),
      value: t('reserve.properties.maturing'),
    },
    {
      label: t('common.properties.bottling'),
      value: t('reserve.properties.bottling'),
    },
    {
      label: t('common.properties.quantity'),
      value: t('reserve.properties.quantity'),
    },
  ];

  return (
    <>
      <h1 className="sr-only">{tSeo('h1')}</h1>

      <WineShowcase
        alcohol={14}
        name="Grande Réserve"
        quantity={300}
        src="/img/bottle.red.wine.hidden.webp"
        type="red"
        volume={750}
        year={2025}
      />

      <WineCTABox soldOut type="reserve" />

      <h2 className="sr-only">{tSeo('h2.1')}</h2>
      <Text align="center">
        {t('reserve.intro.p1')}
        <br />
        <br />
        {t('reserve.intro.p2')}
        <br />
        <br />
        {t('reserve.intro.p3')}
      </Text>

      <h2 className="sr-only">{tSeo('h2.2')}</h2>
      <Quote className="text-primary-red">{t('reserve.quote')}</Quote>

      <h2 className="sr-only">{tSeo('h2.3')}</h2>
      <WineCharacteristics items={properties} />

      <OtherProduct
        alt="Sélection"
        name="Sélection"
        src="/img/bottle.white.wine.webp"
        type="white"
        url={ROUTES.wine.selection}
      />
    </>
  );
}
