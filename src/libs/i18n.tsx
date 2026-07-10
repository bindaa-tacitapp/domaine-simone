import { ReactNode } from 'react';
import { ROUTES } from '@/constants/routes';
import { Link } from '@/i18n/navigation';

const linkClassName =
  'hover:text-primary-yellow transition-colors cursor-pointer underline underline-offset-2';

const handleRichTags = {
  bold: (chunks: ReactNode) => <strong>{chunks}</strong>,
  br: () => <br />,
  cell: (chunks: ReactNode) => (
    <td className="py-2 pr-4 align-top">{chunks}</td>
  ),
  item: (chunks: ReactNode) => <li>{chunks}</li>,
  link: (chunks: ReactNode) => (
    <a className="underline" href={`mailto:${String(chunks)}`}>
      {chunks}
    </a>
  ),
  linkCalvaire: (chunks: ReactNode) => (
    <Link className={linkClassName} href={ROUTES.brand}>
      {chunks}
    </Link>
  ),
  linkChangins: () => (
    <a
      className={linkClassName}
      href="https://www.changins.ch"
      rel="noopener"
      target="_blank"
    >
      Changins
    </a>
  ),
  linkDomain: (chunks: ReactNode) => (
    <Link className={linkClassName} href={ROUTES.domain}>
      {chunks}
    </Link>
  ),
  linkFounders: (chunks: ReactNode) => (
    <Link className={linkClassName} href={ROUTES.men}>
      {chunks}
    </Link>
  ),
  linkSelection: (chunks: ReactNode) => (
    <Link className={linkClassName} href={ROUTES.wine.selection}>
      {chunks}
    </Link>
  ),
  list: (chunks: ReactNode) => (
    <ul className="pl-5 list-disc mb-2">{chunks}</ul>
  ),
  orderedList: (chunks: ReactNode) => (
    <ol className="pl-5 list-decimal mb-2">{chunks}</ol>
  ),
  p: (chunks: ReactNode) => <p className="mb-2">{chunks}</p>,
  row: (chunks: ReactNode) => <tr className="border-b">{chunks}</tr>,
  strong: (text: ReactNode) => <strong className="font-medium">{text}</strong>,
  table: (chunks: ReactNode) => (
    <div className="overflow-x-auto mb-2">
      <table className="w-full border-collapse text-sm">
        <tbody>{chunks}</tbody>
      </table>
    </div>
  ),
  th: (chunks: ReactNode) => (
    <th className="py-2 pr-4 text-left font-medium">{chunks}</th>
  ),
};

export { handleRichTags };
