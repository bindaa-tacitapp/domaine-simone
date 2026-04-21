import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { cn } from '@/libs/cn';

export default async function HomePage() {
  const t = await getTranslations('home');

  return (
    <div
      className={cn(
        'absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center',
        'lg:bottom-10',
      )}
    >
      <Image
        alt={t('imageAlt')}
        blurDataURL="/img/placeholder-blur-picture.webp"
        fetchPriority="high"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        priority
        src="/img/red-trunk.webp"
      />

      <span
        className={cn(
          'absolute top-1/2 left-2/3 w-1/3',
          'font-imbue text-[5vw] text-primary-red',
        )}
      >
        {t('title')}
      </span>
    </div>
  );
}
