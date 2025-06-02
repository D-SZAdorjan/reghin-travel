// Fonts
import { Lato, Marcellus, Nunito } from 'next/font/google';

const marcellus = Marcellus({
  variable: '--font-marcellus',
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

const lato = Lato({
  variable: '--font-lato',
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

const nunito = Nunito({
  variable: '--font-nunito',
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
});

import "@/app/globals.css";

// Since we have a root `not-found.tsx` page, a layout file
// is required, even if it's just passing children through.

type Params = Promise<{ locale: string }>;

export default function RootLayout({
    children
  }: Readonly<{
    children: React.ReactNode;
    params: Params;
  }>) {
    return (
    <html lang="en">
      <body className={`${marcellus.variable} ${lato.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
    );
}
