import { getBlogPosts } from '@/lib/content';

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://rychillie.io/writing/${post.slug}`,
    lastModified: post.metadata.publishedAt
  }));

  const routes = ['', '/writing', '/now', '/craft', '/about'].map((route) => ({
    url: `https://rychillie.net${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes, ...blogs];
}
