import { ReactNode } from 'react';
import { ContentWrapper } from '@/app/components/ContentWrapper/ContentWrapper';
import { cn } from '@/libs/cn';

type QuoteProps = {
  children: ReactNode;
  className?: string;
};

const Quote = ({ children, className }: QuoteProps) => {
  return (
    <ContentWrapper>
      <div
        className={cn(
          className,
          'font-imbue text-center m-auto',
          'mb-20 text-4xl leading-12',
          'md:mb-30',
          'lg:max-w-4xl lg:mb-50 lg:text-5xl lg:leading-15',
        )}
      >
        <span
          className={cn(
            'relative inline-block',
            'before:absolute before:content-["“"] before:opacity-10',
            'before:text-[250px] before:top-7 before:-left-3',
            'lg:before:top-10 lg:before:-left-20',
            'after:text-[250px] after:absolute after:content-["”"] after:opacity-10',
            'after:bottom-0 after:translate-y-31 after:-right-3',
            'lg:after:top-10 lg:after:-right-17 lg:after:translate-y-0',
          )}
        >
          {children}
        </span>
      </div>
    </ContentWrapper>
  );
};

export { Quote };
