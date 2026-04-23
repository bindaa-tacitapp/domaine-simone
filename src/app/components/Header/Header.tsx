'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { ContentWrapper } from '@/app/components/ContentWrapper/ContentWrapper';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

const Header = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const t = useTranslations('common');

  const handleOnMenuClick = () => {
    if (!checkbox.current) {
      return;
    }

    checkbox.current.checked = false;
  };

  return (
    <ContentWrapper
      className={cn(
        'sticky top-0 z-50 bg-white',
        'lg:static lg:bg-transparent',
      )}
    >
      <nav
        className={cn(
          'font-imbue uppercase text-2xl',
          'mb-5',
          'md:mb-10',
          'xl:mb-15',
        )}
      >
        <div
          className={cn(
            'relative z-50 flex justify-between items-center',
            'lg:hidden',
          )}
        >
          <div className="aspect-square w-15 relative">
            <Link className="h-full" href="/" onClick={handleOnMenuClick}>
              <Image
                alt={t('nav.home')}
                blurDataURL="/img/placeholder-blur-picture.webp"
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                src="/img/coat-arms.webp"
              />
            </Link>
          </div>
          <label aria-label={t('menu.toggle')} htmlFor="menu-toggle">
            {t('menu.label')}
          </label>
        </div>

        <input
          className="sr-only peer"
          id="menu-toggle"
          ref={checkbox}
          type="checkbox"
        />

        <div
          className={cn(
            'not-peer-checked:opacity-0 not-peer-checked:-translate-y-[2vh] not-peer-checked:hidden starting:peer-checked:opacity-0 starting:peer-checked:transform-[translateY(-2vh)] peer-checked:block peer-checked:opacity-100 peer-checked:translate-y-0 transition-all transition-discrete duration-300 ease-in-out',
            'fixed z-30 top-0 left-0 right-0 bottom-0 bg-white',
            'lg:static lg:block lg:opacity-100 lg:not-peer-checked:opacity-100 lg:not-peer-checked:block lg:not-peer-checked:translate-y-0',
          )}
        >
          <ul
            className={cn(
              'h-full flex flex-col gap-10 items-center justify-center',
              'lg:flex-row lg:gap-[unset] lg:items-center lg:justify-between lg:max-w-5xl lg:m-auto',
            )}
          >
            <li>
              <Link
                className={cn('hover:text-primary-yellow transition-colors')}
                href={ROUTES.domain}
                onClick={handleOnMenuClick}
              >
                {t('nav.domain')}
              </Link>
            </li>
            <li>
              <Link
                className={cn('hover:text-primary-yellow transition-colors')}
                href={ROUTES.brand}
                onClick={handleOnMenuClick}
              >
                {t('nav.brand')}
              </Link>
            </li>
            <li
              className={cn(
                'hidden',
                'lg:block lg:aspect-square lg:h-20 lg:relative',
              )}
            >
              <Link className="h-full" href="/" onClick={handleOnMenuClick}>
                <Image
                  alt={t('nav.home')}
                  blurDataURL="/img/placeholder-blur-picture.webp"
                  className="max-h-full object-contain"
                  layout="fill"
                  objectFit="contain"
                  placeholder="blur"
                  src="/img/coat-arms.webp"
                />
              </Link>
            </li>
            <li>
              <Link
                className={cn('hover:text-primary-yellow transition-colors')}
                href={ROUTES.wines}
                onClick={handleOnMenuClick}
              >
                {t('nav.wines')}
              </Link>
            </li>
            <li>
              <Link
                className={cn('hover:text-primary-yellow transition-colors')}
                href={ROUTES.men}
                onClick={handleOnMenuClick}
              >
                {t('nav.men')}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </ContentWrapper>
  );
};

export { Header };
