'use client';

import { CustomLink, Icon } from '@/app/_components';
import Image from 'next/image';

type DescriptionItem =
  | { type: 'text'; text: string }
  | { type: 'space' }
  | { type: 'link'; content: { text: string; url: string } }
  | { type: 'comma' };

const description: DescriptionItem[] = [
  { type: 'text', text: 'Subscribe below, and join me on' },
  { type: 'space' },
  { content: { text: 'Youtube', url: 'https://www.youtube.com/rychillie' }, type: 'link' },
  { type: 'comma' },
  { content: { text: 'LinkedIn', url: 'https://www.linkedin.com/in/rychillie/' }, type: 'link' },
  { type: 'comma' },
  { content: { text: 'Github', url: 'https://github.com/rychillie/' }, type: 'link' },
  { type: 'comma' },
  { content: { text: 'Threads', url: 'https://www.threads.net/@rychillie' }, type: 'link' },
  { type: 'comma' },
  { content: { text: 'Instagram', url: 'https://www.instagram.com/rychillie' }, type: 'link' },
  { type: 'space' },
  { type: 'text', text: 'to follow along!' }
];

export default function NewsHome() {
  return (
    <div className="flex-col justify-start items-start gap-4 flex">
      <div className="text-center lg:text-left flex-col justify-start items-start gap-1 flex">
        <h2 className="text-neutral-950 font-medium dark:text-neutral-50 w-full">
          I'm sharing content with over 20k others.
        </h2>

        <p className="text-sm leading-tight text-neutral-600 dark:text-neutral-400">
          {description.map((item, index) => {
            switch (item.type) {
              case 'text':
                return <span key={index}>{item.text}</span>;
              case 'link':
                return (
                  <CustomLink
                    key={index}
                    href={item.content.url}
                    hideUnderline
                    className="text-blue-600 dark:text-blue-400"
                  >
                    {item.content.text}
                  </CustomLink>
                );
              case 'comma':
                return <span key={index}>, </span>;
              case 'space':
                return <span key={index}>&nbsp;</span>;
              default:
                return null;
            }
          })}
        </p>
      </div>

      <div className="w-full flex-col justify-center items-center gap-1 flex">
        <div className="w-full justify-start items-start gap-3 flex">
          <input
            className="w-full grow shrink basis-0 h-10 px-4 py-2 bg-white rounded-3xl border border-neutral-200 justify-start items-center gap-2.5 flex placeholder:text-neutral-600 dark:bg-neutral-900/40 dark:border-neutral-800 dark:placeholder:text-neutral-400"
            placeholder="Enter your email"
          />

          <button
            aria-label="subscribe"
            className="size-10 bg-neutral-200 rounded-3xl border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-800 justify-center items-center gap-2.5 flex"
          >
            <Icon
              name="arrow-right"
              className="size-6 relative text-neutral-600 dark:text-neutral-400"
            />
          </button>
        </div>

        <div className="w-full justify-center lg:justify-start items-center gap-3 inline-flex">
          <div className="flex">
            {[...Array(3)].map((_, index) => (
              <Image
                width={22}
                height={22}
                key={index}
                loading="lazy"
                alt="placeholder image"
                src="https://via.placeholder.com/22x22"
                className="size-[22px] -ml-2 first:m-0 rounded-full border-2 border-neutral-50 dark:border-neutral-950 hover:z-10 hover:scale-125 transition-all cursor-pointer"
              />
            ))}
          </div>

          <span className="text-neutral-600 dark:text-neutral-400 text-xs font-medium">
            20k+ people subscribed
          </span>
        </div>
      </div>
    </div>
  );
}
