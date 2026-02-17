import { CollectionConfig } from 'payload'

export const Results: CollectionConfig = {
  slug: 'results',
  admin: { useAsTitle: 'year', group: 'Achievements' },
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'year', type: 'text', required: true, admin: { width: '50%' } },
        { name: 'category', type: 'select', options: ['SSC', 'HSC'], required: true, admin: { width: '50%' } },
      ],
    },
    {
      name: 'summaryStats',
      type: 'group',
      label: 'Board vs School Comparison',
      fields: [
        { name: 'schoolResult', type: 'text', label: 'School Result (%)' },
        { name: 'boardResult', type: 'text', label: 'Board Result (%)' },
      ],
    },
    {
      name: 'studentResults',
      type: 'array',
      label: 'Top Performers / Student List',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'studentName', type: 'text', required: true },
            { name: 'percentage', type: 'text', required: true },
            { name: 'grade', type: 'text' },
          ],
        },
      ],
    },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}