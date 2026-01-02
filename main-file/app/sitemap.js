export default function sitemap() {
  const baseUrl = 'https://hydrosealinsulation.ae';
  
  // Define all your pages
  const routes = [
    '',
    '/about',
    '/services',
    '/services/thermal-insulation',
    '/services/waterproofing-solutions',
    '/services/hvac-insulation',
    '/services/acoustic-insulation',
    '/services/fire-protection-insulation',
    '/services/specialized-coatings',
    '/portfolio/2-columns',
    '/clients',
    '/facilities',
    '/quality-hse',
    '/contact',
    '/request-quote',
    '/team',
    '/testimonial',
    '/faq',
    '/blog',
  ];

  // Generate sitemap entries
  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.9 : 0.8,
  }));

  return sitemapEntries;
}

