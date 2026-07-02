import Image from 'next/image';
import { ReactNode } from 'react';
import { cn } from '@/libs/cn';

type HeroImageProps = {
  alt: string;
  src: string;
  title: ReactNode;
  imgClassName?: string;
};

const HeroImage = ({ alt, src, title, imgClassName }: HeroImageProps) => {
  return (
    <div
      className={cn(
        'relative h-[60vh] mb-20',
        'lg:mb-30',
        '2xl:h-[50vh] 2xl:w-full 2xl:mb-50',
      )}
    >
      <Image
        alt={alt}
        blurDataURL="/img/placeholder-blur-picture.webp"
        className={cn('brightness-75 object-cover', imgClassName)}
        fetchPriority="high"
        fill
        placeholder="blur"
        priority
        src={src}
      />

      <p
        className={cn(
          'absolute top-1/2 -translate-y-1/2',
          'font-imbue text-white text-center',
          'left-0 w-full px-5 text-5xl leading-15',
          'sm:px-10 sm:text-6xl sm:leading-18',
          'lg:left-1/2 lg:-translate-x-1/2 lg:text-7xl lg:leading-20 lg:w-auto lg:px-0',
        )}
      >
        {title}
      </p>
    </div>
  );
};

export { HeroImage };
