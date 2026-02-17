import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import CoCurricularMainUI from './CoCurricularMainUI'
import CoCurricularSkeleton from './CoCurricularSkeleton'

export const revalidate = 60

export default async function CoCurricularPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* The Suspense boundary tells Next.js: 
        "Don't wait for the database. Swap the URL now and show the Skeleton 
        while CoCurricularDataFetcher does its work."
      */}
      <Suspense fallback={<CoCurricularSkeleton />}>
        <CoCurricularDataFetcher />
      </Suspense>
    </main>
  )
}

async function CoCurricularDataFetcher() {
  const payload = await getPayload({ config })
  
  // Fetching the Achievements Global
  const data = await payload.findGlobal({
    slug: 'achievements-page',
  })

  // We pass the coCurricular group specifically to the UI
  return <CoCurricularMainUI data={data.coCurricular} />
}