import type { MetadataRoute } from 'next';
import type { Locale } from 'next-intl';
import { getPathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const host = process.env.BASE_URL;

type Href = Parameters<typeof getPathname>[0]['href'];

// Google mostly ignores these anyway, but if you want to tune them:
const PRIORITY: Partial<Record<string, number>> = {
  '/': 1,
  '/les-vins': 0.9,
};

const getUrl = async (href: Href, locale: Locale) =>
  `${host}${getPathname({ href, locale })}`;

const getEntry = async (href: Href): Promise<MetadataRoute.Sitemap[number]> => {
  const languages = Object.fromEntries(
    await Promise.all(
      routing.locales.map(
        async (locale) => [locale, await getUrl(href, locale)] as const,
      ),
    ),
  );

  return {
    alternates: {
      languages: {
        ...languages,
        'x-default': languages[routing.defaultLocale],
      },
    },
    changeFrequency: 'monthly',
    lastModified: new Date(),
    priority: PRIORITY[href as string] ?? 0.7,
    url: languages[routing.defaultLocale],
  };
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const hrefs = Object.keys(routing.pathnames) as Href[];
  return Promise.all(hrefs.map(getEntry));
};

export default sitemap;
