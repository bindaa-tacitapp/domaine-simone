'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { cn } from '@/libs/cn';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div className={cn('relative h-[80vh]', 'lg:m-10 lg:mt-0')}>
      <Image
        alt={t('imageAlt')}
        blurDataURL="/img/placeholder-blur-picture.webp"
        className={cn('object-cover object-[-85px]', 'lg:object-center')}
        fetchPriority="high"
        fill
        placeholder="blur"
        priority
        src="/img/coat-arms-paper.webp"
      />
    </div>
  );
}
