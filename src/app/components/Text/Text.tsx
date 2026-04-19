import { ReactNode } from 'react';
import { cn } from '@/libs/cn';

type TextProps = {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  textSize?: 'sm' | 'md' | 'lg';
  className?: string;
};

const Text = ({
  children,
  align = 'left',
  textSize = 'md',
  className,
}: TextProps) => {
  return (
    <div
      className={cn(
        'max-w-3xl m-auto mb-50',
        'font-barlow font-thin',
        {
          'text-center': align === 'center',
          'text-left': align === 'left',
          'text-right': align === 'right',
        },
        {
          'text-2xl leading-10': textSize === 'lg',
          'text-base leading-7': textSize === 'sm',
          'text-lg leading-8': textSize === 'md',
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export { Text };
