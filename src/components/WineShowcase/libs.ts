import { Locale } from '@/i18n/config';

const formatVolume = (volume: number, locale: Locale) => {
  const unit = volume < 1000 ? 'milliliter' : 'liter';
  const fixedVolume = volume < 1000 ? volume : volume / 1000;

  return Intl.NumberFormat(locale, {
    style: 'unit',
    unit,
    unitDisplay: 'narrow',
  }).format(fixedVolume);
};

export { formatVolume };
