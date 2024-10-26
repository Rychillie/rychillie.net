import { getBlogPosts } from '@/lib/content';

export function GET() {
  const baseUrl = process.env.URL || 'https://rychillie.net';
  let allBlogPosts = getBlogPosts('en');

  const posts = allBlogPosts.map((post) => {
    return {
      slug: `${baseUrl}/daily#${post.slug}`,
      title: post.metadata.title,
      publishedAt: post.metadata.publishedAt,
      content: post.content
    };
  });

  return new Response(JSON.stringify(posts), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });
}
