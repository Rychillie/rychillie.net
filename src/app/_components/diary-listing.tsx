import { getBlogPosts } from '@/lib/content';
import MDX from './MDXComponents';

export default function DiaryListing() {
  let allWritings = getBlogPosts('en');

  return allWritings.map((writing) => (
    <div key={writing.slug} className="group">
      <h2 className="text-xl font-bold">{writing.metadata.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400">{writing.metadata.summary}</p>

      <MDX source={writing.content} />
    </div>
  ));
}
