'use client';

import { useMousePosition } from '@/lib/hooks';
import c from 'clsx';
import { m } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type HaloProps = {
  children: ReactNode | ReactNode[];
  /** Width/height in px */
  size?: number;
  /** How strong the effect should be (0-100) */
  strength?: number;
  className?: string;
};

export default function Halo({ children, size = 600, strength = 10, className }: HaloProps) {
  const ref = useRef(null);
  const { x, y } = useMousePosition(ref);
  const offset = size / 2;

  return (
    <m.div
      ref={ref}
      className={c('relative size-full overflow-hidden', className)}
      whileHover="hover"
    >
      <m.div
        style={
          {
            '--x': `${x ? x - offset : -offset}px`,
            '--y': `${y ? y - offset : -offset}px`,
            width: size,
            height: size,
            background: 'radial-gradient(#FFFFFF 0%, rgba(188, 255, 219, 0) 60%)'
          } as React.CSSProperties
        }
        className={`pointer-events-none absolute inset-0 z-50 translate-x-[var(--x)] translate-y-[var(--y)] opacity-0 transition-opacity`}
        variants={{
          hover: {
            opacity: strength / 100
          }
        }}
      />
      {children}
    </m.div>
  );
}
