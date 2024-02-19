'use client';

import { CustomLink, Text } from '@/components/elements';
import { Badge, Separator } from '@/components/layout';
import { isWithin1Month } from '@/lib';
import { compareDesc, format, parseISO } from 'date-fns';

interface ListProps {
  items: {
    metadata: {
      title: string;
      summary: string;
      publishedAt: string;
    };
    slug: string;
    content: string;
  }[];
  route: string;
}

export default function List({ items, route }: ListProps) {
  const isCraftRoute = route === 'craft';

  return (
    <>
      <ol>
        {items
          .sort((a, b) =>
            compareDesc(parseISO(a.metadata.publishedAt), parseISO(b.metadata.publishedAt))
          )
          .map(({ metadata, slug }, index) => {
            const publishedDate = parseISO(metadata.publishedAt);
            const isNewItem = isWithin1Month(publishedDate);
            return (
              <li key={metadata.title}>
                <CustomLink
                  href={`/${route}/${slug}`}
                  hideUnderline
                  className="flex justify-between gap-2 p-1 hover:text-secondary dark:hover:text-secondary-dark"
                >
                  <div className="flex items-center gap-2">
                    <span>{metadata.title}</span>
                    {isCraftRoute && (
                      <Text colour="secondary" size="xsmall" className="hidden md:block">
                        {metadata.summary}
                      </Text>
                    )}
                    {isNewItem && <Badge ariaHidden>new</Badge>}
                  </div>
                  <time
                    dateTime={metadata.publishedAt}
                    className="text-sm text-secondary dark:text-secondary-dark"
                  >
                    {isCraftRoute
                      ? format(publishedDate, 'MMMM yyyy')
                      : format(publishedDate, 'dd/MM/yy')}
                  </time>
                </CustomLink>
                {index !== items.length - 1 && <Separator className="my-2" />}
              </li>
            );
          })}
      </ol>
    </>
  );
}
