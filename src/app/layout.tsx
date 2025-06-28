import type { Metadata } from 'next';
import Footer from '@/components/layout/footer/Footer';
import Header from '@/components/layout/header/Header';
import StoreProvider from '@/app/StoreProvider';
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
        <StoreProvider>
          <div className='layout'>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
