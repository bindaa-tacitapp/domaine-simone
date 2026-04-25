import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import {
  WineCharacteristic,
  WineCharacteristicProps,
} from '@/components/WineCharacteristics/WineCharacteristic';
import { cn } from '@/libs/cn';

type WineCharacteristicsProps = {
  items: WineCharacteristicProps[];
};

const WineCharacteristics = ({ items }: WineCharacteristicsProps) => {
  return (
    <ContentWrapper>
      <ul className={cn('mb-20 lg:mb-30 2xl:mb-50')}>
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
