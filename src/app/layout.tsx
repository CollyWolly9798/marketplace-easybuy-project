import type { Metadata } from 'next';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Easybuy',
  description: 'marketplace',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <div className='layout'>
          <Header />
          <main className='main-content'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
