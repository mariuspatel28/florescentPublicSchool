import { GlobalConfig } from 'payload'

export const AcademicsPage: GlobalConfig = {
  slug: 'academics-page',
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
        { name: 'title', type: 'text', required: true, defaultValue: 'Examination & Academics' },
        {
          name: 'subtitle',
          type: 'textarea',
          defaultValue:
            'Access examination schedules, fee information, notices, and academic resources',
        },
      ],
    },
    {
      name: 'examSchedules',
      type: 'array',
      label: 'Examination Schedule',
      fields: [
        { name: 'term', type: 'text', required: true },
        { name: 'date', type: 'text', required: true },
        { name: 'classes', type: 'text', required: true },
        {
          name: 'status',
          type: 'select',
          options: ['Upcoming', 'Ongoing', 'Completed'],
          defaultValue: 'Upcoming',
        },
      ],
    },
    {
      name: 'upcomingEvents',
      type: 'array',
      label: 'Upcoming Events',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'date', type: 'text', required: true },
        { name: 'time', type: 'text', required: true },
        { name: 'venue', type: 'text', required: true },
        { name: 'category', type: 'text' },
        { name: 'participants', type: 'text' },
      ],
    },
    {
      name: 'ptmSchedules',
      type: 'array',
      label: 'PTM Schedule',
      fields: [
        { name: 'Exam', type: 'text', required: true },
        { name: 'date', type: 'text', required: true },
        { name: 'time', type: 'text', required: true },
        { name: 'venue', type: 'text', required: true },
        { name: 'Points To Discuss', type: 'array', 
          fields: [
            { name: 'point 1', type: 'text',defaultValue: 'Regular PTM' }] },
      ],
    },
  ],
}
