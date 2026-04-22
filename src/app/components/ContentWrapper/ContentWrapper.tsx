import { ReactNode } from 'react';

import { cn } from '@/libs/cn';

type ContentWrapperProps = {
  children: ReactNode;
  className?: string;
};

const ContentWrapper = ({ children, className }: ContentWrapperProps) => {
  return (
    <div
      className={cn(
        'px-5',
        'lg:px-10 lg:max-w-5xl lg:w-full lg:mx-auto',
        className,
      )}
    >
      {children}
    </div>
  );
};

export { ContentWrapper };
