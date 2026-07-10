import { Metadata } from 'next';
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { ImageAndText } from '@/components/ImageAndText/ImageAndText';
import { Quote } from '@/components/Quote/Quote';
import { Locale } from '@/i18n/config';
import { cn } from '@/libs/cn';
import { handleRichTags } from '@/libs/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'seo.home' });

  return {
    description: t('description'),
    title: t('title'),
  };
}

export default async function HomePage() {
  const t = await getTranslations('home');
  const tSeo = await getTranslations('seo.home');
  const locale = await getLocale();

  return (
    <>
      <h1 className="sr-only">{tSeo('h1')}</h1>
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

      <Quote className={cn('mb-40')}>
        <h2 className="sr-only">{tSeo('h2.1')}</h2>
        {t('title')}
      </Quote>

      <ImageAndText
        alt={t('domain.alt')}
        propertyValue={t('domain.data.value')}
        src="/img/domain.land.webp"
        text={t.rich('domain.text', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.2')}</h2>
      <ImageAndText
        alt={t('calvaire.alt')}
        propertyValue={t('calvaire.data.value')}
        reverse
        src="/img/home.calvaire.webp"
        text={t.rich('calvaire.text', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.3')}</h2>
      <ImageAndText
        alt={t('wine.alt')}
        propertyValue={Intl.NumberFormat(locale).format(
          parseInt(t('wine.data.value'), 10),
        )}
        src="/img/home.bottle.webp"
        text={t.rich('wine.text', handleRichTags)}
      />

      <h2 className="sr-only">{tSeo('h2.4')}</h2>
      <ImageAndText
        alt={t('founders.alt')}
        imageClassName={cn('2xl:object-[50%_45%]')}
        propertyValue={t('founders.data.value')}
        reverse
        src="/img/home.founders.webp"
        text={t.rich('founders.text', handleRichTags)}
      />
    </>
  );
}
