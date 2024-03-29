'use client';

import c from 'clsx';

interface SeparatorProps {
  className?: string;
}

export default function Separator({ className }: SeparatorProps) {
  return <hr className={c('h-px border-0 bg-neutral-200 dark:bg-neutral-800', className)} />;
}
