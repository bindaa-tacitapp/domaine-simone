import type { BreadcrumbList, WithContext } from 'schema-dts';
import { Locale } from '@/i18n/config';
import { AppPathname, getPathname } from '@/i18n/navigation';

type Crumb = {
  name: string;
  href: AppPathname;
};

const buildBreadcrumb = (
  locale: Locale,
  crumbs: Crumb[],
): WithContext<BreadcrumbList> => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map(({ name, href }, i) => ({
    '@type': 'ListItem',
    name,
    position: i + 1,
    ...(i < crumbs.length - 1
      ? { item: `${process.env.BASE_URL}${getPathname({ href, locale })}` }
      : {}),
  })),
});

export { buildBreadcrumb };
