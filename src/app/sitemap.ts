import type { MetadataRoute } from 'next';
import { getPathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

type Href = Parameters<typeof getPathname>[0]['href'];

const host = process.env.BASE_URL;
const PRIORITY: Partial<Record<string, number>> = {
  '/': 1,
  '/les-vins': 0.9,
  '/les-vins/calvaire-grande-reserve': 0.9,
  '/les-vins/calvaire-selection': 0.9,
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const hrefs = Object.keys(routing.pathnames) as Href[];

  return hrefs.map((href) => {
    const languages: Record<string, string> = {};

    for (const locale of routing.locales) {
      languages[locale] = `${host}${getPathname({ href, locale })}`;
    }

    return {
      alternates: { languages },
      changeFrequency: 'monthly',
      lastModified: new Date(),
      priority: PRIORITY[href as string] ?? 0.7,
      url: languages[routing.defaultLocale],
    };
  });
};

export default sitemap;
