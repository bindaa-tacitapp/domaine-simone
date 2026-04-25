'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/routes';
import { useRouter } from '@/i18n/navigation';

const AskForWineInfoButton = () => {
  const router = useRouter();
  const t = useTranslations('common');

  const handleOnClick = () => {
    router.push(ROUTES.wines);
  };

  return (
    <Button onClick={handleOnClick} variant="secondary">
      {t('button.askForInfo')}
    </Button>
  );
};

export { AskForWineInfoButton };
