const locales = ['fr', 'en', 'it', 'de'] as const;

type Locale = (typeof locales)[number];

const defaultLocale: Locale = 'fr';

export { defaultLocale, type Locale, locales };
