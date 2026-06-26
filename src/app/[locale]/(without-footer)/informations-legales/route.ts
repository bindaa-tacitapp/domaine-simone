import { getLocale } from 'next-intl/server';
import { ROUTES } from '@/constants/routes';
import { redirect } from '@/i18n/navigation';

export async function GET() {
  const locale = await getLocale();

  redirect({
    href: ROUTES.wine.selection,
    locale,
  });
}
