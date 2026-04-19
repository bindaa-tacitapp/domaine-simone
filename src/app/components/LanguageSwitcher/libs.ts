import { Locale } from '@/i18n/config';

type GetLocalizedPathnameProps = {
  locale: Locale;
  pathname: string;
};

const getLocalizedPathname = ({
  locale,
  pathname,
}: GetLocalizedPathnameProps) => `/${locale}${pathname}`;

export { getLocalizedPathname };
