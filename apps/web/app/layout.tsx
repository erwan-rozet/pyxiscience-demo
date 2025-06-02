import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { ClientProviders } from './client-providers';

const inter = Montserrat({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Pyxiscience - Plateforme d'apprentissage des mathémathiques",
  description: 'La plateforme scientifique nouvelle génération',
  icons: {
    icon: [{ rel: 'icon', url: '/icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      {' '}
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
