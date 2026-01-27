import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import AdmissionMainUI from './AdmissionMainUI'
import AdmissionSkeleton from './AdmissionSkeleton'
import WhyChooseUsView from './WhyChooseUs'

export const revalidate = 60

export default async function AdmissionPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Suspense handles the loading state immediately upon navigation */}
      <Suspense fallback={<AdmissionSkeleton />}>
        <AdmissionDataFetcher />
      </Suspense>
    </main>
  )
}

async function AdmissionDataFetcher() {
  const payload = await getPayload({ config })
  
  const data = await payload.findGlobal({
    slug: 'admission-page',
  })

  return (
    <>
      <AdmissionMainUI data={data} />
      <WhyChooseUsView data={data} />
    </>
  )
}