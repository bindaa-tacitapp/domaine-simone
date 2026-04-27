'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { actionSendEmailFromRestaurant } from '@/actions/actionSendEmailFromRestaurant';
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
  ContactRestaurantFormData,
  contactRestaurantSchema,
} from '@/schemas/contactRestaurant';

const FormContactRestaurant = () => {
  const router = useRouter();
  const t = useTranslations('forms');
  const [isPending, startTransition] = useTransition();
  const form = useForm<ContactRestaurantFormData>({
    defaultValues: {
      email: '',
      fullName: '',
      message: '',
      restaurantName: '',
    },
    resolver: zodResolver(contactRestaurantSchema),
  });

  const onSendEmail = (formData: ContactRestaurantFormData) => {
    startTransition(async () => {
      const { error } = await actionSendEmailFromRestaurant(formData);

      if (error) {
        router.push(ROUTES.forms.error);
        return;
      }

      form.reset();
      router.push(ROUTES.forms.success);
    });
  };

  return (
    <form
      id="form-contact-restaurant"
      onSubmit={form.handleSubmit(onSendEmail)}
    >
      <FieldGroup>
        <Controller
          control={form.control}
          name="fullName"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-contact-restaurant-fullName">
                {t('common.fields.fullName.label')}
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                id="form-contact-restaurant-fullName"
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
              <FieldLabel htmlFor="form-contact-restaurant-email">
                {t('common.fields.email.label')}
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                id="form-contact-restaurant-email"
                placeholder={t('common.fields.email.placeholder')}
                required
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="restaurantName"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-contact-restaurant-restaurantName">
                {t('common.fields.restaurantName.label')}
              </FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id="form-contact-restaurant-restaurantName"
                placeholder={t('common.fields.restaurantName.placeholder')}
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
              <FieldLabel htmlFor="form-contact-restaurant-message">
                {t('common.fields.message.label')}
              </FieldLabel>
              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                aria-required
                className="h-40"
                id="form-contact-restaurant-message"
                placeholder={t('common.fields.message.placeholders.restaurant')}
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

export { FormContactRestaurant };
