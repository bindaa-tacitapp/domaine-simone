import Image from 'next/image';
import { getLocale } from 'next-intl/server';
import { AppPathname, Link } from '@/i18n/navigation';

type WineCardProps = {
  src: string;
  title: string;
  price: number;
  url: AppPathname;
};

const WineCard = async ({ src, title, price, url }: WineCardProps) => {
  const locale = await getLocale();
  const formattedPrice = price.toLocaleString(locale, {
    currency: 'CHF',
    style: 'currency',
  });

  return (
    <Link href={url}>
      <div className="relative aspect-square mb-5">
        <Image alt={title} layout="fill" objectFit="cover" src={src} />
      </div>
      <h2 className="font-imbue font-medium text-4xl mb-2">{title}</h2>
      <p className="text-muted-foreground">{formattedPrice}</p>
    </Link>
  );
};

export { WineCard };
