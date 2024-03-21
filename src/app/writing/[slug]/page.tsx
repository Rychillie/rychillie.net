/* eslint-disable prefer-const */
import { CustomLink, Heading, MDX } from '@/components/elements';
import { CopyButton, Navigation, Separator } from '@/components/layout';
import { getBlogPosts } from '@/lib/content';
import { MetadataWriting } from '@/lib/content/parse-frontmatter';
import '@/styles/prose.css';
import { format, parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getBlogPosts().map(({ slug }) => ({
    params: { slug }
  }));
}

export async function generateMetadata(params: any): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
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

export default function Post({ params }: Params) {
  let allWritings = getBlogPosts() as Posts[];
  let post = allWritings.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <header className="flex flex-col justify-between gap-6">
        <span>
          <CustomLink
            href="/writing"
            ariaLabel="Back to writing page"
            arrowIcon
            hideUnderline
            className="transition-colors hover:text-secondary dark:hover:text-secondary-dark"
          >
            Writing
          </CustomLink>
        </span>
        <Heading>{post.metadata.title}</Heading>
      </header>
      <div className="mb-3 flex justify-between text-sm">
        <time
          dateTime={post.metadata.publishedAt}
          className="text-secondary dark:text-secondary-dark"
        >
          {format(parseISO(post.metadata.publishedAt), 'MMMM dd yyyy')}
        </time>
        <CopyButton />
      </div>
      <Separator className="my-8" />
      <MDX source={post.content} />
      <Separator className="my-8" />
      <Navigation allItems={allWritings} currentItem={post} route="writing" />
    </>
  );
}
