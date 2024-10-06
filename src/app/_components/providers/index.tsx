import type { ReactNode } from 'react';
import Blur from './blur';
import Theme from './theme';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <Theme>
      <Blur>{children}</Blur>
    </Theme>
  );
}
