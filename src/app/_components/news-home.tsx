import { CustomLink, News } from '@/app/_components';
import { formatCount } from '@/lib';
import { Suspense } from 'react';

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

export default function NewsHome() {
  const formattedSubscribers = formatCount(numberSubscribers);

  return (
    <div className="flex-col justify-start items-start gap-4 flex">
      <div className="text-center lg:text-left flex-col justify-start items-start gap-1 flex">
        <h2 className="text-neutral-950 font-medium dark:text-neutral-50 w-full">
          I'm sharing content with over {formattedSubscribers} others.
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
        <Suspense fallback={<News.Loading />}>
          <News.Letter />
        </Suspense>
      </div>
    </div>
  );
}
