import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import type {
  AboutPage,
  ContactPage,
  Testimonial,
  Media,
  Gallery,
} from '@/payload/payload-types'

/* -------------------------------------------------------------------------- */
/*                         PAYLOAD CLIENT (HMR SAFE)                           */
/* -------------------------------------------------------------------------- */

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  }
}

export async function getPayloadClient() {
  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    cached.promise = getPayload({ config })
  }

  try {
    cached.client = await cached.promise
  } catch (error) {
    cached.promise = null
    throw error
  }

  return cached.client
}

/* -------------------------------------------------------------------------- */
/*                               API HELPERS                                  */
/* -------------------------------------------------------------------------- */

export const api = {
  /* ------------------------------ GLOBALS ------------------------------ */

  async getAboutPage(): Promise<AboutPage> {
    const payload = await getPayloadClient()
    return payload.findGlobal({
      slug: 'about-page',
    })
  },

  async getContactPage(): Promise<ContactPage> {
    const payload = await getPayloadClient()
    return payload.findGlobal({
      slug: 'contact-page',
    })
  },

  /* ----------------------------- COLLECTIONS ---------------------------- */

  async getTestimonials(limit = 10): Promise<Testimonial[]> {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'testimonials',
      limit,
      sort: '-createdAt',
    })
    return result.docs
  },

  async getGalleryItems(): Promise<Gallery[]> {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'gallery',
      sort: '-createdAt',
    })
    return result.docs
  },

  async getMediaById(id: number): Promise<Media | null> {
    const payload = await getPayloadClient()
    try {
      return await payload.findByID({
        collection: 'media',
        id,
      })
    } catch {
      return null
    }
  },
}
