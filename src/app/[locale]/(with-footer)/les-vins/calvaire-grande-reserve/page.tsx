import { getTranslations } from 'next-intl/server';
import { OtherProduct } from '@/components/OtherProduct/OtherProduct';
import { Quote } from '@/components/Quote/Quote';
import { Text } from '@/components/Text/Text';
import { WineCharacteristicProps } from '@/components/WineCharacteristics/WineCharacteristic';
import { WineCharacteristics } from '@/components/WineCharacteristics/WineCharacteristics';
import { WineCTABox } from '@/components/WineCTABox/WineCTABox';
import { WineShowcase } from '@/components/WineShowcase/WineShowcase';
import { ROUTES } from '@/constants/routes';

export default async function RedWinePage() {
  const t = await getTranslations('wine');

  const properties: WineCharacteristicProps[] = [
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
      <WineShowcase
        alcohol={14.5}
        name="Grande Réserve"
        src="/img/bottle.red.wine.webp"
        type="red"
        year={2025}
      />

      <WineCTABox type="reserve" />

      <Text align="center">{t('reserve.intro')}</Text>

      <Quote className=" text-primary-red">{t('reserve.quote')}</Quote>

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
