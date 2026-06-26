import { getTranslations } from 'next-intl/server';
import { SeeWinesButton } from '@/components/buttons/SeeWinesButton/SeeWinesButton';
import { HeroImage } from '@/components/HeroImage/HeroImage';
import { ImageAndText } from '@/components/ImageAndText/ImageAndText';
import { Text } from '@/components/Text/Text';
import { handleRichTags } from '@/libs/i18n';

export default async function DomainePage() {
  const t = await getTranslations('domain');
  const tCommon = await getTranslations('common');

  return (
    <div>
      <h1 className="sr-only">{tCommon('nav.domain')}</h1>

      <HeroImage
        alt={t('alt')}
        src="/img/domain.drone.webp"
        title={t.rich('title', handleRichTags)}
      />

      <Text align="center" textSize="lg">
        {t.rich('text.intro', handleRichTags)}
      </Text>

      <ImageAndText
        alt={t('text.soil.alt')}
        src="/img/soil.webp"
        text={t.rich('text.soil.text', handleRichTags)}
      />

      <ImageAndText
        alt={t('text.slope.alt')}
        reverse
        src="/img/slope.webp"
        text={t.rich('text.slope.text', handleRichTags)}
      />

      <ImageAndText
        alt={t('text.sun.alt')}
        className="mb-20"
        src="/img/new.grown.grape.webp"
        text={t.rich('text.sun.text', handleRichTags)}
      />

      <Text align="center" textSize="lg">
        {t('text.outro')}
      </Text>

      <Text align="center" className="text-center">
        <SeeWinesButton />
      </Text>
    </div>
  );
}
