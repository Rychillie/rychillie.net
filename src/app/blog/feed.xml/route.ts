import { getBlogPosts } from '@/lib/content';
import RSS from 'rss';

let allBlogPosts = getBlogPosts('en');

const baseUrl = process.env.URL || 'https://rychillie.net';

const feed = new RSS({
  title: 'Rychillie',
  description:
    'A Software Engineer based in the Brazil. Design and tech lover, creating content and sharing knowledge over the internet',
  site_url: baseUrl,
  feed_url: `${baseUrl}/blog/feed.xml`,
  copyright: `${new Date().getFullYear()} Rychillie`,
  language: 'en',
  pubDate: new Date()
});

allBlogPosts.map((post) => {
  feed.item({
    title: post.metadata.title,
    guid: `${baseUrl}/blog/${post.slug}`,
    url: `${baseUrl}/blog/${post.slug}`,
    date: post.metadata.publishedAt,
    description: post.content
  });
});

export async function GET() {
  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8'
    }
  });
}
