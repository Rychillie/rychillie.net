import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';

interface ThemeProps {
  children: ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
