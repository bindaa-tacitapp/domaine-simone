import Image from 'next/image';
import { cn } from '@/libs/cn';

type HeroImageProps = {
  src: string;
  title: string;
};

const HeroImage = ({ src, title }: HeroImageProps) => {
  return (
    <div
      className={cn(
        'relative h-[60vh] mb-20',
        'lg:h-[50vh] lg:w-full lg:mb-50',
      )}
    >
      <Image
        alt={title}
        blurDataURL="/img/placeholder-blur-picture.webp"
        className="brightness-75"
        fetchPriority="high"
        layout="fill"
        objectFit="cover"
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
