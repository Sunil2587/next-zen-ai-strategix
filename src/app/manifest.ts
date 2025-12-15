import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NextZen AI Strategix',
    short_name: 'NextZen',
    description: 'Leading IT consulting firm specializing in AI strategy, cloud solutions, digital transformation, and enterprise software development.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
