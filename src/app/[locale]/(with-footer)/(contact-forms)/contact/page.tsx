import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { FormContact } from '@/components/forms/FormContact';
import { ContactType, ROUTES } from '@/constants/routes';
import { Locale } from '@/i18n/config';
import { getPathname } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

type Props = {
  searchParams: Promise<{ type: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: getPathname({ href: ROUTES.contact, locale }),
    },
  };
}

export default async function ContactPage({ searchParams }: Props) {
  const [t, { type }] = await Promise.all([
    getTranslations('forms.common'),
    searchParams,
  ]);

  return (
    <ContentWrapper className={cn('flex flex-col gap-10 mb-10')} narrow>
      <h1 className={cn('font-h1')}>{t('title')}</h1>

      <p>{t('subtitle')}</p>

      <FormContact {...(type ? { type: type as ContactType } : {})} />
    </ContentWrapper>
  );
}
