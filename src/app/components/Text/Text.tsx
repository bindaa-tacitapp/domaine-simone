import { ReactNode } from 'react';
import { ContentWrapper } from '@/app/components/ContentWrapper/ContentWrapper';
import { cn } from '@/libs/cn';

type TextProps = {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  textSize?: 'md' | 'lg';
  className?: string;
  snug?: boolean;
};

const Text = ({
  children,
  align = 'left',
  textSize = 'md',
  className,
  snug = false,
}: TextProps) => {
  return (
    <ContentWrapper>
      <div
        className={cn(
          'max-w-3xl m-auto',
          'font-barlow font-thin',
          {
            'lg:text-left': align === 'left',
            'lg:text-right': align === 'right',
            'text-center': align === 'center',
          },
          {
            'mb-10': snug,
            'mb-20 lg:mb-50': !snug,
          },
          {
            'leading-7 lg:text-lg lg:leading-8': textSize === 'md',
            'text-xl leading-8 lg:text-2xl lg:leading-10': textSize === 'lg',
          },
          className,
        )}
      >
        {children}
      </div>
    </ContentWrapper>
  );
};

export { Text };
