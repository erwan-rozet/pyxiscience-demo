import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { ClientProviders } from './client-providers';

const font = Montserrat({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Pyxiscience - Plateforme d'apprentissage des mathémathiques",
  description: 'La plateforme scientifique nouvelle génération',
  icons: {
    icon: [
      { rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="fr">
      {' '}
      <body className={font.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
