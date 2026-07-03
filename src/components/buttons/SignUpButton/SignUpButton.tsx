'use client';

import { useTranslations } from 'next-intl';
import { ChangeEvent, useState } from 'react';
import { Button } from '@/components/buttons/LoadingButton/LoadingButton';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { isEmail } from '@/libs/form';

const SignUpButton = () => {
  const t = useTranslations('wine.common');
  const [email, setEmail] = useState<string>('');
  const [wantsNewsletter, setWantsNewsletter] = useState<boolean>(false);

  const handleOnEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{t('signup')}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{t('modal.signup.title')}</DialogTitle>

          <DialogDescription>{t('modal.signup.description')}</DialogDescription>
        </DialogHeader>

        <FieldGroup>
          <Field>
            <Label htmlFor="email">
              {t('modal.signup.fields.email.label')}
            </Label>
            <Input
              aria-required
              id="email"
              name="email"
              onChange={handleOnEmailChange}
              placeholder={t('modal.signup.fields.email.placeholder')}
              required
              value={email}
            />
          </Field>

          <Field className="items-start" orientation="horizontal">
            <Checkbox
              checked={wantsNewsletter}
              className="relative top-0.5"
              id="signup-news"
              name="signup-news"
              onClick={() => setWantsNewsletter(!wantsNewsletter)}
            />

            <Label className="font-light text-sm" htmlFor="signup-news">
              {t('modal.signup.fields.newsletter.label')}
            </Label>
          </Field>
        </FieldGroup>

        <DialogFooter className="gap-5">
          <DialogClose asChild>
            <Button variant="secondary">
              {t('modal.signup.buttons.cancel')}
            </Button>
          </DialogClose>

          <Button disabled={!isEmail(email)} type="submit">
            {t('modal.signup.buttons.submit')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { SignUpButton };
