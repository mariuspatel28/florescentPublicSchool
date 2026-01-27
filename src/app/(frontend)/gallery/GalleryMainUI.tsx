'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Calendar, X, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import type { Gallery as GalleryType, Media } from '@/payload/payload-types'

type GalleryCategory = NonNullable<GalleryType['category']>
type FilterCategory = 'all' | GalleryCategory

function isGalleryCategory(category: GalleryType['category']): category is GalleryCategory {
  return typeof category === 'string'
}

export default function GalleryView({ initialImages }: { initialImages: GalleryType[] }) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all')
  const [selectedImage, setSelectedImage] = useState<GalleryType | null>(null)

  const categories: FilterCategory[] = [
    'all',
    ...Array.from(new Set(initialImages.map((img) => img.category).filter(isGalleryCategory))),
  ]

  const filteredImages =
    activeCategory === 'all'
      ? initialImages
      : initialImages.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen bg-linear-to-b to-background via-background from-primary/5 pb-12 pt-6 lg:pt-10">
      {/* ================= HERO ================= */}
      <section className="relative pt-12 pb-6 md:pt-20 md:pb-10 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-primary rounded-full text-xs sm:text-sm font-semibold mb-4">
              Campus Life
            </span>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
              Our School in Frames
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore memorable moments from academics, sports, cultural events, and everyday life
              at Florescent Public School.
            </p>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        
      </section>

      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mb-10"
        >
          <div className="absolute top-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
          <div className="relative flex justify-center">
            <div className="bg-background px-6 py-2 border rounded-full shadow-sm">
              <span className="text-sm sm:text-base font-medium flex items-center gap-2">
                <span className="text-base font-medium text-foreground flex items-center gap-2">
                  <span className="text-primary">✦</span>
                  Capturing Memories
                  <span className="text-primary">✦</span>
                </span>
              </span>
            </div>
          </div>
        </motion.div>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="pb-8 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 overflow-x-auto pb-4 sm:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium capitalize transition-all whitespace-nowrap border ${
                  activeCategory === category
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-muted/50 hover:bg-muted text-muted-foreground border-transparent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className="relative aspect-4/3 cursor-zoom-in"
                  onClick={() => setSelectedImage(item)}
                >
                  <Image
                    src={(item.image as Media)?.url ?? ''}
                    alt={item.title ?? ''}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="text-white w-8 h-8" />
                  </div>

                  {item.category && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-black/30 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1 line-clamp-1">{item.title}</h3>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center text-xs text-muted-foreground gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date ? new Date(item.date).toLocaleDateString() : 'N/A'}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full z-10">
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-5xl w-full aspect-video rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={(selectedImage.image as Media)?.url ?? ''}
                alt={selectedImage.title ?? ''}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
