import { getTranslations } from 'next-intl/server';
import { HeroImage } from '@/app/components/HeroImage/HeroImage';
import { ImageAndText } from '@/app/components/ImageAndText/ImageAndText';
import { Text } from '@/app/components/Text/Text';

export default async function DomainePage() {
  const t = await getTranslations('domain');
  const tCommon = await getTranslations('common');

  return (
    <div>
      <h1 className="sr-only">{tCommon('nav.domain')}</h1>

      <HeroImage src="/img/domain.webp" title={t('title')} />

      <Text align="center" textSize="lg">
        {t('text.intro')}
      </Text>

      <ImageAndText
        alt={t('text.soil.alt')}
        src="/img/soil.webp"
        text={t('text.soil.text')}
      />

      <ImageAndText
        alt={t('text.slope.alt')}
        reverse
        src="/img/slope.webp"
        text={t.rich('text.slope.text', {
          br: () => <br />,
        })}
      />

      <Text align="center" textSize="lg">
        {t('text.outro')}
      </Text>
    </div>
  );
}
