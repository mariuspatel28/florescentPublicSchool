import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import Media from './collections/Media'
import { Testimonials } from './collections/Testimonials'
import { Home } from './globals/Home'
import { AboutPage } from './globals/AboutPage'
import { ContactPage } from './globals/Contacts'
import { AchievementsPage } from './globals/Achievements'
import { AcademicsPage } from './globals/AcademicsPage'
import { Gallery } from './collections/Gallery'
import { AdmissionPage } from './globals/AdmissionPage'
import { Jobs } from './collections/Jobs'
import { CareerPage } from './globals/CareerPage'
import { ScholarshipPage } from './globals/ScholarshipPage'
import { Scholarships } from './collections/Scholarships'
import { Inquiries } from './collections/Inquiries'
import { Result } from 'postcss'
import { Results } from './collections/Results'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
export default buildConfig({
  admin: {
    user: 'users',
  },

  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    Media,
    Testimonials,
    Gallery,
    Jobs,
    Scholarships,
    Inquiries,
    Results,
  ],

  globals: [
    Home,
    AboutPage,
    ContactPage,
    AchievementsPage,
    AcademicsPage,
    AdmissionPage,
    CareerPage,
    ScholarshipPage,
  ],

  editor: lexicalEditor({}),

  secret: process.env.PAYLOAD_SECRET!,

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL!,
    },
  }),

  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.SUPABASE_BUCKET!,
      config: {
        credentials: {
          accessKeyId: process.env.SUPABASE_S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.SUPABASE_S3_SECRET_ACCESS_KEY!,
        },
        region: process.env.SUPABASE_REGION || 'ap-south-1',
        endpoint: process.env.SUPABASE_S3_ENDPOINT!,
        forcePathStyle: true,
      },
    }),
  ],

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  sharp,
})
