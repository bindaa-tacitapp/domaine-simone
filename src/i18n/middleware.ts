import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from './config';

const i18nMiddleware = createMiddleware({
  defaultLocale,
  localeDetection: false,
  localePrefix: 'as-needed',
  locales,
});

export { i18nMiddleware };
