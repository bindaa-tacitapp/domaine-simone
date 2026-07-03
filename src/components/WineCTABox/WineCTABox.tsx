import { getTranslations } from 'next-intl/server';
import { AskForWineInfoButton } from '@/components/buttons/AskForWineInfoButton/AskForWineInfoButton';
import { BuyWineButton } from '@/components/buttons/BuyWineButton/BuyWineButton';
import { SignUpButton } from '@/components/buttons/SignUpButton/SignUpButton';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

type WineCTABoxProps = {
  type: 'selection' | 'reserve';
  soldOut?: boolean;
};

const WineCTABox = async ({ type, soldOut = false }: WineCTABoxProps) => {
  const t = await getTranslations('wine.common');
  const tWines = await getTranslations('wines');

  return (
    <div
      className={cn('mb-10 text-center', 'sm:mb-15', 'md:mb-15', 'lg:mb-30')}
    >
      <div
        className={cn(
          'mb-5 mx-5 flex flex-col gap-5 items-center',
          'sm:flex-row sm:justify-center',
        )}
      >
        {soldOut ? (
          <>
            <p className="text-muted-foreground">{tWines('availability')}</p>
            <SignUpButton />
          </>
        ) : (
          <>
            <BuyWineButton type={type} />
            <AskForWineInfoButton />
          </>
        )}
      </div>

      {soldOut ? null : (
        <Link className="text-muted-foreground" href={ROUTES.professionals}>
          <span className="underline underline-offset-3 decoration-[currentColor] hover:text-primary-yellow">
            {t('areYouAPro')}
          </span>
        </Link>
      )}
    </div>
  );
};

export { WineCTABox };
