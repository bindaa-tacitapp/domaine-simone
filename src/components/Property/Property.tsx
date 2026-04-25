import { ReactNode } from 'react';

type PropertyProps = {
  label: string;
  value: ReactNode;
};

const Property = ({ label, value }: PropertyProps) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-gray-400 uppercase font-medium text-xs">
        {label}
      </span>
      <span className="font-imbue text-6xl font-medium">{value}</span>
    </div>
  );
};

export { Property };
