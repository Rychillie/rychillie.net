'use client';

import { type Item } from './navigation-item';

export default function findPreviousItem(currentItem: Item, allItems: Item[]) {
  const currentItemDate = new Date(currentItem.metadata.publishedAt);

  const previousItems = allItems
    .filter(({ metadata }) => new Date(metadata.publishedAt) < currentItemDate)
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime()
    );

  return previousItems[0];
}