import type { ReactNode } from 'react';

interface ShadowProps {
  children: ReactNode;
}

export default function Shadow({ children }: ShadowProps) {
  const zIndex = 9999;
  const position = 'fixed';
  const height = 64;
  const insetx = {
    left: 0,
    right: 0
  };

  return (
    <>
      <div
        className="bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-50/0 dark:to-neutral-950/0"
        style={{
          top: 0,
          height,
          position,
          zIndex,
          ...insetx
        }}
      />

      {children}

      <div
        className="bg-gradient-to-t from-neutral-50 dark:from-neutral-950 to-neutral-50/0 dark:to-neutral-950/0"
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
