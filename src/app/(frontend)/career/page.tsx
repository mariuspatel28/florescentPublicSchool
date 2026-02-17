import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import CareerMainUI from './CareerMainUI'
import CareerSkeleton from './CareerSkeleton'

export const revalidate = 60

export default async function CareerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<CareerSkeleton />}>
        <CareerDataFetcher />
      </Suspense>
    </main>
  )
}

async function CareerDataFetcher() {
  const payload = await getPayload({ config })
  
  // Fetching both the static page content and the dynamic job listings
  const [staticData, jobsResponse] = await Promise.all([
    payload.findGlobal({ slug: 'career-page' }),
    payload.find({
      collection: 'jobs',
      where: {
        active: { equals: true }
      },
      limit: 100,
    })
  ])

  return <CareerMainUI staticData={staticData} jobs={jobsResponse.docs} />
}