import { GlobalConfig } from 'payload'

export const AdmissionPage: GlobalConfig = {
  slug: 'admission-page',
  admin: {
    group: 'Pages',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'welcomeSection',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media', }//required: true },
      ]
    },
    {
      name: 'admissionProcess',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Admission Process' },
        {
          name: 'steps',
          type: 'array',
          fields: [
            { name: 'stepNumber', type: 'number', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text' },
            { name: 'duration', type: 'text', admin: { placeholder: 'e.g. 1-2 Days' } },
            { name: 'iconName', type: 'text', label: 'Lucide Icon Name' },
            {
              name: 'details',
              type: 'array',
              fields: [{ name: 'item', type: 'text' }]
            }
          ]
        }
      ]
    },
    {
      name: 'whyChooseUs',
      type: 'group',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Experience the Florescent Advantage' },
        {
          name: 'stats',
          type: 'array',
          maxRows: 4,
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'value', type: 'text', required: true, admin: { placeholder: 'e.g. 15K+' } },
            { name: 'iconName', type: 'text' }
          ]
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            { name: 'iconName', type: 'text' },
            { name: 'title', type: 'text', required: true },
          ]
        }
      ]
    }
  ],
}