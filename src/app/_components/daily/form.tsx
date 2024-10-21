import { BackTo, NewsHome } from '@/app/_components';
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
    <div className="relative lg:z-[99999] pt-12 lg:pt-0 lg:max-w-[400px] w-full lg:fixed lg:inset-y-32 lg:right-[calc(50vw+96px)] before:pointer-events-none flex flex-col lg:justify-between before:absolute before:w-[calc(100%+32px)] before:h-[calc(100%+32px)] lg:before:fixed lg:before:inset-y-0 before:-inset-x-4 before:-bottom-8 lg:before:left-0 lg:before:w-[calc(50vw)] lg:before:h-screen before:-z-10 before:bg-white dark:before:bg-black">
      <div className="lg:-mt-10 lg:-ml-1">
        <BackTo href="/" name="Index" fixed />
        <h1 className="text-2xl text-center lg:text-left font-bold pt-2 lg:ml-1">
          Rychillie's Diary
        </h1>
      </div>

      <div className='max-w-md mx-auto mt-6 mb-4 lg:mt-auto lg:mb-12'>
      <NewsHome />
      </div>

      <DailyFooter showDesktop />
    </div>
  );
}
