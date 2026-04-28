import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { Property } from '@/components/Property/Property';
import { formatVolume } from '@/components/WineShowcase/libs';
import { cn } from '@/libs/cn';

type WineDetailProps = {
  alcohol: number;
  name: string;
  src: string;
  type: 'red' | 'white';
  quantity: number;
  volume: number;
  year: number;
};

const WineShowcase = async ({
  name,
  src,
  year,
  alcohol,
  type,
  volume,
  quantity,
}: WineDetailProps) => {
  const t = await getTranslations('wine');
  const locale = await getLocale();

  return (
    <div className={cn('mb-10', 'sm:mb-15')}>
      <header className={cn('text-center mb-8', 'lg:mb-10')}>
        <h1
          className={cn('font-imbue uppercase', 'text-6xl', 'lg:text-8xl', {
            'text-primary-red': type === 'red',
            'text-primary-yellow': type === 'white',
          })}
        >
          {name}
        </h1>
      </header>

      <section>
        <div
          className={cn(
            'relative animate-slide-up',
            'mb-10 h-[85vh]',
            'md:mb-15',
            'lg:mb-15',
          )}
        >
          <Image
            alt={`Calvaire ${name}`}
            blurDataURL="/img/placeholder-blur-picture.webp"
            className="object-contain"
            fetchPriority="high"
            fill
            placeholder="blur"
            priority
            src={src}
          />
        </div>

        <div
          className={cn(
            'grid grid-cols-2 gap-5 px-5',
            'sm:grid-cols-4 sm:grid-rows-1',
            'lg:flex lg:items-end lg:justify-end lg:gap-15 lg:sticky lg:bottom-10 lg:left-0 lg:right-0 lg:px-10',
          )}
        >
          <Property label={t('common.vintage')} value={year} />
          <Property
            label={t('common.quantity')}
            value={`${quantity} ${t('common.bottles')}`}
          />
          <div className="hidden lg:block lg:grow" />
          <Property
            className={cn('hidden', 'sm:flex')}
            label={t('common.volume')}
            value={formatVolume(volume, locale)}
          />
          <Property
            className={cn('hidden', 'sm:flex')}
            label={t('common.alcohol')}
            value={`${alcohol}%`}
          />
        </div>
      </section>
    </div>
  );
};

export { WineShowcase };
