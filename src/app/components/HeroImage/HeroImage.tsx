import Image from 'next/image';
import { cn } from '@/libs/cn';

type HeroImageProps = {
  src: string;
  title: string;
};

const HeroImage = ({ src, title }: HeroImageProps) => {
  return (
    <div className="h-[50vh] w-full relative mb-50">
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
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'font-imbue text-7xl text-white text-center leading-20',
        )}
      >
        {title}
      </p>
    </div>
  );
};

export { HeroImage };
