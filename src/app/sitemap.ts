import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.wiserbond.com'
  const research = [
    '/research',
    '/research/what-is-judgment-memory',
    '/research/judgment-memory-framework',
    '/research/precedent-transferability',
    '/research/decision-archive-vs-judgment-memory',
    '/research/how-investment-judgments-become-outdated',
  ]
  const evidence = [
    '/evidence-room',
    '/evidence-room/hays-producer-lift-out',
    '/evidence-room/hays-earn-out-success',
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    { url: `${baseUrl}/agents`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/archive/akashic-v1`, changeFrequency: 'yearly', priority: 0.3 },
    ...research.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    })),
    ...evidence.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    })),
  ]
}
