import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { ContentWrapper } from '@/components/ContentWrapper/ContentWrapper';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/navigation';
import { cn } from '@/libs/cn';

const Footer = async () => {
  const t = await getTranslations('footer');

  return (
    <footer
      className={cn(
        'bg-black text-white relative',
        'py-10',
        'sm:py-15',
        'md:py-20',
      )}
    >
      <h3 className="sr-only">{t('title')}</h3>

      <ContentWrapper>
        <div
          className={cn(
            'grid grid-cols-1 gap-10',
            'sm:grid-cols-2 sm:gap-15',
            'md:grid-cols-3 md:items-start md:gap-10',
            'lg:gap-20',
          )}
        >
          <div>
            <header className={cn('font-medium mb-3')}>
              {t('contact.title')}
            </header>

            <ul className={cn('')}>
              <li>
                <Link
                  className="hover:underline"
                  href={ROUTES.forms.restaurant}
                >
                  {t('contact.restaurant')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={ROUTES.forms.press}>
                  {t('contact.press')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={ROUTES.forms.other}>
                  {t('contact.other')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <header className={cn('font-medium mb-3')}>
              {t('legal.title')}
            </header>

            <ul>
              <li>
                <Link
                  className="hover:underline"
                  href={ROUTES.termsAndConditions}
                >
                  {t('legal.termsAndConditions')}
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href={ROUTES.legalNotice}>
                  {t('legal.legalMentions')}
                </Link>
              </li>

              <li>
                <Link className="hover:underline" href={ROUTES.privacyPolicy}>
                  {t('legal.privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>

          <div className={cn('flex items-center gap-4')}>
            <div className={cn('aspect-square w-12 relative')}>
              <Image
                alt={t('logo.alt')}
                blurDataURL="/img/placeholder-blur-picture.webp"
                className="object-contain invert brightness-0"
                fill
                placeholder="blur"
                src="/img/coat-arms.svg"
              />
            </div>

            <p className={cn('font-imbue uppercase text-3xl')}>
              {t('logo.title')}
            </p>
          </div>
        </div>
      </ContentWrapper>

      {/* <div className="fixed bottom-0 left-0 right-0 h-2.5 bg-black" /> */}
    </footer>
  );
};

export { Footer };
