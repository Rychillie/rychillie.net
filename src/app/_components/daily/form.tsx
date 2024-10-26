import { BackTo, CustomLink, NewsHome } from '@/app/_components';
import Image from 'next/image';
import DailyFooter from './footer';

type DescriptionItem =
  | { type: 'text'; text: string }
  | { type: 'space' }
  | { type: 'link'; content: { text: string; url: string } }
  | { type: 'comma' };

const numberSubscribers = 3200;

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

export default function DailyForm() {
  return (
    <div className="relative lg:z-[99999] pt-12 lg:pt-0 lg:max-w-[400px] w-full lg:fixed lg:inset-y-32 lg:right-[calc(50vw+96px)] before:pointer-events-none flex flex-col lg:justify-between before:absolute before:w-screen before:h-[calc(100%+32px)] lg:before:fixed lg:before:inset-y-0 before:-inset-x-4 before:-bottom-8 lg:before:left-0 lg:before:w-[calc(50vw)] lg:before:h-screen before:border-b before:border-neutral-100 dark:before:border-neutral-800 lg:before:border-r lg:before:border-b-0 before:-z-10 before:bg-white dark:before:bg-black">
      <div className="lg:-mt-12 lg:-ml-1">
        <BackTo href="/" name="Index" fixed />
        <div className="pt-4 -ml-5 lg:ml-1 flex flex-row gap-3 items-center justify-center lg:justify-start">
          <Image
            src="/assets/rychillie.png"
            alt="Rychillie"
            width={56}
            height={56}
            className="lg:flex size-14 rounded-full mix-blend-luminosity"
          />

          <div className="flex flex-col gap-1 py-0.5">
            <h1 className="text-2xl font-bold">Rychillie's Diary</h1>
            <CustomLink
              hideUnderline
              className="text-xs font-medium"
              href="/daily/feed.xml"
              target="_blank"
            >
              RSS Feed
            </CustomLink>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto mt-6 mb-4 lg:mt-auto lg:mb-12">
        <NewsHome />
      </div>

      <DailyFooter showDesktop />
    </div>
  );
}
