import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { CONTACT_TYPE, ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

export default async function Press() {
  const t = await getTranslations('press');

  return (
    <ContentWrapper className={cn('flex flex-col gap-10 mb-10')} narrow>
      <h1 className={cn('font-h1')}>{t('title')}</h1>

      <p>{t('content.paragraph')}</p>

      <p>
        {t('content.contact')},&nbsp;
        <Link
          className="underline underline-offset-3 decoration-[currentColor] hover:text-primary-yellow"
          href={{
            pathname: ROUTES.contact,
            query: {
              type: CONTACT_TYPE.press,
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
