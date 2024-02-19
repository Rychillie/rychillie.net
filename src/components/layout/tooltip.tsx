'use client';

import { Arrow, Content, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  className?: string;
}

export default function Tooltip({ children, content, className }: TooltipProps) {
  return (
    <Provider>
      <Root delayDuration={350}>
        <Trigger asChild className={className}>
          {children}
        </Trigger>
        <Content
          className="tooltip-content rounded-lg border p-[6px] text-xs shadow-md duration-200 dark:border-neutral-800 dark:shadow-neutral-950"
          sideOffset={5}
        >
          {content}
          <Arrow width={0} />
        </Content>
      </Root>
    </Provider>
  );
}