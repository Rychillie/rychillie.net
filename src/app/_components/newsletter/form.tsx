'use client';

import { addContact } from '@/app/_actions/resend';
import { Icon } from '@/app/_components';
import { useMediaQuery } from '@/lib/hooks';
import { useRef, useState } from 'react';
import Confetti from './confetti';
import { useUpdateModal } from './update-modal';

export default function Form() {
  const [isExploding, setIsExploding] = useState(false);
  const [userId, setUserId] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleUpdateSuccess = () => {
    setIsExploding(true);
  };

  const { width } = useMediaQuery();
  const { setShowUpdateModal, UpdateModal } = useUpdateModal(userId, handleUpdateSuccess);

  async function handleSubmit(formData: FormData) {
    const email = formData.get('email') as string;
    const { data } = await addContact({ email });

    if (data) {
      setUserId(data.id);
      setShowUpdateModal(true);

      // Limpar o formulário
      if (formRef.current) {
        formRef.current.reset();
      }
    }

    setShowUpdateModal(true);

    return;
  }

  return (
    <>
      <UpdateModal />
      {isExploding && (
        <Confetti onClomplete={() => setIsExploding(false)} width={width as number} />
      )}
      <form
        ref={formRef}
        action={handleSubmit}
        className="inline-flex w-full items-start justify-start gap-3"
      >
        <label className="sr-only" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email"
          className="flex-1 rounded-full border border-neutral-200 bg-white px-4 py-2 focus-within:outline-none focus:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 focus:dark:border-neutral-700"
          disabled={isExploding}
        />
        <button
          aria-label="submit"
          className="flex size-10 items-center justify-center rounded-full bg-neutral-200 transition-all hover:opacity-60 dark:bg-neutral-800"
          disabled={isExploding}
        >
          <Icon name="arrow-right" className="size-6 text-neutral-800 dark:text-neutral-200" />
        </button>
      </form>
    </>
  );
}
