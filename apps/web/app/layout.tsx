import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Layout } from '@repo/ui';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Pyxiscience - Plateforme d'apprentissage des mathémathiques",
  description: 'La plateforme scientifique nouvelle génération',
  icons: {
    icon: [{ rel: 'icon', url: '/icon.png' }],
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      {' '}
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
