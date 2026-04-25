'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useBlockScroll } from '@/app/hooks/useBlockScroll';
import { cn } from '@/libs/cn';

export default function HomePage() {
  const { blockScrollOnRef } = useBlockScroll();
  const t = useTranslations('home');

  return (
    <div
      className={cn(
        'absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center',
        'lg:bottom-10 lg:left-10 lg:right-10',
      )}
      ref={blockScrollOnRef}
    >
      <Image
        alt={t('imageAlt')}
        blurDataURL="/img/placeholder-blur-picture.webp"
        className="object-cover"
        fetchPriority="high"
        fill
        placeholder="blur"
        priority
        src="/img/red-trunk.webp"
      />

      <span
        className={cn(
          'absolute font-imbue uppercase',
          'top-[40%] left-1/2 w-1/2 text-right text-[11vw] pr-5 leading-[11vw]',
          'sm:w-1/2 sm:text-[8vw] sm:leading-[8vw] sm:pr-10',
          'lg:text-[6vw] lg:leading-[6vw] lg:pr-10 lg:left-2/3 lg:w-1/3 lg:text-left',
          '2xl:text-[5vw] 2xl:top-1/2 2xl:pr-0',
        )}
      >
        {t('title')}
      </span>
    </div>
  );
}
