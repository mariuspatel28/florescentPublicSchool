// src/payload/collections/Testimonials.ts
import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'author',
  },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      // required: true,
    },
    {
      name: 'author',
      type: 'text',
      // required: true,
    },
    {
      name: 'role',
      type: 'text',
      admin: {
        placeholder: 'e.g. Class of 2024 / Parent',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      // required: true,
    },
  ],
}