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
    <div className="mb-50">
      <header className="text-center">
        <h1
          className={cn('font-imbue text-8xl', {
            'text-primary-red': type === 'red',
            'text-primary-yellow': type === 'white',
          })}
        >
          {name}
        </h1>
      </header>

      <section>
        <div className="h-[calc(100vh-10vh)] relative animate-slide-up -translate-y-7">
          <Image
            alt={`Calvaire ${name}`}
            blurDataURL="/img/placeholder-blur-picture.webp"
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            src={src}
          />
        </div>

        <ul className="sticky bottom-10 left-0 right-0 flex items-end justify-end gap-15">
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
