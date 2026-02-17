import { GlobalConfig } from 'payload'

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
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
        { name: 'title', type: 'text', defaultValue: 'Contact Us' },
        { name: 'subtitle', type: 'textarea' },
      ]
    },
    {
      name: 'mainInfo',
      type: 'group',
      fields: [
        { name: 'emails', type: 'array', fields: [{ name: 'email', type: 'text' }] },
        { name: 'address', type: 'textarea' },
        {
          name: 'supportHours',
          type: 'array',
          fields: [
            { name: 'day', type: 'text' },
            { name: 'hours', type: 'text' },
          ]
        }
      ]
    },
    {
      name: 'contactNumbers',
      type: 'array',
      fields: [
        { name: 'department', type: 'text' },
        { name: 'number', type: 'text' },
        { name: 'ext', type: 'text' },
      ]
    },
    {
      name: 'emergencyContacts',
      type: 'array',
      fields: [
        { name: 'type', type: 'text' },
        { name: 'number', type: 'text' },
        { name: 'person', type: 'text' },
      ]
    },
    {
      name: 'transportation',
      type: 'array',
      fields: [
        { name: 'method', type: 'text', label: 'Method (e.g. By Metro)' },
        { name: 'details', type: 'text' },
      ]
    }
  ],
}