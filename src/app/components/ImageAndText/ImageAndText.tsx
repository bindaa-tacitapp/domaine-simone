import Image from 'next/image';
import { ReactNode } from 'react';
import { Text } from '@/app/components/Text/Text';
import { cn } from '@/libs/cn';

type ImageAndTextProps = {
  src: string;
  alt: string;
  text: ReactNode;
  reverse?: boolean;
};

const ImageAndText = ({
  src,
  alt,
  text,
  reverse = false,
}: ImageAndTextProps) => {
  return (
    <div className={cn('grid grid-cols-2 gap-10 mb-50')}>
      <div
        className={cn('self-center', {
          'order-2': reverse,
        })}
      >
        <Text
          align={reverse ? 'left' : 'right'}
          className="mb-0 justify-self-right"
          textSize="md"
        >
          {text}
        </Text>
      </div>

      <div
        className={cn('relative h-[50vh]', {
          'order-1': reverse,
        })}
      >
        <Image alt={alt} layout="fill" objectFit="cover" src={src} />
      </div>
    </div>
  );
};

export { ImageAndText };
