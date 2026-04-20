import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

const Header = async () => {
  const t = await getTranslations('common.nav');

  return (
    <nav className="font-imbue uppercase text-2xl">
      <ul className="flex items-center justify-between max-w-5xl m-auto">
        <li>
          <Link
            className={cn('hover:text-primary-yellow transition-colors')}
            href={ROUTES.domain}
          >
            {t('domain')}
          </Link>
        </li>
        <li>
          <Link
            className={cn('hover:text-primary-yellow transition-colors')}
            href={ROUTES.brand}
          >
            {t('brand')}
          </Link>
        </li>
        <li>
          <Link className="h-full" href="/">
            <Image
              alt={t('home')}
              blurDataURL="/img/placeholder-blur-picture.webp"
              className="max-h-full object-contain"
              height={140}
              placeholder="blur"
              src="/img/coat-arms.webp"
              width={127}
            />
          </Link>
        </li>
        <li>
          <Link
            className={cn('hover:text-primary-yellow transition-colors')}
            href={ROUTES.wines}
          >
            {t('wines')}
          </Link>
        </li>
        <li>
          <Link
            className={cn('hover:text-primary-yellow transition-colors')}
            href={ROUTES.men}
          >
            {t('men')}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Header };
