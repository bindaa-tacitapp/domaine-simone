import { ReactNode } from 'react';
import { cn } from '@/libs/cn';

type PropertyProps = {
  label?: string;
  value: ReactNode;
  className?: string;
  classNameValue?: string;
};

const Property = ({
  label,
  value,
  className,
  classNameValue,
}: PropertyProps) => {
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      {label ? (
        <span className={cn('text-gray-400 uppercase font-medium text-xs')}>
          {label}
        </span>
      ) : null}
      <span className={cn('font-imbue text-5xl font-medium', classNameValue)}>
        {value}
      </span>
    </div>
  );
};

export { Property };
