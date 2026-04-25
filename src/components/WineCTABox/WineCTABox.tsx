import { AskForWineInfoButton } from '@/components/buttons/AskForWineInfoButton/AskForWineInfoButton';
import { BuyWineButton } from '@/components/buttons/BuyWineButton/BuyWineButton';
import { cn } from '@/libs/cn';

type WineCTABoxProps = {
  type: 'selection' | 'reserve';
};

const WineCTABox = ({ type }: WineCTABoxProps) => {
  return (
    <div
      className={cn(
        'mx-5 mb-10 flex flex-col gap-5',
        'sm:flex-row sm:justify-center',
        'md:mb-15',
        'lg:mb-30',
      )}
    >
      <BuyWineButton type={type} />
      <AskForWineInfoButton />
    </div>
  );
};

export { WineCTABox };
