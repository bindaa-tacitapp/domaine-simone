import { ReactNode } from 'react';
import { cn } from '@/libs/cn';

type PropertyProps = {
  label: string;
  value: ReactNode;
  className?: string;
};

const Property = ({ label, value, className }: PropertyProps) => {
  return (
    <div className={cn('flex flex-col items-center gap-1', className)}>
      <span className="text-gray-400 uppercase font-medium text-xs">
        {label}
      </span>
      <span className="font-imbue text-5xl font-medium">{value}</span>
    </div>
  );
};

export { Property };
