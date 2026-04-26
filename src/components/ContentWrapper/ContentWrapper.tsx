import { ForwardedRef, forwardRef, ReactNode, RefObject } from 'react';

import { cn } from '@/libs/cn';

type ContentWrapperProps = {
  children: ReactNode;
  className?: string;
  wide?: boolean;
  ref?: RefObject<HTMLDivElement>;
  narrow?: boolean;
};

const ContentWrapper = forwardRef(
  (
    { children, className, wide = false, narrow = false }: ContentWrapperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={cn(
          'px-5',
          'sm:px-10',
          'lg:px-10 lg:w-full lg:mx-auto',
          {
            'lg:max-w-5xl': !wide && !narrow,
            'lg:max-w-7xl': wide,
            'md:max-w-xl': narrow,
          },
          className,
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

export { ContentWrapper };
