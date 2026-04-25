import { ReactNode } from 'react';

export default async function WithoutFooterLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <main className="relative grow">{children}</main>;
}
