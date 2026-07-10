import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { AppPathname, Link } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

type WineCardProps = {
  src: string;
  title: string;
  price?: number;
  url: AppPathname;
  type: 'red' | 'white';
};

const WineCard = async ({ src, title, price, url, type }: WineCardProps) => {
  const t = await getTranslations('wines');
  const locale = await getLocale();
  const formattedPrice = price
    ? price.toLocaleString(locale, {
        currency: 'CHF',
        style: 'currency',
      })
    : t('availability');

  return (
    <Link href={url}>
      <div className="relative aspect-square mb-5 overflow-hidden">
        <Image
          alt={title}
          blurDataURL="/img/placeholder-blur-picture.webp"
          className="object-cover hover:scale-104 transition-transform duration-500 ease-in-out"
          fill
          placeholder="blur"
          src={src}
        />
      </div>
      <h2 className={cn('font-imbue font-medium text-4xl uppercase')}>
        {title}
      </h2>
      <p className={cn('mb-2 font-medium')}>
        {type === 'red' ? t('type.red') : t('type.white')}
      </p>
      <p className="text-muted-foreground">{formattedPrice}</p>
    </Link>
  );
};

export { WineCard };
