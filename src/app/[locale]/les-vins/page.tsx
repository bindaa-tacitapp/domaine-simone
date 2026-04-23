import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/app/components/ContentWrapper/ContentWrapper';
import { WineCard } from '@/app/components/WineCard/WineCard';
import { ROUTES } from '@/constants/routes';
import { cn } from '@/libs/cn';

export default async function WinesPage() {
  const tCommon = await getTranslations('common');

  return (
    <ContentWrapper wide>
      <div
        className={cn(
          'grid grid-cols-1 gap-10 mb-20',
          'sm:grid-cols-2 sm:max-w-7xl sm:m-auto',
          'lg:mb-30',
          'xl:mb-50',
        )}
      >
        <h1 className="sr-only">{tCommon('nav.wines')}</h1>

        <WineCard
          price={30}
          src="/img/bottle.white.wine.full.webp"
          title="Calvaire – Sélection"
          url={ROUTES.wine.selection}
        />
        <WineCard
          price={250}
          src="/img/bottle.red.wine.full.webp"
          title="Calvaire - Grande Réserve"
          url={ROUTES.wine.reserve}
        />
      </div>
    </ContentWrapper>
  );
}
