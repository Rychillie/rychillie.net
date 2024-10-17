'use client';

import { formatCount } from '@/lib';
import Image from 'next/image';

type Props = {
  quantity?: number;
  subscribers?: { name: string; image: string }[];
};

export default function Members({ quantity, subscribers }: Props) {
  return (
    <div className="w-full justify-center lg:justify-start items-center gap-3 inline-flex">
      <div className="flex">
        {subscribers
          ? subscribers.map((item, index) => (
              <Image
                width={22}
                height={22}
                key={index}
                loading="lazy"
                alt={item.name}
                src={item.image}
                className="size-[22px] -ml-2 first:m-0 rounded-full border-2 border-neutral-50 dark:border-neutral-950 hover:z-10 hover:scale-125 transition-all cursor-pointer"
              />
            ))
          : [1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="size-[22px] -ml-2 first:m-0 animate-pulse rounded-full border-2 border-neutral-50 bg-neutral-400 dark:border-neutral-950 dark:bg-neutral-600"
              />
            ))}
      </div>

      <span className="text-neutral-600 dark:text-neutral-400 text-xs font-medium">
        {quantity ? (
          formatCount(quantity)
        ) : (
          <span className="-mb-1 inline-flex h-4 w-4 animate-pulse rounded-full bg-neutral-400 pt-0.5 dark:bg-neutral-600" />
        )}
        + people subscribed
      </span>
    </div>
  );
}
