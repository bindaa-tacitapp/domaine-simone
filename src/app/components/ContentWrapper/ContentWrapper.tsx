import { ForwardedRef, forwardRef, ReactNode, RefObject } from 'react';

import { cn } from '@/libs/cn';

type ContentWrapperProps = {
  children: ReactNode;
  className?: string;
  wide?: boolean;
  ref?: RefObject<HTMLDivElement>;
};

const ContentWrapper = forwardRef(
  (
    { children, className, wide = false }: ContentWrapperProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
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
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

export { ContentWrapper };
