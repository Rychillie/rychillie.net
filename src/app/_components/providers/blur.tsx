import { LinearBlur } from 'progressive-blur';
import type { ReactNode } from 'react';

interface BlurProps {
  children: ReactNode;
}

export default function Blur({ children }: BlurProps) {
  const zIndex = 9999;
  const position = 'fixed';
  const height = 32;
  const insetx = {
    left: 0,
    right: 0
  };

  return (
    <>
      <LinearBlur
        aria-disabled
        style={{
          top: 0,
          height,
          position,
          zIndex,
          ...insetx
        }}
      />

      {children}

      <LinearBlur
        aria-disabled
        side="bottom"
        style={{
          bottom: 0,
          height,
          position,
          zIndex,
          ...insetx
        }}
      />
    </>
  );
}
