import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://spindelx.com';
  
  const routes = [
    '',
    '/about',
    '/capabilities',
    '/quality',
    '/industries',
    '/gallery',
    '/contact',
    '/rfq',
    '/services',
    '/blog',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
