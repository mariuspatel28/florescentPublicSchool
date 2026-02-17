import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import AboutUI from './AboutUI'
import AboutSkeleton from './AboutSkeleton'

/**
 * Prevents Next.js from trying to fully prerender this page at build time.
 * REQUIRED when using Payload + DB.
 */
export const dynamic = 'force-dynamic'

/**
 * ISR revalidation (safe for globals)
 */
export const revalidate = 60

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 
        Suspense allows instant route navigation.
        Skeleton shows immediately while Payload fetch runs.
      */}
      <Suspense fallback={<AboutSkeleton />}>
        <AboutDataFetcher />
      </Suspense>
    </main>
  )
}

async function AboutDataFetcher() {
  const payload = await getPayload({ config })

  const data = await payload.findGlobal({
    slug: 'about-page',
  })

  /**
   * Safety guard:
   * Prevents UI crash if global was never saved in Admin
   */
  if (!data) {
    return <AboutSkeleton />
  }

  return <AboutUI data={data} />
}
