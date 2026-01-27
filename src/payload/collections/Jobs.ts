import { CollectionConfig } from 'payload'

export const Jobs: CollectionConfig = {
  slug: 'jobs',
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
      label: 'Position Title',
    },
    {
      name: 'department',
      type: 'select',
      // required: true,
      options: [
        { label: 'Academic (Teaching)', value: 'academic' },
        { label: 'Administration', value: 'admin' },
        { label: 'Support Staff', value: 'support' },
        { label: 'Sports & Arts', value: 'specialized' },
      ],
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Main Campus',
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'full-time',
      options: [
        { label: 'Full Time', value: 'full-time' },
        { label: 'Part Time', value: 'part-time' },
        { label: 'Contract', value: 'contract' },
      ],
    },
    {
      name: 'requirements',
      type: 'array',
      fields: [{ name: 'point', type: 'text' }],
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Position Open',
      defaultValue: true,
    },
  ],
}