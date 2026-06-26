import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { FormContact } from '@/components/forms/FormContact';
import { ContactType } from '@/constants/routes';
import { cn } from '@/libs/cn';

type Props = {
  searchParams: Promise<{ type: string }>;
};

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
