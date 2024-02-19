'use client';

import { type Item } from './navigation-item';

export default function findNextItem(currentItem: Item, allItems: Item[]) {
  const currentItemDate = new Date(currentItem.metadata.publishedAt);

  const nextItems = allItems
    .filter(({ metadata }) => new Date(metadata.publishedAt) > currentItemDate)
    .sort(
      (a, b) =>
        new Date(a.metadata.publishedAt).getTime() - new Date(b.metadata.publishedAt).getTime()
    );

  return nextItems[0];
}
