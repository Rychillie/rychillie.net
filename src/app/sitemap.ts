import { getBlogPosts, getDailyPosts } from '@/lib/content';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.URL || 'https://rychillie.net';
  const lastModified = new Date();

  let allBlogPosts = getBlogPosts('en');
  let allDailyPosts = getDailyPosts('en');

  const articles = allBlogPosts.map((posts) => {
    return {
      url: `${baseUrl}/blog/${posts.slug}`,
      lastModified: posts.metadata.publishedAt
    };
  });

  const dailyPosts = allDailyPosts.map((posts) => {
    return {
      url: `${baseUrl}/daily#${posts.slug}`,
      lastModified: posts.metadata.publishedAt
    };
  });

  const links = [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/about`, lastModified },
    { url: `${baseUrl}/blog`, lastModified },
    ...articles,
    { url: `${baseUrl}/daily`, lastModified },
    ...dailyPosts
  ];
  return links;
}
