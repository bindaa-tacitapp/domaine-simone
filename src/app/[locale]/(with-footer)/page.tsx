'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { ImageAndText } from '@/components/ImageAndText/ImageAndText';
import { Quote } from '@/components/Quote/Quote';
import { cn } from '@/libs/cn';
import { handleRichTags } from '@/libs/i18n';

export default function HomePage() {
  const t = useTranslations('home');
  const locale = useLocale();

  return (
    <>
      <div
        className={cn('relative h-[80vh] mb-25', 'lg:h-[70vh] lg:m-35 lg:mt-0')}
      >
        <Image
          alt={t('imageAlt')}
          blurDataURL="/img/placeholder-blur-picture.webp"
          className={cn('object-cover object-[-85px]', 'lg:object-center')}
          fetchPriority="high"
          fill
          placeholder="blur"
          priority
          src="/img/coat-arms-paper.webp"
        />
      </div>

      <Quote className={cn('mb-40')}>{t('title')}</Quote>

      <ImageAndText
        alt={t('domain.alt')}
        propertyValue={t('domain.data.value')}
        src="/img/domain.land.webp"
        text={t.rich('domain.text', handleRichTags)}
      />

      <ImageAndText
        alt={t('calvaire.alt')}
        propertyValue={t('calvaire.data.value')}
        reverse
        src="/img/home.calvaire.webp"
        text={t.rich('calvaire.text', handleRichTags)}
      />

      <ImageAndText
        alt={t('wine.alt')}
        propertyValue={Intl.NumberFormat(locale).format(
          parseInt(t('wine.data.value'), 10),
        )}
        src="/img/home.wine.webp"
        text={t.rich('wine.text', handleRichTags)}
      />

      <ImageAndText
        alt={t('founders.alt')}
        propertyValue={t('founders.data.value')}
        reverse
        src="/img/home.founders.webp"
        text={t.rich('founders.text', handleRichTags)}
      />
    </>
  );
}
