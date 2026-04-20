import type { AppPathname } from '@/i18n/navigation';

type RoutesConfig = {
  [key: string]: AppPathname | { [key: string]: AppPathname };
};

const ROUTES = {
  brand: '/la-marque',
  domain: '/le-domaine',
  men: '/les-hommes',
  wine: {
    reserve: '/les-vins/calvaire-grande-reserve',
    selection: '/les-vins/calvaire-selection',
  },
  wines: '/les-vins',
} satisfies RoutesConfig;

export { ROUTES };
