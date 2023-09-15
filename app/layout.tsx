import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/Footer';
import clsx from 'clsx';
import Banner from '@/components/Banner.tsx';

const SmileySans = localFont({
  src: './fonts/SmileySans.woff2',
  variable: '--font-smiley',
});

export const metadata: Metadata = {
  title: '北邮人团队',
  description: '北邮人团队2023首页',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(SmileySans.variable, 'relative overflow-x-hidden')}>
        <Banner />
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
