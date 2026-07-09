import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { ItemList, WithContext } from 'schema-dts';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { JsonLd } from '@/components/JsonLd/JsonLd';
import { buildBreadcrumb } from '@/components/JsonLd/libs';
import { WineCard } from '@/components/WineCard/WineCard';
import { ROUTES } from '@/constants/routes';
import { Locale } from '@/i18n/config';
import { getPathname } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.wines' });

  return {
    description: t('description'),
    title: t('title'),
  };
}

export default async function WinesPage() {
  const tSeo = await getTranslations('seo.wines');
  const tCommon = await getTranslations('common');

  const locale = await getLocale();

  const itemListSchema: WithContext<ItemList> = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        url: `${process.env.BASE_URL}${getPathname({ href: ROUTES.wine.selection, locale })}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        url: `${process.env.BASE_URL}${getPathname({ href: ROUTES.wine.reserve, locale })}`,
      },
    ],
  };

  const breadcrumbSchema = buildBreadcrumb(locale, [
    { href: ROUTES.home, name: tCommon('home') },
    { href: ROUTES.wines, name: tCommon('nav.wines') },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />

      <h1 className="sr-only">{tSeo('h1')}</h1>

      <ContentWrapper wide>
        <div
          className={cn(
            'grid grid-cols-1 gap-10 mb-20',
            'sm:grid-cols-2 sm:max-w-7xl sm:m-auto',
            'lg:mb-30',
            '2xl:mb-50',
          )}
        >
          <h2 className="sr-only">{tSeo('h2.1')}</h2>
          <WineCard
            price={33}
            src="/img/bottle.white.wine.full.webp"
            title="Calvaire – Sélection"
            type="white"
            url={ROUTES.wine.selection}
          />

          <h2 className="sr-only">{tSeo('h2.2')}</h2>
          <WineCard
            src="/img/bottle.red.wine.hidden.full.webp"
            title="Calvaire - Grande Réserve"
            type="red"
            url={ROUTES.wine.reserve}
          />
        </div>
      </ContentWrapper>
    </>
  );
}
