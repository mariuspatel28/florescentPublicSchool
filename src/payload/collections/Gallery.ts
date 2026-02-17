import { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      // required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'select',
      // required: true,
      options: [
        { label: 'Sports', value: 'sports' },
        { label: 'Arts', value: 'arts' },
        { label: 'Academic', value: 'academic' },
        { label: 'Campus', value: 'campus' },
        { label: 'Events', value: 'events' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      // required: true,
    },
    {
      name: 'date',
      type: 'date',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Show on Home Page',
      defaultValue: false,
    },
  ],
}