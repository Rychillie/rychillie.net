import { Providers } from '@/app/_components';
import '@/styles/tailwind.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://rychillie.net'),
  title: {
    default: 'Rychillie',
    template: '%s | Rychillie'
  },
  description:
    'A Software Engineer based in the Brazil. Design and tech lover, creating content and sharing knowledge over the internet.',
  openGraph: {
    title: 'Rychillie',
    description:
      'A Software Engineer based in the Brazil. Design and tech lover, creating content and sharing knowledge over the internet.',
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

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth antialiased" suppressHydrationWarning>
      <body className="overflow-x-hidden relative w-screen min-h-screen lg:items-center lg:justify-center lg:flex bg-neutral-50 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50">
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
