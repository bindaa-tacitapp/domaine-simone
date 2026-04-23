import { ReactNode } from 'react';

import { cn } from '@/libs/cn';

type ContentWrapperProps = {
  children: ReactNode;
  className?: string;
  wide?: boolean;
};

const ContentWrapper = ({
  children,
  className,
  wide = false,
}: ContentWrapperProps) => {
  return (
    <div
      className={cn(
        'px-5',
        'sm:px-10',
        'lg:px-10 lg:w-full lg:mx-auto',
        {
          'lg:max-w-5xl': !wide,
          'lg:max-w-7xl': wide,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export { ContentWrapper };
