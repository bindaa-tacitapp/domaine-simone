'use client';

import Link from 'next/link';
import { getLocalizedPathname } from '@/components/LanguageSwitcher/libs';
import { locales } from '@/i18n/config';
import { usePathname } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

type LanguageSwitcherProps = {
  variant?: 'desktop' | 'mobile';
  className?: string;
};

const LanguageSwitcher = ({
  className,
  variant = 'desktop',
}: LanguageSwitcherProps) => {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        'font-imbue uppercase fixed bg-white',
        {
          'flex flex-col flex-wrap gap-2 top-1/2 -translate-y-1/2 right-0 py-2 px-3 text-xl':
            variant === 'desktop',
          'flex gap-4 bottom-10 left-0 justify-center w-full text-base':
            variant === 'mobile',
        },
        className,
      )}
    >
      {locales.map((locale) => (
        <li key={locale}>
          <Link
            className="hover:underline"
            href={getLocalizedPathname({ locale, pathname })}
            prefetch={false}
            scroll={false}
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { LanguageSwitcher };
