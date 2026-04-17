const locales = ['fr', 'en', 'it'] as const;

type Locale = (typeof locales)[number];

const defaultLocale: Locale = 'fr';

export { defaultLocale, type Locale, locales };
