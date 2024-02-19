'use client';

import { Icon, Text } from '@/components/elements';
import { ShortcutKeys, Tooltip } from '@/components/layout';
import { isMacOS } from '@/lib';
import { useClipboard, useShortcut } from '@/lib/hooks';
import { type ModifierKey } from 'react';

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
        className="px-1 text-secondary dark:text-secondary-dark"
        aria-label="Copy Link"
      >
        {isError ? (
          error.message
        ) : isCopied ? (
          <>
            <div role="log" aria-live="polite" className="sr-only">
              Copied to clipboard
            </div>
            <Text colour="secondary" size="small">
              Copied to clipboard
            </Text>
          </>
        ) : (
          <Icon
            name="link"
            className="text-secondary transition-colors hover:text-primary dark:text-secondary-dark dark:hover:text-primary-dark"
            width={18}
            height={18}
            aria-hidden="true"
          />
        )}
      </button>
    </Tooltip>
  );
}