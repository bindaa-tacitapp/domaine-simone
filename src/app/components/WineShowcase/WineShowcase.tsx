import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Property } from '@/app/components/Property/Property';
import { cn } from '@/libs/cn';

type WineDetailProps = {
  name: string;
  src: string;
  year: number;
  alcohol: number;
  type: 'red' | 'white';
};

const WineShowcase = async ({
  name,
  src,
  year,
  alcohol,
  type,
}: WineDetailProps) => {
  const t = await getTranslations('wine');

  return (
    <div className={cn('mb-10', 'md:mb-15', 'lg:mb-30')}>
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
            'mb-10 h-[calc(100vh-15vh)]',
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

        <ul
          className={cn(
            'grid grid-cols-2 gap-10 px-5',
            'lg:flex lg:items-end lg:justify-end lg:gap-15 lg:sticky lg:bottom-10 lg:left-0 lg:right-0 lg:px-10',
          )}
        >
          <li>
            <Property label={t('common.alcohol')} value={`${alcohol}%`} />
          </li>
          <li>
            <Property label={t('common.vintage')} value={year} />
          </li>
        </ul>
      </section>
    </div>
  );
};

export { WineShowcase };
