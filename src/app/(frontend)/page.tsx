import { getPayloadClient } from '@/app/(frontend)/lib/payload-clinet'
import { HeroSlider } from '@/app/(frontend)/components/home/hero-slider'
import { ContentSectionClient } from '@/app/(frontend)/components/home/content-section-client'
import { TestimonialsSlider } from '@/app/(frontend)/components/home/testimonials-slider'
import { MapsSection } from '@/app/(frontend)/components/home/maps-section'
import { ResultsSection } from '@/app/(frontend)/components/home/result-section'

export const revalidate = 60

export default async function Page() {
  const payload = await getPayloadClient()

  // 1. Fetch Home Global Data
  // Depth 2 is critical here to populate:
  // - heroSlides image
  // - scrollCards image
  // - resultsHighlight image
  const homeData = await payload.findGlobal({
    slug: 'home-page',
    depth: 2, 
  })

  // 2. Fetch other necessary data
  const contactData = await payload.findGlobal({ slug: 'contact-page' })
  const testimonials = await payload.find({ 
    collection: 'testimonials', 
    limit: 10 
  })

  /**
   * RESULTS DATA:
   * This now contains the structure:
   * [
   * { 
   * title: "Std 10th", 
   * image: {...}, 
   * yearlyData: [{ academicYear: '2025', schoolResult: '96%', boardResult: '83%' }] 
   * }
   * ]
   */
  const resultsData = homeData.resultsHighlight || []

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider slides={homeData.heroSlides || []} />

      {/* Featured Content / Scroll Cards */}
      <ContentSectionClient cards={homeData.scrollCards || []} />

      {/* ACADEMIC RESULTS SECTION 
          This component now receives the updated structure including 'yearlyData'
      */}
      {resultsData.length > 0 && (
        <ResultsSection results={resultsData} />
      )}

      {/* Testimonials */}
      <TestimonialsSlider testimonials={testimonials.docs || []} />

      {/* Map and Contact Details */}
      <MapsSection contactInfo={contactData} />
    </main>
  )
}