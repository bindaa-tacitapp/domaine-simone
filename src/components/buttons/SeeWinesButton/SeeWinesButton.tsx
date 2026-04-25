'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useRouter } from '@/i18n/navigation';

const SeeWinesButton = () => {
  const router = useRouter();
  const t = useTranslations('common');

  const handleOnClick = () => {
    router.push(ROUTES.wines);
  };

  return <Button onClick={handleOnClick}>{t('button.seeWines')}</Button>;
};

export { SeeWinesButton };
