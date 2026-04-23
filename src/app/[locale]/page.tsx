import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { cn } from '@/libs/cn';

export default async function HomePage() {
  const t = await getTranslations('home');

  return (
    <div
      className={cn(
        'absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center',
        'lg:bottom-10 lg:left-10 lg:right-10',
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
          'absolute font-imbue text-primary-red',
          'top-[36%] left-3/5 w-2/5 text-right text-[15vw] pr-5 leading-[15vw]',
          'sm:w-1/3 sm:text-[12vw] sm:leading-[12vw]',
          'lg:text-[8vw] lg:leading-[8vw] lg:pr-10',
          '2xl:text-[5vw] 2xl:top-1/2 2xl:left-2/3 2xl:w-1/3 2xl:text-left 2xl:pr-0',
        )}
      >
        {t('title')}
      </span>
    </div>
  );
}
