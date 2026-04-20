import { getTranslations } from 'next-intl/server';
import { HeroImage } from '@/app/components/HeroImage/HeroImage';
import { ImageAndText } from '@/app/components/ImageAndText/ImageAndText';
import { Text } from '@/app/components/Text/Text';

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
        {t.rich('introDamien', {
          strong: (text) => <strong className="font-medium">{text}</strong>,
        })}
      </Text>

      <Text align="center">
        {t.rich('introNatalio', {
          strong: (text) => <strong className="font-medium">{text}</strong>,
        })}
      </Text>

      <ImageAndText
        alt={t('damien.alt')}
        reverse
        src="/img/damien.webp"
        text={t.rich('damien.text', {
          br: () => <br />,
        })}
        title={t.rich('damien.title', {
          strong: (text) => <strong className="font-medium">{text}</strong>,
        })}
      />

      <ImageAndText
        alt={t('natalio.alt')}
        src="https://placekeanu.com/1600/1200"
        text={t.rich('natalio.text', {
          br: () => <br />,
        })}
        title={t.rich('natalio.title', {
          strong: (text) => <strong className="font-medium">{text}</strong>,
        })}
      />

      <Text align="center" textSize="lg">
        {t.rich('outro', {
          br: () => <br />,
        })}
      </Text>
    </div>
  );
}
