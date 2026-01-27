import type { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    useAsTitle: 'studentName',
    defaultColumns: ['studentName', 'parentName', 'classFor', 'createdAt'],
  },
  access: {
    // Only allow public to create; only admins can read/update/delete
    create: () => true,
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'studentName',
      type: 'text',
      required: true,
    },
    {
      name: 'parentName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'classFor',
      type: 'text',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
    },
  ],
  timestamps: true, // Automatically adds createdAt and updatedAt
}