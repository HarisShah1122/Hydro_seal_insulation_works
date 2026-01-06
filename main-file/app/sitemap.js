export default function sitemap() {
  const baseUrl = 'https://hydrosealinsulation.ae';
  const now = new Date();
  
  // Define all your pages with priorities and change frequencies
  const routes = [
    { path: '', priority: 1.0, changeFreq: 'daily' },
    { path: '/about', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services', priority: 0.9, changeFreq: 'weekly' },
    { path: '/services/thermal-insulation', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services/waterproofing-solutions', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services/hvac-insulation', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services/acoustic-insulation', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services/fire-protection-insulation', priority: 0.9, changeFreq: 'monthly' },
    { path: '/services/specialized-coatings', priority: 0.9, changeFreq: 'monthly' },
    { path: '/portfolio/2-columns', priority: 0.8, changeFreq: 'weekly' },
    { path: '/clients', priority: 0.7, changeFreq: 'monthly' },
    { path: '/facilities', priority: 0.7, changeFreq: 'monthly' },
    { path: '/quality-hse', priority: 0.8, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.9, changeFreq: 'monthly' },
    { path: '/request-quote', priority: 0.9, changeFreq: 'monthly' },
    { path: '/team', priority: 0.7, changeFreq: 'monthly' },
    { path: '/testimonial', priority: 0.7, changeFreq: 'weekly' },
    { path: '/faq', priority: 0.8, changeFreq: 'monthly' },
    { path: '/blog', priority: 0.8, changeFreq: 'weekly' },
  ];

  // Generate sitemap entries
  const sitemapEntries = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));

  return sitemapEntries;
}

