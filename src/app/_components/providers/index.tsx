import type { ReactNode } from 'react';
import Shadow from './shadow';
import Theme from './theme';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <Theme>
      <Shadow>{children}</Shadow>
    </Theme>
  );
}
