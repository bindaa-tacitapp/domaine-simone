'use client';

import Cookies from 'js-cookie';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '@/components/buttons/LoadingButton/LoadingButton';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { COOKIE_KEYS } from '@/constants/cookies';
import { useRouter } from '@/i18n/navigation';
import { handleRichTags } from '@/libs/i18n';

const AgeGateModal = () => {
  const t = useTranslations('ageGate');
  const [notAccepted, setNotAccepted] = useState<boolean>(false);
  const router = useRouter();

  const handleOnDecline = () => {
    setNotAccepted(true);
  };

  const handleOnAccept = () => {
    Cookies.set(COOKIE_KEYS.ageGate, 'true');

    router.refresh();
  };

  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-md" showCloseButton={false}>
        {notAccepted ? (
          <p className="text-base">{t.rich('declined', handleRichTags)}</p>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>{t('neutral.title')}</DialogTitle>
              <DialogDescription>{t('neutral.description')}</DialogDescription>
            </DialogHeader>
            <p className="text-base">{t('neutral.message')}</p>
            <DialogFooter className="gap-5">
              <DialogClose asChild>
                <Button onClick={handleOnDecline} variant="secondary">
                  {t('neutral.no')}
                </Button>
              </DialogClose>
              <Button onClick={handleOnAccept} type="button">
                {t('neutral.yes')}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { AgeGateModal };
