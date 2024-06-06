import { Providers } from '@/components/layout';
import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import c from 'clsx';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
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
  params: { locale: string };
}

export default async function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={c('scroll-smooth antialiased', GeistMono.variable, GeistSans.variable)}
      suppressHydrationWarning
    >
      <body className="overflow-x-hidden text-sm text-primary dark:bg-primary dark:text-primary-dark md:text-base lg:text-base">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <main className="container mx-auto min-h-full max-w-3xl pb-page-bottom-mobile pt-page-top-mobile md:pb-page-bottom md:pt-page-top">
              {children}
            </main>
          </Providers>
        </NextIntlClientProvider>
      </body>

      <Analytics />
      <SpeedInsights />
    </html>
  );
}
