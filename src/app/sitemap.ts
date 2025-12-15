import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextzen-ai-strategix.com'
  
  // Main pages
  const routes = ['', '/careers', '/insights'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Service pages
  const services = [
    'ai-strategy-consulting',
    'cloud-transformation',
    'digital-transformation',
    'enterprise-software',
    'cybersecurity',
    'data-analytics',
    'devops-automation',
    'quant-finance-research',
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...services]
}
