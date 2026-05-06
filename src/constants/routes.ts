import type { AppPathname } from '@/i18n/navigation';

type RoutesConfig = {
  [key: string]: AppPathname | { [key: string]: AppPathname };
};

const ROUTES = {
  brand: '/la-marque',
  domain: '/le-domaine',
  forms: {
    error: '/erreur-demande',
    other: '/contact-autre',
    press: '/contact-presse',
    restaurant: '/contact-restaurant',
    success: '/demande-envoyee',
  },
  legalNotice: '/mentions-legales',
  men: '/les-hommes',
  privacyPolicy: '/politique-de-confidentialite',
  termsAndConditions: '/conditions-generales-de-vente',
  wine: {
    reserve: '/les-vins/calvaire-grande-reserve',
    selection: '/les-vins/calvaire-selection',
  },
  wines: '/les-vins',
} satisfies RoutesConfig;

export { ROUTES };
