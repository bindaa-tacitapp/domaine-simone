'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { actionSendEmailFromOtherContact } from '@/actions/actionSendEmailFromOtherContact';
import { Button } from '@/components/buttons/LoadingButton/LoadingButton';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ROUTES } from '@/constants/routes';
import { useRouter } from '@/i18n/navigation';
import {
  ContactOtherFormData,
  contactOtherSchema,
} from '@/schemas/contactOther';

const FormContactOther = () => {
  const router = useRouter();
  const t = useTranslations('forms');
  const [isPending, startTransition] = useTransition();
  const form = useForm<ContactOtherFormData>({
    defaultValues: {
      email: '',
      fullName: '',
      message: '',
    },
    resolver: zodResolver(contactOtherSchema),
  });

  const onSendEmail = (formData: ContactOtherFormData) => {
    startTransition(async () => {
      const { error } = await actionSendEmailFromOtherContact(formData);

      if (error) {
        router.push(ROUTES.forms.error);
        return;
      }

      form.reset();
      router.push(ROUTES.forms.success);
    });
  };

  return (
    <form id="form-contact-other" onSubmit={form.handleSubmit(onSendEmail)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="fullName"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-contact-other-fullName">
                {t('common.fields.fullName.label')}
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                id="form-contact-other-fullName"
                placeholder={t('common.fields.fullName.placeholder')}
                required
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-contact-other-email">
                {t('common.fields.email.label')}
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                id="form-contact-other-email"
                placeholder={t('common.fields.email.placeholder')}
                required
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-contact-other-message">
                {t('common.fields.message.label')}
              </FieldLabel>
              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                className="h-40"
                id="form-contact-other-message"
                placeholder={t('common.fields.message.placeholders.other')}
                required
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="text-right">
        <Button
          disabled={isPending || !form.formState.isValid}
          isLoading={isPending}
          type="submit"
        >
          {t('common.buttons.submit')}
        </Button>
      </div>
    </form>
  );
};

export { FormContactOther };
