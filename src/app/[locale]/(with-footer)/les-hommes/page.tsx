import { getTranslations } from 'next-intl/server';
import { HeroImage } from '@/app/components/HeroImage/HeroImage';
import { ImageAndText } from '@/app/components/ImageAndText/ImageAndText';
import { Text } from '@/app/components/Text/Text';
import { handleRichTags } from '@/libs/i18n';

export default async function MenPage() {
  const t = await getTranslations('men');
  const tCommon = await getTranslations('common');

  return (
    <div>
      <h1 className="sr-only">{tCommon('nav.men')}</h1>

      <HeroImage src="/img/the-man.webp" title={t('title')} />

      <Text align="center" snug textSize="lg">
        {t('intro')}
      </Text>

      <Text align="center" snug>
        {t.rich('introDamien', handleRichTags)}
      </Text>

      <Text align="center">{t.rich('introNatalio', handleRichTags)}</Text>

      <ImageAndText
        alt={t('damien.alt')}
        className="mb-20"
        reverse
        src="/img/damien.webp"
        text={t.rich('damien.text', handleRichTags)}
        title={t.rich('damien.title', handleRichTags)}
      />

      <ImageAndText
        alt={t('natalio.alt')}
        className="mb-20"
        src="https://placekeanu.com/1600/1200"
        text={t.rich('natalio.text', handleRichTags)}
        title={t.rich('natalio.title', handleRichTags)}
      />

      <Text align="center" textSize="lg">
        {t.rich('outro', handleRichTags)}
      </Text>
    </div>
  );
}
