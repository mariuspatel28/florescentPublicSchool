import { Suspense } from 'react'
import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import ResultsMainUI from './SchoolMainUI'
import ResultsSkeleton from './SchoolSkeleton'

export const revalidate = 60

export default async function ResultsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page transitions instantly, data loads in background */}
      <Suspense fallback={<ResultsSkeleton />}>
        <ResultsDataFetcher />
      </Suspense>
    </main>
  )
}
async function ResultsDataFetcher() {
  const payload = await getPayload({ config })

  // 1. Fetch the Global for the page header/description
  const pageConfig = await payload.findGlobal({
    slug: 'achievements-page',
  })

  // 2. Fetch the actual Result documents from the Collection
  const resultsDocs = await payload.find({
    collection: 'results',
    sort: '-year', // Optional: Show latest years first
    limit: 100,
  })

  // Pass both the section config and the docs to the UI
  return (
    <ResultsMainUI 
      header={pageConfig.resultsSection} 
      results={resultsDocs.docs} 
    />
  )
}