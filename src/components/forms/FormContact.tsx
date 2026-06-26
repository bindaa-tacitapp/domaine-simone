'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { actionSendEmailFromContact } from '@/actions/actionSendEmailFromContact';
import { Button } from '@/components/buttons/LoadingButton/LoadingButton';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_TYPE, ContactType, ROUTES } from '@/constants/routes';
import { useRouter } from '@/i18n/navigation';
import { ContactFormData, contactSchema } from '@/schemas/contact';

type FormContactProps = {
  type?: ContactType;
};

const FormContact = ({ type }: FormContactProps) => {
  const router = useRouter();
  const t = useTranslations('forms');
  const [isPending, startTransition] = useTransition();
  const form = useForm<ContactFormData>({
    defaultValues: {
      email: '',
      fullName: '',
      message: '',
      type,
    },
    resolver: zodResolver(contactSchema),
  });

  const typeSelected = useWatch({
    control: form.control,
    defaultValue: '',
    name: 'type',
  });

  const onSendEmail = (formData: ContactFormData) => {
    startTransition(async () => {
      const { error } = await actionSendEmailFromContact(formData);

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
          name="type"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-contact-type">
                {t('common.fields.type.label')}
              </FieldLabel>

              <NativeSelect
                name={field.name}
                onChange={field.onChange}
                value={field.value}
              >
                <NativeSelectOption value="">
                  {t('common.fields.type.placeholder')}
                </NativeSelectOption>

                {Object.values(CONTACT_TYPE).map((value) => (
                  <NativeSelectOption key={value} value={value}>
                    {t(`common.fields.type.options.${value}`)}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="fullName"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-contact-fullName">
                {t('common.fields.fullName.label')}
              </FieldLabel>

              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                id="form-contact-fullName"
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
              <FieldLabel htmlFor="form-contact-email">
                {t('common.fields.email.label')}
              </FieldLabel>

              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                id="form-contact-email"
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
              <FieldLabel htmlFor="form-contact-message">
                {t('common.fields.message.label')}
              </FieldLabel>

              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                className="h-40"
                id="form-contact-message"
                placeholder={t('common.fields.message.placeholder')}
                required
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div className="text-right">
        <Button
          disabled={isPending || !form.formState.isValid || !typeSelected}
          isLoading={isPending}
          type="submit"
        >
          {t('common.buttons.submit')}
        </Button>
      </div>
    </form>
  );
};

export { FormContact };
