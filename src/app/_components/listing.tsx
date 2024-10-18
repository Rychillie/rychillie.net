'use client';

import type { Posts } from '@/lib/content/get-blog-posts';
import { useMediaQuery } from '@/lib/hooks';
import c from 'clsx';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

export default function Listing({ items }: { items: Posts[] }) {
  const { isMobile } = useMediaQuery();

  return isMobile ? (
    <ol className="group/list">
      {items
        .sort((a, b) =>
          compareDesc(parseISO(a.metadata.publishedAt), parseISO(b.metadata.publishedAt))
        )
        .map(({ metadata, slug }, index) => {
          const publishedDate = parseISO(metadata.publishedAt);
          return (
            <li key={metadata.title}>
              <Link
                href={`/blog/${slug}`}
                className="flex justify-between gap-3 py-1 group-hover/list:text-neutral-600 dark:group-hover/list:text-neutral-400 transition-all group-hover/list:hover:text-neutral-950 group-hover/list:dark:hover:text-neutral-50 font-medium"
              >
                {metadata.title}
                <time
                  dateTime={metadata.publishedAt}
                  className="text-sm  text-neutral-600 dark:text-neutral-400"
                >
                  {format(publishedDate, 'dd/MM/yy')}
                </time>
              </Link>
              {index !== items.length - 1 && (
                <hr className="border-neutral-200 dark:border-neutral-800 my-2" />
              )}
            </li>
          );
        })}
    </ol>
  ) : (
    Object.entries(
      items.reduce((acc: { [year: number]: any[] }, writing) => {
        const year = new Date(writing.metadata.publishedAt).getFullYear();
        if (!acc[year]) {
          acc[year] = [];
        }
        acc[year].push(writing);
        return acc;
      }, {})
    )
      .sort((a, b) => Number(b[0]) - Number(a[0]))
      .map(([year, writings]) => (
        <div
          key={year}
          className="flex flex-col justify-start sm:flex-row w-full sm:justify-between border-t border-neutral-200 dark:border-neutral-800 sm:gap-20 group/list text-neutral-600 dark:text-neutral-400 transition-all"
        >
          <h2 className="h-12 w-fit flex items-center justify-center text-sm">{year}</h2>
          <div className="lg:max-w-lg w-full flex flex-col gap-1 last:pb-1">
            {writings
              .sort(
                (a, b) =>
                  new Date(b.metadata.publishedAt).getTime() -
                  new Date(a.metadata.publishedAt).getTime()
              )
              .map((writing) => (
                <Link
                  key={writing.slug}
                  href={`/blog/${writing.slug}`}
                  className={c(
                    'flex flex-row items-center justify-between py-3 border-t border-neutral-200 dark:border-neutral-800 sm:first:border-t-0 group-last/list:border-b group/item transition-all gap-2'
                  )}
                >
                  <span className="text-neutral-950 dark:text-neutral-50 group-hover/container:text-neutral-600 dark:group-hover/container:text-neutral-400 group-hover/container:group-hover/item:text-neutral-950 dark:group-hover/container:group-hover/item:text-neutral-50 transition-all w-full line-clamp-1 font-medium">
                    {writing.metadata.title}
                  </span>
                  <time dateTime={writing.metadata.publishedAt} className="text-sm">
                    {new Date(writing.metadata.publishedAt).toLocaleDateString('pt-BR', {
                      month: '2-digit',
                      day: '2-digit'
                    })}
                  </time>
                </Link>
              ))}
          </div>
        </div>
      ))
  );
}
