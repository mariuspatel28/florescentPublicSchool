import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import ContactMainUI from './ContactMainUI'
import ContactSkeleton from './ContactSkeleton'

export const revalidate = 60

export default async function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<ContactSkeleton />}>
        <ContactDataFetcher />
      </Suspense>
    </main>
  )
}

async function ContactDataFetcher() {
  const payload = await getPayload({ config })
  
  const data = await payload.findGlobal({
    slug: 'contact-page',
  })

  return <ContactMainUI data={data} />
}