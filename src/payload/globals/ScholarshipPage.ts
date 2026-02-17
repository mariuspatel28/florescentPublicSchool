import { GlobalConfig } from 'payload'

export const ScholarshipPage: GlobalConfig = {
  slug: 'scholarship-page',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Sanstha Dip Naresh Sir Scholarship' },
        { name: 'description', type: 'textarea' },
      ]
    },
    {
      name: 'conditions',
      type: 'array',
      label: 'Terms & Conditions',
      fields: [
        { name: 'rule', type: 'textarea' }
      ]
    }
  ],
}