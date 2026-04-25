import { ReactNode } from 'react';
import { Footer } from '@/components/Footer/Footer';

export default async function WithFooterLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <main className="relative grow">{children}</main>

      <Footer />
    </>
  );
}
