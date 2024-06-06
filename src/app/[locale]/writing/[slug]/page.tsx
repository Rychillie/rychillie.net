/* eslint-disable prefer-const */
import { CustomLink, Heading, MDX } from '@/components/elements';
import { CopyButton, Navigation, Separator } from '@/components/layout';
import { getBlogPosts } from '@/lib/content';
import { MetadataWriting } from '@/lib/content/parse-frontmatter';
import '@/styles/prose.css';
import { format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface Params {
  params: { slug: string; locale: string };
}

export async function generateStaticParams({ params: { locale } }: Params) {
  return getBlogPosts(locale).map(({ slug }) => ({
    params: { slug }
  }));
}

export async function generateMetadata({
  params: { slug, locale }
}: Params): Promise<Metadata | undefined> {
  let post = getBlogPosts(locale).find((post) => post.slug === slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image
  } = post.metadata as MetadataWriting;

  let ogImage = image ? `https://rychillie.net${image}` : `https://rychillie.net/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://rychillie.net/blog/${post.slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

type Posts = {
  metadata: MetadataWriting;
  slug: string;
  content: string;
};

export default function Post({ params: { slug, locale } }: Params) {
  let allWritings = getBlogPosts(locale) as Posts[];
  let post = allWritings.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <header className="flex flex-col justify-between gap-6">
        <span>
          <CustomLink
            href="/writing"
            locale={locale}
            ariaLabel="Back to writing page"
            arrowIcon
            hideUnderline
            className="transition-colors hover:text-secondary dark:hover:text-secondary-dark"
          >
            Writing
          </CustomLink>
        </span>
        <Suspense fallback={<h1 className="h-8 animate-pulse bg-primary dark:bg-primary-dark" />}>
          <Heading>{post.metadata.title}</Heading>
        </Suspense>
      </header>
      <div className="mb-3 flex justify-between text-sm">
        <Suspense
          fallback={
            <time className="h-4 w-20 animate-pulse rounded-full bg-secondary dark:bg-secondary-dark" />
          }
        >
          <time
            dateTime={post.metadata.publishedAt}
            className="text-secondary dark:text-secondary-dark"
          >
            {format(parseISO(post.metadata.publishedAt), 'MMMM dd, yyyy')}
          </time>
          <CopyButton />
        </Suspense>
      </div>
      <Separator className="my-8" />
      <Suspense
        fallback={
          <article className="flex h-[72vh] w-full items-center justify-center">
            <svg
              className="size-5 animate-spin text-secondary dark:text-secondary-dark"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </article>
        }
      >
        <MDX source={post.content} />
      </Suspense>
      <Separator className="my-8" />
      <Navigation locale={locale} allItems={allWritings} currentItem={post} route="writing" />
    </>
  );
}
