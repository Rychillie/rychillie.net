'use client';

import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}