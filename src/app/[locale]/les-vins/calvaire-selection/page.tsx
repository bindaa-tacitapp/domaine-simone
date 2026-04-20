import { getTranslations } from 'next-intl/server';
import { OtherProduct } from '@/app/components/OtherProduct/OtherProduct';
import { Quote } from '@/app/components/Quote/Quote';
import { Text } from '@/app/components/Text/Text';
import { WineCharacteristicProps } from '@/app/components/WineCharacteristics/WineCharacteristic';
import { WineCharacteristics } from '@/app/components/WineCharacteristics/WineCharacteristics';
import { WineShowcase } from '@/app/components/WineShowcase/WineShowcase';
import { ROUTES } from '@/constants/routes';

export default async function WhiteWinePage() {
  const t = await getTranslations('wine');

  const properties: WineCharacteristicProps[] = [
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
      <WineShowcase
        alcohol={13}
        name="Sélection"
        src="/img/bottle.white.wine.webp"
        type="white"
        year={2025}
      />

      <Text align="center">{t('selection.intro')}</Text>

      <Quote className="text-primary-yellow">{t('selection.quote')}</Quote>

      <WineCharacteristics items={properties} />

      <OtherProduct
        alt="Grande Réserve"
        name="Grande Réserve"
        src="/img/bottle.red.wine.webp"
        type="red"
        url={ROUTES.wine.reserve}
      />
    </>
  );
}
