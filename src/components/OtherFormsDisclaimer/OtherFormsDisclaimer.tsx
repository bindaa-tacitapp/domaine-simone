import { getTranslations } from 'next-intl/server';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

const FORM_TYPES = ['restaurant', 'press', 'other'] as const;
const FORM_TYPES_ROUTES = {
  other: ROUTES.forms.other,
  press: ROUTES.forms.press,
  restaurant: ROUTES.forms.restaurant,
};

type OtherFormsDisclaimerProps = {
  type: 'restaurant' | 'press' | 'other';
};

const OtherFormsDisclaimer = async ({ type }: OtherFormsDisclaimerProps) => {
  const t = await getTranslations('forms');
  const typesToDisplay = FORM_TYPES.filter((form) => form !== type);

  return (
    <div className={cn('bg-gray-100 p-5 text-gray-500')}>
      {typesToDisplay.map((form) => (
        <p key={form}>
          {t(`common.otherForms.${form}`)},&nbsp;
          <Link
            className={cn(
              'transition-colors font-medium hover:text-primary-yellow',
            )}
            href={FORM_TYPES_ROUTES[form]}
          >
            {t('common.otherForms.cta')}
          </Link>
          .
        </p>
      ))}
    </div>
  );
};

export { OtherFormsDisclaimer };
