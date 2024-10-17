import { updateContact } from '@/app/_actions/resend';
import { LoadingDots, Modal } from '@/app/_components';
import { DialogTitle } from '@radix-ui/react-dialog';
import c from 'clsx';
import Image from 'next/image';
import { Dispatch, SetStateAction, useCallback, useMemo, useRef, useState } from 'react';

const UpdateModal = ({
  showUpdateModal,
  setShowUpdateModal,
  userId,
  onUpdateSuccess
}: {
  showUpdateModal: boolean;
  setShowUpdateModal: Dispatch<SetStateAction<boolean>>;
  userId: string;
  onUpdateSuccess: () => void;
}) => {
  const [updateClicked, setUpdateClicked] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleUpdate(formData: FormData) {
    setUpdateClicked(true);

    const firstName = formData.get('first-name') as string;
    const lastName = formData.get('last-name') as string;

    if (!firstName || !lastName) return;

    const response = await updateContact({ id: userId, firstName, lastName });

    if (response) {
      setUpdateClicked(false);
      setShowUpdateModal(false);
      onUpdateSuccess(); // Call the callback function
      // Limpar o formulário
      if (formRef.current) {
        formRef.current.reset();
      }
    }

    return;
  }

  return (
    <Modal showModal={showUpdateModal} setShowModal={setShowUpdateModal}>
      <form
        ref={formRef}
        action={handleUpdate}
        className="w-full overflow-hidden shadow-xl dark:border-neutral-800 md:max-w-md md:rounded-2xl md:border md:border-neutral-200"
      >
        <div className="flex flex-col items-center justify-center space-y-5 border-b border-neutral-200 bg-white px-4 py-6 pt-8 text-center dark:border-neutral-800 dark:bg-black md:px-16">
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="mx-auto mb-4 overflow-hidden rounded-full bg-white p-4">
              <Image src="/assets/party-popper.png" width={48} height={48} alt="Party popper" />
            </div>
            <DialogTitle className="text-2xl font-bold">Finishing subscription</DialogTitle>
            <p className="text-sm text-neutral-500">
              Now that you subscribed your email, update your profile by adding your First Name and
              Last Name.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center space-y-2">
            <label className="sr-only" htmlFor="first-name">
              First Name:
            </label>
            <input
              id="first-name"
              type="first-name"
              name="first-name"
              placeholder="First Name"
              className="w-full rounded-full border border-neutral-200 bg-white px-4 py-2 focus-within:outline-none focus:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 focus:dark:border-neutral-700"
            />
            <label className="sr-only" htmlFor="last-name">
              Last Name:
            </label>
            <input
              id="last-name"
              type="last-name"
              name="last-name"
              placeholder="Last Name"
              className="w-full rounded-full border border-neutral-200 bg-white px-4 py-2 focus-within:outline-none focus:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900/40 focus:dark:border-neutral-700"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-4 bg-neutral-50 px-4 py-8 dark:bg-neutral-950 md:px-16">
          <button
            disabled={updateClicked}
            className={c(
              updateClicked
                ? 'cursor-not-allowed bg-neutral-100 dark:bg-neutral-900'
                : 'bg-white text-black hover:bg-neutral-50 dark:bg-black dark:text-white dark:hover:bg-neutral-950',
              'flex h-10 w-full items-center dark:border-neutral-800 border-neutral-200 justify-center space-x-3 rounded-full border text-sm shadow-sm transition-all duration-75 focus:outline-none'
            )}
          >
            {updateClicked ? <LoadingDots color="#737373" /> : <p>Update my profile</p>}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export function useUpdateModal(userId: string, onUpdateSuccess: () => void) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const UpdateModalCallback = useCallback(() => {
    return (
      <UpdateModal
        showUpdateModal={showUpdateModal}
        setShowUpdateModal={setShowUpdateModal}
        userId={userId}
        onUpdateSuccess={onUpdateSuccess}
      />
    );
  }, [showUpdateModal, userId, onUpdateSuccess]);

  return useMemo(
    () => ({ setShowUpdateModal, UpdateModal: UpdateModalCallback }),
    [setShowUpdateModal, UpdateModalCallback]
  );
}
