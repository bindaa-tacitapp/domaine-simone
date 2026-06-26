import type { AppPathname } from '@/i18n/navigation';

type RoutesConfig = {
  [key: string]: AppPathname | { [key: string]: AppPathname };
};

// biome-ignore-start assist/source/useSortedKeys: keep this sorting for the UI
const CONTACT_TYPE = {
  wine: 'w',
  restaurant: 'r',
  press: 'p',
  other: 'o',
} as const;
// biome-ignore-end assist/source/useSortedKeys: keep this sorting for the UI

type ContactType = (typeof CONTACT_TYPE)[keyof typeof CONTACT_TYPE];

const ROUTES = {
  brand: '/le-calvaire',
  contact: '/contact',
  domain: '/le-domaine',
  forms: {
    error: '/erreur-demande',
    success: '/demande-envoyee',
  },
  legalInformations: '/informations-legales',
  legalNotice: '/mentions-legales',
  men: '/les-fondateurs',
  press: '/presse',
  privacyPolicy: '/politique-de-confidentialite',
  professionals: '/professionnels',
  termsAndConditions: '/conditions-generales-de-vente',
  wine: {
    reserve: '/les-vins/calvaire-grande-reserve',
    selection: '/les-vins/calvaire-selection',
  },
  wines: '/les-vins',
} satisfies RoutesConfig;

export type { ContactType };
export { CONTACT_TYPE, ROUTES };
