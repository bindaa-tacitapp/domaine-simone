import { defineRouting } from 'next-intl/routing';
import { locales } from '@/i18n/config';

export const routing = defineRouting({
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
  locales,
  pathnames: {
    '/': '/',
    '/conditions-generales-de-vente': {
      de: '/allgemeine-geschaeftsbedingungen',
      en: '/general-terms-and-conditions',
      it: '/condizioni-generali-di-vendita',
    },
    '/contact-autre': {
      de: '/kontakt-sonstiges',
      en: '/contact-other',
      it: '/contatto-altro',
    },
    '/contact-presse': {
      de: '/kontakt-presse',
      en: '/contact-press',
      it: '/contatto-stampa',
    },
    '/contact-restaurant': {
      de: '/kontakt-restaurant', // On pourrait aussi mettre /kontakt-gastronomie, mais rester sur "restaurant" garde la cohérence avec les autres langues
      en: '/contact-restaurant',
      it: '/contatto-ristorante',
    },
    '/demande-envoyee': {
      de: '/anfrage-gesendet',
      en: '/request-sent',
      it: '/richiesta-inviata',
    },
    '/erreur-demande': {
      de: '/anfrage-fehler',
      en: '/request-error',
      it: '/errore-richiesta',
    },
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
    '/mentions-legales': {
      de: '/impressum',
      en: '/legal-notice',
      it: '/note-legali',
    },
    '/politique-de-confidentialite': {
      de: '/datenschutz',
      en: '/privacy-policy',
      it: '/informativa-sulla-privacy',
    },
  },
});
