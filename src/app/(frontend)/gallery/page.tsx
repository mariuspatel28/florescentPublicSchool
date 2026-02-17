import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import GalleryMainUI from './GalleryMainUI'
import GallerySkeleton from './GallerySkeleton'

export const revalidate = 60

export default async function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={<GallerySkeleton />}>
        <GalleryDataFetcher />
      </Suspense>
    </main>
  )
}

async function GalleryDataFetcher() {
  const payload = await getPayload({ config })
  
  const galleryItems = await payload.find({
    collection: 'gallery',
    sort: '-date',
    limit: 100,
  })

  return <GalleryMainUI initialImages={galleryItems.docs} />
}