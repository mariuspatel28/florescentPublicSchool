
import { getPayloadClient } from '@/app/(frontend)/lib/payload-clinet'
import { ContentSectionClient } from './content-section-client'
import { HomePage } from '@/payload/payload-types'

// This is a Server Component that fetches data
export async function ContentSectionData() {
  try {
    const payload = await getPayloadClient()

    // Fetch the home page global data
    const homeData = await payload.findGlobal({
      slug: 'home-page',
      depth: 2 // Important for nested relationships
    }) as HomePage

    // Extract scroll cards from home data
    // Adjust this based on your actual data structure
    const scrollCards = homeData.scrollCards || []

    // Alternative: If scrollCards is a separate collection
    // const scrollCardsResult = await payload.find({
    //   collection: 'home_page_scroll_cards',
    //   sort: '_order',
    //   depth: 2
    // })
    // const scrollCards = scrollCardsResult.docs

    // Log for debugging
    console.log('Fetched scroll cards:', {
      count: scrollCards.length,
      data: scrollCards
    })

    if (!scrollCards || scrollCards.length === 0) {
      console.warn('No scroll cards found in database')
      return (
        <div className="py-24 text-center">
          <h2 className="text-2xl font-semibold text-gray-600">
            Content section data not available
          </h2>
          <p className="text-gray-500 mt-2">
            Check your database for home_page_scroll_cards collection
          </p>
        </div>
      )
    }

    return <ContentSectionClient cards={scrollCards} />

  } catch (error) {
    console.error('Error fetching content section data:', error)

    return (
      <div className="py-24 bg-red-50 text-center">
        <h2 className="text-2xl font-semibold text-red-600">
          Error loading content
        </h2>
        <p className="text-red-500 mt-2">
          Failed to fetch data from database
        </p>
        <pre className="mt-4 text-sm text-red-400 max-w-lg mx-auto bg-red-100 p-4 rounded">
          {error instanceof Error ? error.message : 'Unknown error'}
        </pre>
      </div>
    )
  }
}

// Utility function to fetch data directly (can be used elsewhere)
export async function fetchScrollCardsData() {
  try {
    const payload = await getPayloadClient()

    // Option 1: Fetch from global
    const homeData = await payload.findGlobal({
      slug: 'home-page',
      depth: 2
    }) as HomePage

    return homeData.scrollCards || []

    // Option 2: If you have a separate collection
    /*
    const result = await payload.find({
      collection: 'home_page_scroll_cards',
      sort: '_order',
      depth: 2,
      where: {
        _parent_id: {
          equals: null
        }
      }
    })
    return result.docs
    */
  } catch (error) {
    console.error('Error in fetchScrollCardsData:', error)
    return []
  }
}

// Type for the fetched data
export interface ScrollCardData {
  id?: string
  title: string
  description: string
  buttonText?: string
  image?: any
  _order?: number
  _parent_id?: string | null
}

// Database query helper (if you need direct SQL)
export async function queryScrollCardsFromDB() {
  // If you want to use direct SQL instead of Payload
  /*
  import { sql } from '@vercel/postgres'
  
  try {
    const { rows } = await sql`
      SELECT 
        id,
        title,
        description,
        button_text as "buttonText",
        image_id,
        _order,
        _parent_id
      FROM home_page_scroll_cards
      WHERE _parent_id IS NULL
      ORDER BY _order ASC
    `
    
    // You'll need to join with media table for images
    const cardsWithImages = await Promise.all(
      rows.map(async (row) => {
        if (row.image_id) {
          const { rows: mediaRows } = await sql`
            SELECT url, alt FROM media WHERE id = ${row.image_id}
          `
          return {
            ...row,
            image: mediaRows[0] || null
          }
        }
        return row
      })
    )
    
    return cardsWithImages
  } catch (error) {
    console.error('SQL Error:', error)
    return []
  }
  */
}