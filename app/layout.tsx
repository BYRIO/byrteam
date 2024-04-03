import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import clsx from 'clsx';
import Banner from '@/components/Banner.tsx';

import { SmileySans, DFPHeiW12, Poppins800 } from './fonts/index';

export const metadata: Metadata = {
  title: '北邮人团队',
  description: '北邮人团队2024首页',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          SmileySans.variable,
          DFPHeiW12.variable,
          Poppins800.variable,
          'relative overflow-x-hidden'
        )}
      >
        {/* <Banner /> */}
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
