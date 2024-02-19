'use client';

import findNextItem from './find-next-item';
import findPreviousItem from './find-previous-item';
import NavigationItem, { type Item } from './navigation-item';

type NavigationProps = {
  currentItem: Item;
  allItems: Item[];
  route: string;
};

export default function Navigation({ currentItem, allItems, route }: NavigationProps) {
  const nextItem = findNextItem(currentItem, allItems);
  const previousItem = findPreviousItem(currentItem, allItems);

  return (
    <nav className="flex justify-between text-sm">
      {previousItem && <NavigationItem item={previousItem} route={route} direction="previous" />}
      <div className="flex grow" /> {/* fill remaining space */}
      {nextItem && <NavigationItem item={nextItem} route={route} direction="next" />}
    </nav>
  );
}