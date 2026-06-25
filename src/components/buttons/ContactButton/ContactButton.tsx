'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useRouter } from '@/i18n/navigation';

const ContactButton = () => {
  const router = useRouter();
  const t = useTranslations('common');

  const handleOnClick = () => {
    router.push(ROUTES.forms.other);
  };

  return <Button onClick={handleOnClick}>{t('button.seeWines')}</Button>;
};

export { ContactButton };
