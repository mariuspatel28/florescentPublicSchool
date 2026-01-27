import { getPayload } from 'payload'
import config from '@/payload/payload.config'
import ScholarshipView from './scholarshipView'

export const revalidate = 60

export default async function Page() {
  const payload = await getPayload({ config })

  const pageData = await payload.findGlobal({ slug: 'scholarship-page' })
  const { docs: scholarships } = await payload.find({
    collection: 'scholarships',
    sort: 'id',
  })

  return <ScholarshipView data={pageData} scholarships={scholarships} />
}
