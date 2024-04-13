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
        <div className="grid auto-rows-[192px] grid-cols-2 gap-4 sm:grid-cols-3">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={c(
                'rounded-xl border-2 border-slate-400/10 row-span-1 bg-neutral-100 p-4 dark:bg-neutral-900',
                i === 3 || i === 6 ? 'col-span-2' : ''
              )}
            ></div>
          ))}
        </div>
      </AnimateEnter>
    </>
  );
}
