import type { ReactNode } from 'react';
import Theme from './theme';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return <Theme>{children}</Theme>;
}
