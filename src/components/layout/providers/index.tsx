'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import NextIntl from './next-intl';

interface ProvidersProps {
  children: ReactNode;
  locale: string;
}

export default function Providers({ children, locale }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
      <NextIntl locale={locale} timeZone="UTC" now={new Date()}>
        {children}
      </NextIntl>
    </ThemeProvider>
  );
}
