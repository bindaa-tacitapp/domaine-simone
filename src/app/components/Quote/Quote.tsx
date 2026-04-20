import { ReactNode } from 'react';
import { cn } from '@/libs/cn';

type QuoteProps = {
  children: ReactNode;
  className?: string;
};

const Quote = ({ children, className }: QuoteProps) => {
  return (
    <div
      className={cn(
        className,
        'max-w-4xl m-auto mb-50',
        'font-imbue text-5xl text-center leading-15',
      )}
    >
      <span
        className={cn(
          'relative inline-block',
          'before:absolute before:content-["“"] before:text-[250px] before:opacity-10 before:top-10 before:-left-20',
          'after:absolute after:content-["”"] after:text-[250px] after:opacity-10 after:top-10 after:-right-17',
        )}
      >
        {children}
      </span>
    </div>
  );
};

export { Quote };
