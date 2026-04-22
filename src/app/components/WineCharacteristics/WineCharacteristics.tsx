import { ContentWrapper } from '@/app/components/ContentWrapper/ContentWrapper';
import {
  WineCharacteristic,
  WineCharacteristicProps,
} from '@/app/components/WineCharacteristics/WineCharacteristic';
import { cn } from '@/libs/cn';

type WineCharacteristicsProps = {
  items: WineCharacteristicProps[];
};

const WineCharacteristics = ({ items }: WineCharacteristicsProps) => {
  return (
    <ContentWrapper>
      <ul className={cn('mb-20 lg:mb-50')}>
        {items.map(({ label, value }) => (
          <li key={label}>
            <WineCharacteristic label={label} value={value} />
          </li>
        ))}
      </ul>
    </ContentWrapper>
  );
};

export { WineCharacteristics };
