import { CollectionConfig } from 'payload'

export const Scholarships: CollectionConfig = {
  slug: 'scholarships',
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
      required: true,
      label: 'Scholarship/Award Name',
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Rank Based', value: 'rank' },
        { label: 'Percentage Based', value: 'percentage' },
        { label: 'Board Excellence', value: 'board' },
      ],
      required: true,
    },
    {
      name: 'standards',
      type: 'text',
      label: 'Applicable Standards (e.g. 1 to 7)',
      required: true,
    },
    {
      name: 'reward',
      type: 'text',
      label: 'Reward (e.g. ₹5,000 or Medal)',
    },
    {
      name: 'criteria',
      type: 'textarea',
      label: 'Eligibility Criteria',
    },
    {
      name: 'iconName',
      type: 'text',
      label: 'Lucide Icon Name',
      defaultValue: 'Award',
    }
  ],
}