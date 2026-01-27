'use client'

import { motion, AnimatePresence, Variants } from 'framer-motion'
import { useState } from 'react'
import * as LucideIcons from 'lucide-react'
import { Job, CareerPage as CareerData } from '@/payload/payload-types'

/* ------------------ Motion Variants ------------------ */

// Using the Variants type explicitly fixes the "ease: string" TypeScript error
const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    y: 24,
    transition: { duration: 0.2 },
  },
}

/* ------------------ Component ------------------ */

export default function CareerView({ staticData, jobs }: { staticData: CareerData; jobs: Job[] }) {
  const [filter, setFilter] = useState<'all' | 'academic' | 'admin'>('all')

  const filteredJobs = filter === 'all' ? jobs : jobs.filter((job) => job.department === filter)

  return (
    <section className="bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5">
      <motion.div
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen sm:pt-20 py-16"
      >
        {/* ---------------- Hero Section ---------------- */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="sm:py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">
              Let&apos;s Work
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
              {staticData.hero?.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {staticData.hero?.description}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-24 h-1 bg-chart-1 mx-auto mb-10"
          ></motion.div>
        </motion.section>

        {/* ---------------- Decorative Divider ---------------- */}
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
                  Building Careers With Purpose
                  <span className="text-primary">✦</span>
                </span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* ---------------- Jobs List Section ---------------- */}
        <section className="py-10">
          <div className="container mx-auto px-4 ">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
              <h2 className="text-2xl sm:text-3xl font-bold mb-10">Open Positions</h2>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 mb-12">
                {['all', 'academic', 'admin'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat as any)}
                    className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition ${
                      filter === cat
                        ? 'bg-primary text-white'
                        : 'bg-muted text-muted-foreground hover:bg-muted/70'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              variants={listVariants}
              initial="hidden"
              animate="visible"
              layout
              className="space-y-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <motion.div
                      key={job.id}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                      className="p-6 sm:p-8 rounded-3xl border bg-card hover:shadow-xl transition-shadow group"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold rounded-full uppercase">
                              {job.department}
                            </span>
                            <span className="text-sm text-muted-foreground flex items-center gap-1">
                              <LucideIcons.MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>
                        </div>
                      </div>

                      {/* Requirements Grid */}
                      <div className="mt-6 pt-6 border-t grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {job.requirements?.map((req, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <LucideIcons.CheckCircle2 className="w-4 h-4 text-secondary mt-0.5" />
                            {req.point}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  /* Empty State */
                  <motion.div
                    key="empty-state"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-center py-20 bg-muted/20 rounded-3xl border-2 border-dashed flex flex-col items-center"
                  >
                    <LucideIcons.Search className="w-12 h-12 mb-4 text-muted-foreground" />
                    <p className="text-lg font-medium text-muted-foreground">
                      No open positions found in this category.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ---------------- Benefits Section ---------------- */}

        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">Benefits With Florescent</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staticData.benefits?.map((benefit, i) => {
              // Using type assertion for icon resolution to avoid ESLint/TS errors
              const Icon = (LucideIcons as any)[benefit.iconName || 'Heart'] || LucideIcons.Heart

              return (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-2xl bg-card border hover:border-primary/50 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary h-fit">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.section>
      </motion.div>
    </section>
  )
}
