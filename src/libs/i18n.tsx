import { ReactNode } from 'react';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/navigation';

const handleRichTags = {
  bold: (chunks: ReactNode) => <strong>{chunks}</strong>,
  br: () => <br />,
  item: (chunks: ReactNode) => <li>{chunks}</li>,
  link: (chunks: ReactNode) => (
    <a className="underline" href={`mailto:${String(chunks)}`}>
      {chunks}
    </a>
  ),
  linkCalvaire: (chunks: ReactNode) => (
    <Link
      className="hover:text-primary-yellow transition-colors cursor-pointer underline underline-offset-2"
      href={ROUTES.brand}
    >
      {chunks}
    </Link>
  ),
  linkChangins: () => (
    <a
      className="hover:text-primary-yellow transition-colors cursor-pointer underline underline-offset-2"
      href="https://www.changins.ch"
      rel="noopener"
      target="_blank"
    >
      Changins
    </a>
  ),
  list: (chunks: ReactNode) => (
    <ul className="pl-5 list-disc mb-2">{chunks}</ul>
  ),
  p: (chunks: ReactNode) => <p className="mb-2">{chunks}</p>,
  strong: (text: ReactNode) => <strong className="font-medium">{text}</strong>,
};

export { handleRichTags };
