'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

type BuyWineButtonProps = {
  type: 'reserve' | 'selection';
};

const BuyWineButton = ({ type }: BuyWineButtonProps) => {
  const t = useTranslations('common');

  const handleOnClick = () => {
    window.open(
      'https://cave.domaine-simone.ch',
      '_blank',
      'noopener noreferrer',
    );
  };

  return <Button onClick={handleOnClick}>{t('button.buyWine')}</Button>;
};

export { BuyWineButton };
