'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { actionSendEmailFromPress } from '@/actions/actionSendEmailFromPress';
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
  ContactPressFormData,
  contactPressSchema,
} from '@/schemas/contactPress';

const FormContactPress = () => {
  const router = useRouter();
  const t = useTranslations('forms');
  const [isPending, startTransition] = useTransition();
  const form = useForm<ContactPressFormData>({
    defaultValues: {
      email: '',
      fullName: '',
      message: '',
      newspaperName: '',
    },
    resolver: zodResolver(contactPressSchema),
  });

  const onSendEmail = (formData: ContactPressFormData) => {
    startTransition(async () => {
      const { error } = await actionSendEmailFromPress(formData);

      if (error) {
        router.push(ROUTES.forms.error);
        return;
      }

      form.reset();
      router.push(ROUTES.forms.success);
    });
  };

  return (
    <form id="form-contact-press" onSubmit={form.handleSubmit(onSendEmail)}>
      <FieldGroup>
        <Controller
          control={form.control}
          name="fullName"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-contact-press-fullName">
                {t('common.fields.fullName.label')}
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                id="form-contact-press-fullName"
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
              <FieldLabel htmlFor="form-contact-press-email">
                {t('common.fields.email.label')}
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                id="form-contact-press-email"
                placeholder={t('common.fields.email.placeholder')}
                required
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="newspaperName"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-contact-press-newspaperName">
                {t('common.fields.newspaperName.label')}
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="form-contact-press-newspaperName"
                placeholder={t('common.fields.newspaperName.placeholder')}
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
              <FieldLabel htmlFor="form-contact-press-message">
                {t('common.fields.message.label')}
              </FieldLabel>
              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                className="h-40"
                id="form-contact-press-message"
                placeholder={t('common.fields.message.placeholders.press')}
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

export { FormContactPress };
