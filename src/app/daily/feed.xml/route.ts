import { getDailyPosts } from '@/lib/content';
import RSS from 'rss';

let allDailyPosts = getDailyPosts('en');

const baseUrl = process.env.URL || 'https://rychillie.net';

const feed = new RSS({
  title: 'Rychillie',
  description:
    'A Software Engineer based in the Brazil. Design and tech lover, creating content and sharing knowledge over the internet',
  site_url: baseUrl,
  feed_url: `${baseUrl}/daily/feed.xml`,
  copyright: `${new Date().getFullYear()} Rychillie`,
  language: 'en',
  pubDate: new Date()
});

allDailyPosts.map((post) => {
  feed.item({
    title: post.metadata.title,
    guid: `${baseUrl}/daily#${post.slug}`,
    url: `${baseUrl}/daily#${post.slug}`,
    date: post.metadata.publishedAt,
    description: post.metadata.summary
  });
});

export async function GET() {
  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8'
    }
  });
}
