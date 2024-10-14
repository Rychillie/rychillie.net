import { BackTo, Footer } from '@/app/_components';
import { getBlogPosts } from '@/lib/content';
import type { MetadataWriting } from '@/lib/content/parse-frontmatter';
import { notFound } from 'next/navigation';

interface Params {
  params: { slug: string };
}

type Posts = {
  metadata: MetadataWriting;
  slug: string;
  content: string;
};

export default function Paget({ params: { slug } }: Params) {
  let allWritings = getBlogPosts('en') as Posts[];
  let post = allWritings.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-16 lg:py-32 p-4 lg:p-0 mx-auto w-full max-w-4xl relative flex flex-col lg:grid lg:grid-cols-[1fr_minmax(640px,_1fr)_1fr] h-full gap-8 lg:gap-0">
      <aside>
        <BackTo href="/writing" name="Writing" />
      </aside>

      <div className="flex flex-col h-full justify-between gap-12">
        <main className="flex flex-col gap-10">
          <h1 className="text-neutral-950 dark:text-neutral-50 text-lg font-bold">
            {post.metadata.title}
          </h1>
        </main>

        <Footer />
      </div>
    </div>
  );
}
