// import { CollectionConfig } from 'payload'
// import path from 'path'
// import { fileURLToPath } from 'url'

// const filename = fileURLToPath(import.meta.url)
// const dirname = path.dirname(filename)

// const Media: CollectionConfig = {
//   slug: 'media',
//   upload: {
//     staticDir: path.resolve(dirname, '../../public/media'),
//     adminThumbnail: 'thumbnail',
//     mimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'],
//     imageSizes: [
//       {
//         name: 'thumbnail',
//         width: 400,
//         height: 300,
//         position: 'centre',
//       },
//     ],
//   },
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'alt',
//       type: 'text',
//       required: true,
//     },
//   ],
// }
// export default Media
import { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    disableLocalStorage: true, // REQUIRED in v70 when using S3
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
  ],
}

export default Media
