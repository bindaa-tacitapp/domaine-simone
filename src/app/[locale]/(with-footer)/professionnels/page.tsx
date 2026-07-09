import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { CONTACT_TYPE, ROUTES } from '@/constants/routes';
import { Locale } from '@/i18n/config';
import { Link } from '@/i18n/navigation';
import { cn } from '@/libs/cn';
import { handleRichTags } from '@/libs/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.professional' });

  return {
    description: t('description'),
    title: t('title'),
  };
}

export default async function Professionals() {
  const t = await getTranslations('professionals');

  return (
    <ContentWrapper className={cn('flex flex-col gap-10 mb-10')} narrow>
      <h1 className={cn('font-h1')}>{t('title')}</h1>

      <div className="grid gap-5">
        <p>{t('content.p1')}</p>
        <p>{t('content.p2')}</p>
        <p>{t('content.p3')}</p>
        <div>{t.rich('content.list', handleRichTags)}</div>
      </div>

      <p>
        {t('content.contact')},&nbsp;
        <Link
          className="underline underline-offset-3 decoration-[currentColor] hover:text-primary-yellow"
          href={{
            pathname: ROUTES.contact,
            query: {
              type: CONTACT_TYPE.restaurant,
            },
          }}
        >
          {t('content.link')}
        </Link>
        .
      </p>
    </ContentWrapper>
  );
}
