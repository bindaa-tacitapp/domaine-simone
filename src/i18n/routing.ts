import { defineRouting } from 'next-intl/routing';
import { locales } from '@/i18n/config';

export const routing = defineRouting({
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
  locales,
  pathnames: {
    '/': '/',
    '/la-marque': {
      de: '/die-marke',
      en: '/the-brand',
      it: '/il-marchio',
    },
    '/le-domaine': {
      de: '/das-weingut',
      en: '/the-domain',
      it: '/la-tenuta',
    },
    '/les-hommes': {
      de: '/die-macher',
      en: '/the-men',
      it: '/gli-uomini',
    },
    '/les-vins': {
      de: '/die-weine',
      en: '/the-wines',
      it: '/i-vini',
    },
    '/les-vins/calvaire-grande-reserve': {
      de: '/die-weine/calvaire-grande-reserve',
      en: '/the-wines/calvaire-grande-reserve',
      it: '/i-vini/calvaire-grande-reserve',
    },
    '/les-vins/calvaire-selection': {
      de: '/die-weine/calvaire-selection',
      en: '/the-wines/calvaire-selection',
      it: '/i-vini/calvaire-selection',
    },
  },
});
