'use client';

import { useMediaQuery } from '@/lib/hooks';
import * as Dialog from '@radix-ui/react-dialog';
import c from 'clsx';
import { Dispatch, SetStateAction } from 'react';
import { Drawer } from 'vaul';

export default function Modal({
  children,
  className,
  showModal,
  setShowModal
}: {
  children: React.ReactNode;
  className?: string;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root open={showModal} onOpenChange={setShowModal}>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-neutral-100/10 backdrop-blur dark:bg-neutral-900/10" />
        <Drawer.Portal>
          <Drawer.Content
            aria-describedby={undefined}
            className={c(
              'fixed bottom-0 left-0 right-0 z-50 mt-24 rounded-t-[10px] border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black',
              className
            )}
          >
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-neutral-300 dark:bg-neutral-700" />
            </div>
            {children}
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return (
    <Dialog.Root open={showModal} onOpenChange={setShowModal}>
      <Dialog.Portal>
        <Dialog.Overlay
          // for detecting when there's an active opened modal
          id="modal-backdrop"
          className="fixed inset-0 z-40 animate-fade-up bg-neutral-100/50 backdrop-blur-md dark:bg-neutral-900/50"
        />
        <Dialog.Content
          aria-describedby={undefined}
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className={c(
            'animate-scale-in fixed inset-0 z-40 m-auto max-h-fit w-full max-w-md overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white p-0 shadow-xl md:rounded-2xl dark:bg-black',
            className
          )}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
