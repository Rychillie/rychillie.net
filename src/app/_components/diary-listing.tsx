import { getBlogPosts } from '@/lib/content';
import { compareDesc, format, parseISO } from 'date-fns';
import { enUS } from 'date-fns/locale';
import MDX from './MDXComponents';

export default function DiaryListing() {
  let allWritings = getBlogPosts('en');

  return allWritings
    .sort((a, b) => compareDesc(parseISO(a.metadata.publishedAt), parseISO(b.metadata.publishedAt)))
    .map((writing) => {
      const publishedDate = parseISO(writing.metadata.publishedAt);
      return (
        <div key={writing.slug} className="group relative">
          <h2 className="text-xl font-bold">{writing.metadata.title}</h2>
          <time
            dateTime={writing.metadata.publishedAt}
            className="text-xs absolute right-[calc(100%+36px)] top-2 whitespace-nowrap z-[99999] text-neutral-600 dark:text-neutral-400 text-right before:content-[''] before:-right-3 before:w-2.5 before:h-0.5 before:absolute before:top-1/2 before:translate-y-1/2 before:bg-neutral-200 dark:before:bg-neutral-800] font-medium"
          >
            {format(publishedDate, 'MMM d, yyyy', { locale: enUS })}
          </time>

          <p className="text-neutral-600 dark:text-neutral-400">{writing.metadata.summary}</p>

          <MDX source={writing.content} />
        </div>
      );
    });
}
