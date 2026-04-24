import { ReactNode } from 'react';

const handleRichTags = {
  bold: (chunks: ReactNode) => <strong>{chunks}</strong>,
  br: () => <br />,
  item: (chunks: ReactNode) => <li>{chunks}</li>,
  link: (chunks: ReactNode) => (
    <a className="underline" href={`mailto:${String(chunks)}`}>
      {chunks}
    </a>
  ),
  list: (chunks: ReactNode) => (
    <ul className="pl-5 list-disc mb-2">{chunks}</ul>
  ),
  p: (chunks: ReactNode) => <p className="mb-2">{chunks}</p>,
  strong: (text: ReactNode) => <strong className="font-medium">{text}</strong>,
};

export { handleRichTags };
