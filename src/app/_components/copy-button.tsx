'use client';

import { ShortcutKeys, Tooltip } from '@/app/_components';
import { isMacOS } from '@/lib';
import { useClipboard, useShortcut } from '@/lib/hooks';
import { type ModifierKey } from 'react';
import Icon from './icon';

export default function CopyButton() {
  const { isCopied, isError, error, copyUrl } = useClipboard();

  const modifierkey: ModifierKey[] = isMacOS ? ['Control', 'Meta'] : ['Control', 'Alt'];
  useShortcut(modifierkey, 'c', copyUrl);

  return (
    <Tooltip
      content={
        <div className="flex items-center gap-2">
          Copy Link
          <ShortcutKeys keyShortcuts={isMacOS ? ['⌃', '⌘', 'C'] : ['Ctrl', 'Alt', 'C']} />
        </div>
      }
    >
      <button
        onClick={copyUrl}
        className="px-1 text-neutral-600 dark:text-neutral-400"
        aria-label="Copy Link"
      >
        {isError ? (
          error.message
        ) : isCopied ? (
          <>
            <div role="log" aria-live="polite" className="sr-only">
              Copied to clipboard
            </div>
            <p>Copied to clipboard</p>
          </>
        ) : (
          <Icon
            name="link"
            className="text-neutral-600 dark:text-neutral-400 transition-colors hover:text-neutral-950 dark:hover:text-neutral-50"
            width={18}
            height={18}
            aria-hidden="true"
          />
        )}
      </button>
    </Tooltip>
  );
}
