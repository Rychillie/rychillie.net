import { Providers } from '@/components/layout';
import '@/styles/globals.css';
import c from 'clsx';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://rychillie.net'),
  title: {
    default: 'Rychillie',
    template: '%s | Rychillie'
  },
  description:
    'Creating content and Sharing knowledge over the internet. Design and technology lover collaborating with Open Source projects.',
  openGraph: {
    title: 'Rychillie',
    description:
      'Creating content and Sharing knowledge over the internet. Design and technology lover collaborating with Open Source projects.',
    url: 'https://rychillie.net',
    siteName: 'Rychillie',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Rychillie',
    card: 'summary_large_image'
  }
  // verification: {
  //   google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  //   yandex: '14d2e73487fa6c71',
  // },
};

export interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={c('scroll-smooth', GeistMono.variable, GeistSans.variable)}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden text-sm text-primary antialiased dark:bg-primary dark:text-primary-dark md:text-base lg:text-base">
        <Providers>
          <main className="container mx-auto min-h-full max-w-3xl pb-page-bottom-mobile pt-page-top-mobile md:pb-page-bottom md:pt-page-top">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
