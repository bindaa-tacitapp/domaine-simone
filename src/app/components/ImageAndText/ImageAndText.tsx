import Image from 'next/image';
import { ReactNode } from 'react';
import { Text } from '@/app/components/Text/Text';
import { cn } from '@/libs/cn';

type ImageAndTextProps = {
  src: string;
  alt: string;
  text: ReactNode;
  reverse?: boolean;
  title?: ReactNode;
  className?: string;
};

const ImageAndText = ({
  src,
  alt,
  text,
  reverse = false,
  title,
  className,
}: ImageAndTextProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-10 mb-10',
        'lg:grid-cols-2 lg:mb-50',
        className,
      )}
    >
      <div
        className={cn('self-center', {
          'lg:order-2': reverse,
        })}
      >
        <Text
          align={reverse ? 'left' : 'right'}
          className="mb-0 justify-self-right"
        >
          {title ? <h2 className="font-imbue text-4xl mb-8">{title}</h2> : null}

          {text}
        </Text>
      </div>

      <div
        className={cn('relative h-[50vh] mx-5', 'lg:mx-0', {
          'lg:order-1': reverse,
        })}
      >
        <Image
          alt={alt}
          blurDataURL={
            src.startsWith('https://placekeanu.com')
              ? undefined
              : '/img/placeholder-blur-picture.webp'
          }
          layout="fill"
          objectFit="cover"
          placeholder={
            src.startsWith('https://placekeanu.com') ? undefined : 'blur'
          }
          src={src}
          unoptimized={src.startsWith('https://placekeanu.com')}
        />
      </div>
    </div>
  );
};

export { ImageAndText };
