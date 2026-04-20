'use client';

import Link from 'next/link';
import { getLocalizedPathname } from '@/app/components/LanguageSwitcher/libs';
import { locales } from '@/i18n/config';
import { usePathname } from '@/i18n/navigation';

const LanguageSwitcher = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col flex-wrap gap-2 font-imbue uppercase fixed top-1/2 -translate-y-1/2 right-0 py-2 px-3 bg-white">
      {locales.map((locale) => (
        <li key={locale}>
          <Link
            className="hover:underline"
            href={getLocalizedPathname({ locale, pathname })}
          >
            {locale}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { LanguageSwitcher };
