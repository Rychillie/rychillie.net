'use client';

import findNextItem from './find-next-item';
import findPreviousItem from './find-previous-item';
import NavigationItem, { type Item } from './navigation-item';

type NavigationProps = {
  currentItem: Item;
  allItems: Item[];
  route: string;
  locale?: string;
};

export default function Navigation({ currentItem, allItems, route, locale }: NavigationProps) {
  const nextItem = findNextItem(currentItem, allItems);
  const previousItem = findPreviousItem(currentItem, allItems);

  return (
    <nav className="flex justify-between text-sm">
      {previousItem && (
        <NavigationItem locale={locale} item={previousItem} route={route} direction="previous" />
      )}
      <div className="flex grow" /> {/* fill remaining space */}
      {nextItem && (
        <NavigationItem locale={locale} item={nextItem} route={route} direction="next" />
      )}
    </nav>
  );
}
