import { BackTo, CopyButton, Footer } from '@/app/_components';
import MDX from '@/app/_components/MDXComponents';
import { getBlogPosts } from '@/lib/content';
import type { MetadataWriting } from '@/lib/content/parse-frontmatter';
import '@/styles/prose.css';
import { format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export type Params = {
  params: { slug: string };
};

export type Post = {
  metadata: MetadataWriting;
  slug: string;
  content: string;
};

export async function generateMetadata({
  params: { slug }
}: Params): Promise<Metadata | undefined> {
  let allWritings = getBlogPosts('en') as Post[];
  let post = allWritings.find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description
  } = post.metadata as MetadataWriting;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://rychillie.net/blog/${post.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
}

export default function Page({ params: { slug } }: Params) {
  let allWritings = getBlogPosts('en') as Post[];
  let post = allWritings.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-16 lg:py-32 px-4 lg:px-0 mx-auto w-full max-w-4xl relative flex flex-col lg:grid lg:grid-cols-[1fr_minmax(640px,_1fr)_1fr] h-full gap-8 lg:gap-0">
      <aside className="relative">
        <div className="sticky top-32">
          <BackTo href="/blog" name="Writing" />
        </div>
      </aside>

      <div className="flex flex-col h-full justify-between gap-12">
        <main className="flex flex-col gap-4">
          <header>
            <h1 className="text-neutral-950 dark:text-neutral-50 text-lg font-bold">
              {post.metadata.title}
            </h1>
            <div className="mb-3 flex justify-between text-sm">
              <time
                dateTime={post.metadata.publishedAt}
                className="text-neutral-600 dark:text-neutral-400"
              >
                {format(parseISO(post.metadata.publishedAt), 'MMMM dd, yyyy')}
              </time>

              <CopyButton />
            </div>
          </header>

          <hr className="border-neutral-200 dark:border-neutral-800 mb-1 mt-3" />

          <MDX source={post.content} />

          <hr className="border-neutral-200 dark:border-neutral-800 mt-6 mb-4" />
        </main>

        <Footer />
      </div>
    </div>
  );
}
