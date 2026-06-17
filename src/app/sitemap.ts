import { MetadataRoute } from 'next';
import { getAllBlogPosts } from '../data/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getAllBlogPosts().map((post) => ({
    url: `https://intellix.ai/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const caseStudies = ['stripe', 'hulu', 'vercel', 'beacon', 'supabase', 'openai'].map((slug) => ({
    url: `https://intellix.ai/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const routes = [
    '',
    '/case-studies',
    '/comparison/truffle-vs-willo',
    '/contact',
    '/blog',
    '/login',
    '/interview-builder',
    '/interview-simulator',
    '/practice-interview'
  ].map((route) => ({
    url: `https://intellix.ai${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes, ...blogs, ...caseStudies];
}

