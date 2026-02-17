import { GlobalConfig } from 'payload'

export const AchievementsPage: GlobalConfig = {
  slug: 'achievements-page',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'resultsSection',
      type: 'group',
      label: 'Previous Year Results',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Main Title',
          defaultValue: 'Our Academic Excellence',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Hero Description',
          defaultValue: 'Celebrating exceptional academic achievements and continuous growth',
        },
        {
          name: 'stats',
          type: 'array',
          label: 'Hero Stats',
          maxRows: 4,
          fields: [
            {
              name: 'iconEmoji',
              type: 'text',
              label: 'Icon (Emoji)',
              defaultValue: '⭐',
            },
            {
              name: 'number',
              type: 'text',
              label: 'Stat Value (e.g. 98% or 50+)',
              required: true,
            },
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
            },
          ],
        },
        {
          name: 'results',
          type: 'array',
          label: 'Results List',
          minRows: 1,
          labels: {
            singular: 'Result',
            plural: 'Results',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              // required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'schoolAchievements',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Institutional Milestones' },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue: 'Celebrating our journey of excellence...',
        },
        {
          name: 'stats',
          type: 'array',
          maxRows: 4,
          fields: [
            { name: 'number', type: 'text', required: true, label: 'Value (e.g. 25+)' },
            {
              name: 'label',
              type: 'text',
              required: true,
              label: 'Label (e.g. Years of Excellence)',
            },
            { name: 'iconEmoji', type: 'text', label: 'Icon Emoji' },
          ],
        },
        {
          name: 'items',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
            { name: 'image', type: 'upload', relationTo: 'media', }//required: true },
          ],
        },
      ],
    },
    {
      name: 'studentAchievements',
      type: 'group',
      label: 'Star Performers Section',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Star Performers' },
        { name: 'subtitle', type: 'text', defaultValue: 'Celebrating excellence redefined' },
        {
          name: 'students',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true, label: 'Student Name' },
            {
              name: 'achievementTitle',
              type: 'text',
              required: true,
              label: 'Short Achievement Title (e.g. Science Topper)',
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
              label: 'Detailed Description',
            },
            { name: 'image', type: 'upload', relationTo: 'media', }//required: true },
          ],
        },
      ],
    },
    {
      name: 'coCurricular',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Student Achievements',
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue:
            'Celebrating excellence beyond the classroom through various events and competitions',
        },
        {
          name: 'events',
          type: 'array',
          label: 'Gallery Events',
          minRows: 1,
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
            },
            {
              name: 'date',
              type: 'text',
            },
            {
              name: 'location',
              type: 'text',
            },
            {
              name: 'category',
              type: 'select',
              options: [
                { label: 'Science & Technology', value: 'Science & Technology' },
                { label: 'Literary', value: 'Literary' },
                { label: 'Sports', value: 'Sports' },
                { label: 'Cultural', value: 'Cultural' },
                { label: 'STEM', value: 'STEM' },
              ],
            },
            {
              name: 'images',
              type: 'array',
              label: 'Event Images',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  // required: true,
                },
              ],
            },
            {
              name: 'highlights',
              type: 'array',
              label: 'Event Highlights',
              fields: [
                {
                  name: 'text',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}