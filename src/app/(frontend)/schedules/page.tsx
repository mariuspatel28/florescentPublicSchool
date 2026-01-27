import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import AcademicsView from './AcademicsView'
import AcademicsSkeleton from './AcademicsSkeleton'

export const revalidate = 60

export default async function AcademicsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<AcademicsSkeleton />}>
        <AcademicsDataFetcher />
      </Suspense>
    </main>
  )
}

async function AcademicsDataFetcher() {
  const payload = await getPayload({ config })
  
  const data = await payload.findGlobal({
    slug: 'academics-page',
  })

  return <AcademicsView data={data} />
}