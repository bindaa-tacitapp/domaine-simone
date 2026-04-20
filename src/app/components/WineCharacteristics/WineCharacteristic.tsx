type WineCharacteristicProps = {
  label: string;
  value: string;
};

const WineCharacteristic = ({ label, value }: WineCharacteristicProps) => {
  return (
    <div className="h-15 flex items-center gap-10 border-b border-gray-100 hover:border-gray-300 transition-colors">
      <span className="grow font-medium text-sm">{label}</span>
      <span className="text-right text-muted-foreground uppercase text-xs font-medium">
        {value}
      </span>
    </div>
  );
};

export type { WineCharacteristicProps };
export { WineCharacteristic };
