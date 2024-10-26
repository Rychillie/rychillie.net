import { getDailyPosts } from '@/lib/content';

export function GET() {
  const baseUrl = process.env.URL || 'https://rychillie.net';
  let allDailyPosts = getDailyPosts('en');

  const posts = allDailyPosts.map((post) => {
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
