import Image from 'next/image';
import { ReactNode } from 'react';
import { Property } from '@/components/Property/Property';
import { Text } from '@/components/Text/Text';
import { cn } from '@/libs/cn';

type ImageAndTextProps = {
  src: string;
  alt: string;
  text: ReactNode;
  reverse?: boolean;
  title?: ReactNode;
  className?: string;
  imageClassName?: string;
  propertyValue?: string;
};

const ImageAndText = ({
  src,
  alt,
  text,
  reverse = false,
  title,
  className,
  imageClassName,
  propertyValue,
}: ImageAndTextProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-10 mb-10',
        'lg:grid-cols-2 lg:mb-30 lg:items-center lg:gap-5',
        '2xl:mb-50',
        className,
      )}
    >
      <div
        className={cn({
          'lg:order-2': reverse,
        })}
      >
        <Text
          align={reverse ? 'left' : 'right'}
          className="mb-0 justify-self-right"
          noMargin
        >
          {title ? (
            <h2 className="font-imbue text-4xl mb-8 uppercase">{title}</h2>
          ) : null}

          {text}
        </Text>
      </div>

      <div
        className={cn('relative h-[50vh] mx-5', 'sm:mx-10', 'lg:mx-0', {
          'lg:order-1': reverse,
        })}
      >
        <Image
          alt={alt}
          blurDataURL="/img/placeholder-blur-picture.webp"
          className={cn('object-cover', imageClassName)}
          fill
          placeholder="blur"
          src={src}
        />

        {propertyValue ? (
          <Property
            className={cn(
              'absolute bottom-5 right-5 text-white text-shadow-md/10',
              'md:bottom-10 md:right-10',
            )}
            classNameValue={cn('md:text-6xl')}
            value={propertyValue}
          />
        ) : null}
      </div>
    </div>
  );
};

export { ImageAndText };
