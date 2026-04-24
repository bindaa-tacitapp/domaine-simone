import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/app/components/ContentWrapper/ContentWrapper';
import { cn } from '@/libs/cn';
import { handleRichTags } from '@/libs/i18n';

export default async function PrivacyPolicyPage() {
  const t = await getTranslations('privacyPolicy');

  const articles = [
    'dataCollection',
    'dataUsage',
    'dataRetention',
    'dataSharing',
    'cookies',
    'yourRights',
    'security',
    'applicableLaw',
  ] as const;

  return (
    <ContentWrapper>
      <article className={cn('mb-10')}>
        <h1 className={cn('font-imbue text-4xl mb-10')}>{t('title')}</h1>

        {articles.map((key) => (
          <section key={key}>
            <h2 className="mt-10 mb-3 text-lg font-medium">
              {t(`content.${key}.title`)}
            </h2>
            <div>{t.rich(`content.${key}.content`, handleRichTags)}</div>
          </section>
        ))}
      </article>
    </ContentWrapper>
  );
}
