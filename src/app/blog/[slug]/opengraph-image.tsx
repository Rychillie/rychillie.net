import { getBlogPosts } from '@/lib/content';
import { ImageResponse } from 'next/og';
import type { Params, Post } from './page';

export const alt = 'A blog post cover image';
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default async function Image({ params: { slug } }: Params) {
  let allWritings = getBlogPosts('en') as Post[];
  let post = allWritings.find((post) => post.slug === slug);

  if (!post) {
    return new Response(`Post not found`, {
      status: 404
    });
  }

  return new ImageResponse(
    post.metadata.title === null ? (
      <div
        style={{
          ...size,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundImage: `url(${process.env.URL}/assets/og-default.png)`,
          backgroundSize: '1200px 630px'
        }}
      />
    ) : (
      <div
        style={{
          ...size,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          paddingTop: 120,
          backgroundImage: `url(${process.env.URL}/assets/og-bg.png)`,
          backgroundSize: '1200px 630px'
        }}
      >
        <div
          style={{
            marginLeft: 120,
            marginRight: 96,
            display: 'flex',
            fontSize: 64,
            letterSpacing: '-0.05em',
            fontWeight: 700,
            fontStyle: 'normal',
            color: 'white',
            lineHeight: '72px',
            whiteSpace: 'pre-wrap'
          }}
        >
          {post.metadata.title}
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
