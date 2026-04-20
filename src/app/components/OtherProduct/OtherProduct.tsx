import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { AppPathname, Link } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

type OtherProductProps = {
  url: AppPathname;
  name: string;
  src: string;
  alt: string;
  type: 'red' | 'white';
};

const OtherProduct = async ({
  url,
  name,
  src,
  alt,
  type,
}: OtherProductProps) => {
  const t = await getTranslations('otherProducts');

  return (
    <div
      className={cn(
        'px-10 py-15  -ml-10 -mr-10',
        'flex',
        'bg-gray-100 text-gray-700',
      )}
    >
      <h3 className="font-imbue text-5xl uppercase grow">
        <p className="max-w-60">{t('title')}</p>
      </h3>

      <Link
        className="flex flex-col gap-5 items-center border-l border-gray-300"
        href={url}
      >
        <div className="w-60 aspect-square relative">
          <Image alt={alt} layout="fill" objectFit="contain" src={src} />
        </div>

        <h4 className="font-imbue text-3xl">{name}</h4>
      </Link>
    </div>
  );
};

export { OtherProduct };
