import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { cn } from '@/libs/cn';
import { handleRichTags } from '@/libs/i18n';

export default async function PrivacyPolicyPage() {
  const t = await getTranslations('privacyPolicy');

  const articles = [
    'preamble',
    'dataController',
    'dataCollected',
    'purposes',
    'legalBasis',
    'recipients',
    'retention',
    'cookies',
    'yourRights',
    'dataSecurity',
    'internationalTransfer',
    'minors',
    'policyChanges',
    'contactAndComplaint',
  ] as const;

  return (
    <ContentWrapper>
      <article className={cn('mb-10')}>
        <header className={cn('mb-10')}>
          <h1 className={cn('font-imbue text-4xl mb-2')}>{t('title')}</h1>
          <p className="font-medium">Domaine Simone Sàrl</p>
          <p className={cn('text-muted-foreground')}>{t('lastUpdated')}</p>
        </header>

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
