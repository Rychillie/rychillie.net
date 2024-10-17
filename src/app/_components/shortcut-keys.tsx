'use client';

interface ShortcutKeysProps {
  keyShortcuts: string[];
}

export default function ShortcutKeys({ keyShortcuts }: ShortcutKeysProps) {
  return (
    <div
      className="flex gap-1 text-neutral-600 dark:text-neutral-400"
      aria-keyshortcuts={keyShortcuts.join('+')}
    >
      {keyShortcuts.map((keyShortcut, index) => (
        <p
          key={index}
          className="rounded-sm border px-1 font-medium dark:border-neutral-800 dark:bg-neutral-800 text-xs text-neutral-600 dark:text-neutral-400"
        >
          {keyShortcut}
        </p>
      ))}
    </div>
  );
}
