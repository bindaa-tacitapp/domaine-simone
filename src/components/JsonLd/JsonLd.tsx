import type { Thing, WithContext } from 'schema-dts';

type JsonLdProps = {
  data: WithContext<Thing>;
};

export const JsonLd = ({ data }: JsonLdProps) => (
  <script
    // biome-ignore lint/security/noDangerouslySetInnerHtml: necessary for the structured data
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, '\\u003c'),
    }}
    type="application/ld+json"
  />
);
