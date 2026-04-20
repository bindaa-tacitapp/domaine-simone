import { WineCard } from '@/app/components/WineCard/WineCard';
import { ROUTES } from '@/constants/routes';

export default async function WinesPage() {
  return (
    <div className="grid grid-cols-2 gap-10 max-w-7xl m-auto">
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
  );
}
