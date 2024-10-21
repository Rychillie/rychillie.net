import { getDailyPosts } from '@/lib/content';
import { compareDesc, format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import MDX from '../MDXComponents';

export default function DailyListing() {
  let allWritings = getDailyPosts('en');

  return allWritings.length <= 0 ? (
    <p>ops, no daily posts yet!</p>
  ) : (
    allWritings
      .sort((a, b) =>
        compareDesc(parseISO(a.metadata.publishedAt), parseISO(b.metadata.publishedAt))
      )
      .map((writing) => {
        const publishedDate = parseISO(writing.metadata.publishedAt);
        return (
          <div key={writing.slug} className="group relative">
            <div className="flex flex-col-reverse">
              <h2 className="text-xl font-bold">{writing.metadata.title}</h2>
              <time
                dateTime={writing.metadata.publishedAt}
                className="text-xs lg:absolute lg:right-[calc(100%+36px)] lg:top-2 whitespace-nowrap relative z-[99999] text-neutral-600 dark:text-neutral-400 text-left lg:text-right before:content-[''] lg:before:-right-3 before:w-2.5 before:h-0.5 lg:before:left-auto before:-left-4 before:absolute before:top-1/2 before:translate-y-1/2 before:bg-neutral-200 dark:before:bg-neutral-800 font-medium"
              >
                {format(publishedDate, 'MMM d, yyyy', { locale: enUS })}
              </time>
            </div>

            <MDX source={writing.content} />
          </div>
        );
      })
  );
}
