// import { GlobalConfig } from 'payload'

// export const AboutPage: GlobalConfig = {
//   slug: 'about-page',
//   admin: {
//     group: 'Pages',
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'hero',
//       type: 'group',
//       fields: [
//         { name: 'badge', type: 'text', defaultValue: 'About Our Institution' },
//         { name: 'title', type: 'text', required: true },
//         { name: 'description', type: 'textarea' },
//       ],
//     },
//     // --- NEW: Philosophy & Vision Section ---
//     {
//       name: 'philosophy',
//       type: 'group',
//       label: 'School Philosophy & Vision',
//       fields: [
//         { name: 'missionTitle', type: 'text', defaultValue: 'Mission Statement' },
//         { name: 'missionContent', type: 'textarea' },
//         { name: 'visionTitle', type: 'text', defaultValue: 'Vision Statement' },
//         { name: 'visionContent', type: 'textarea' },
//         {
//           name: 'acronymValues',
//           type: 'array',
//           label: 'FLORESCENT Acronym',
//           fields: [
//             { name: 'letter', type: 'text' },
//             { name: 'word', type: 'text' },
//             { name: 'description', type: 'text' },
//           ],
//         },
//       ],
//     },
//     // --- NEW: Regulations Section ---
//     {
//       name: 'regulations',
//       type: 'group',
//       label: 'Norms & Rules',
//       fields: [
//         { name: 'norms', type: 'array', fields: [{ name: 'item', type: 'textarea' }] },
//         { name: 'rules', type: 'array', fields: [{ name: 'item', type: 'textarea' }] },
//       ],
//     },
//     // --- NEW: House System ---
//     {
//       name: 'houseSystem',
//       type: 'group',
//       fields: [
//         { name: 'description', type: 'textarea' },
//         {
//           name: 'houses',
//           type: 'array',
//           fields: [
//             { name: 'name', type: 'text' },
//             { name: 'colorName', type: 'text' },
//             { name: 'motto', type: 'text' },
//             { name: 'hexColor', type: 'text', admin: { description: 'e.g. #0000ff' } },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'leadership',
//       type: 'array',
//       label: 'Leadership Team',
//       fields: [
//         { name: 'name', type: 'text', required: true },
//         { name: 'role', type: 'text', required: true },
//         { name: 'image', type: 'upload', relationTo: 'media' },
//         { name: 'introduction', type: 'textarea', required: true },
//         { name: 'message', type: 'textarea', required: true },
//         {
//           name: 'gradient',
//           type: 'select',
//           options: [
//             { label: 'Amber / Orange', value: 'from-amber-500 to-orange-500' },
//             { label: 'Purple / Pink', value: 'from-purple-500 to-pink-500' },
//             { label: 'Blue / Cyan', value: 'from-blue-500 to-cyan-500' },
//           ],
//           defaultValue: 'from-amber-500 to-orange-500',
//         },
//       ],
//     },
//     {
//       name: 'establishedYear',
//       type: 'number',
//       defaultValue: 1995,
//     },
//   ],
// }

import { GlobalConfig } from 'payload'

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
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
        { name: 'badge', type: 'text', defaultValue: 'About Our Institution' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
    {
      name: 'philosophy',
      type: 'group',
      label: 'School Philosophy & Vision',
      fields: [
        { name: 'missionTitle', type: 'text', defaultValue: 'Mission Statement' },
        { name: 'missionContent', type: 'textarea' },
        { name: 'visionTitle', type: 'text', defaultValue: 'Vision Statement' },
        { name: 'visionContent', type: 'textarea' },
        {
          name: 'acronymValues',
          type: 'array',
          label: 'FLORESCENT Acronym',
          fields: [
            { name: 'letter', type: 'text' },
            { name: 'word', type: 'text' },
            { name: 'description', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'regulations',
      type: 'group',
      label: 'Norms & Rules',
      fields: [
        { name: 'norms', type: 'array', fields: [{ name: 'item', type: 'textarea' }] },
        { name: 'rules', type: 'array', fields: [{ name: 'item', type: 'textarea' }] },
      ],
    },
    {
      name: 'houseSystem',
      type: 'group',
      fields: [
        { name: 'description', type: 'textarea' },
        {
          name: 'houses',
          type: 'array',
          fields: [
            { name: 'name', type: 'text' },
            { name: 'colorName', type: 'text' },
            { name: 'motto', type: 'text' },
            { name: 'hexColor', type: 'text', admin: { description: 'e.g. #0000ff' } },
          ],
        },
      ],
    },
    {
      name: 'leadership',
      type: 'array',
      label: 'Leadership Team',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text', required: true },
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'introduction', type: 'textarea', required: true },
        { name: 'message', type: 'textarea', required: true },
        {
          name: 'gradient',
          type: 'select',
          options: [
            { label: 'Amber / Orange', value: 'from-amber-500 to-orange-500' },
            { label: 'Purple / Pink', value: 'from-purple-500 to-pink-500' },
            { label: 'Blue / Cyan', value: 'from-blue-500 to-cyan-500' },
          ],
          defaultValue: 'from-amber-500 to-orange-500',
        },
      ],
    },
    // --- NEW: Team Section ---
    {
      name: 'team',
      type: 'array',
      label: 'Academic & Support Team',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'designation', type: 'text', required: true },
        { name: 'category', type: 'text', admin: { description: 'e.g. Primary Teacher, Arts Dept' } },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'establishedYear',
      type: 'number',
      defaultValue: 1995,
    },
  ],
}