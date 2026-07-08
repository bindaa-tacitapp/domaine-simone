import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { WineCard } from '@/components/WineCard/WineCard';
import { ROUTES } from '@/constants/routes';
import { Locale } from '@/i18n/config';
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

  return (
    <>
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
