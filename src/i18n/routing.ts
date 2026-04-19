import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
  locales: ['fr', 'en', 'it'],
  pathnames: {
    '/': '/',
    '/la-marque': {
      en: '/the-brand',
      it: '/il-marchio',
    },
    '/le-domaine': {
      en: '/the-domain',
      it: '/la-tenuta',
    },
    '/les-hommes': {
      en: '/the-men',
      it: '/gli-uomini',
    },
    '/les-vins': {
      en: '/the-wines',
      it: '/i-vini',
    },
  },
});
