import {
  WineCharacteristic,
  WineCharacteristicProps,
} from '@/app/components/WineCharacteristics/WineCharacteristic';

type WineCharacteristicsProps = {
  items: WineCharacteristicProps[];
};

const WineCharacteristics = ({ items }: WineCharacteristicsProps) => {
  return (
    <ul className="mb-50">
      {items.map(({ label, value }) => (
        <li key={label}>
          <WineCharacteristic label={label} value={value} />
        </li>
      ))}
    </ul>
  );
};

export { WineCharacteristics };
