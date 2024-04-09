/* eslint-disable prefer-const */
import { Heading, Text } from '@/components/elements';
import { AnimateEnter, Separator } from '@/components/layout';
import c from 'clsx';
import Image from 'next/image';

export function generateMetadata() {
  return {
    title: 'Link',
    description: 'A collection of useful links and resources.'
  };
}

export default function Writing() {
  return (
    <>
      <AnimateEnter>
        <Image
          src="/assets/rychi.png"
          alt="Just me Rychillie"
          width={96}
          height={96}
          className="mx-auto aspect-square w-16 rounded-full sm:mx-0 sm:w-24"
          loading="lazy"
        />
        <Heading className="mt-6 text-center text-2xl font-bold sm:text-left sm:text-4xl">
          Rychillie
        </Heading>
        <Text className="mx-auto mt-4 flex w-full max-w-sm text-center sm:mx-0 sm:text-left">
          Creating content and Sharing knowledge over the internet. Design and technology lover
          collaborating with Open Source projects.
        </Text>
      </AnimateEnter>
      <AnimateEnter>
        <Separator className="my-6" />
      </AnimateEnter>
      <AnimateEnter>
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {[...Array(9)].map((_, index) => {
            const isLarge = index === 2 || index === 5 || index === 8;
            return (
              <div
                key={index}
                className={c(
                  'cursor-pointer rounded-md border border-green-300 bg-green-100/60 p-2 transition-all hover:bg-green-200/60 dark:border-green-700 dark:bg-green-900/60 dark:hover:bg-green-800/60 sm:p-4',
                  isLarge ? 'col-span-2' : 'aspect-square'
                )}
              >
                <Text className="text-green-900 dark:text-green-200">Teste</Text>
              </div>
            );
          })}
        </div>
      </AnimateEnter>
    </>
  );
}
