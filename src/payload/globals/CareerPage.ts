import { GlobalConfig } from 'payload'

export const CareerPage: GlobalConfig = {
  slug: 'career-page',
  admin: { group: 'Pages' },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Join Our Team' },
        { name: 'description', type: 'textarea' },
      ]
    },
    {
      name: 'benefits',
      type: 'array',
      fields: [
        { name: 'iconName', type: 'text', label: 'Lucide Icon' },
        { name: 'title', type: 'text' },
        { name: 'description', type: 'text' },
      ]
    }
  ]
}