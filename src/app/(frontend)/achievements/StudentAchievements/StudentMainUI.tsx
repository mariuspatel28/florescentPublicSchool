'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Media } from '@/payload/payload-types'
import { Award, Trophy, Star, Target, Zap, TrendingUp } from 'lucide-react'

interface StudentAchievement {
  id?: string | null
  name: string
  achievementTitle: string
  description: string
  image: string | Media
}

export default function StudentView({ students }: { students: StudentAchievement[] }) {
  const achievementIcons = [Trophy, Star, Target, Zap, TrendingUp]

  return (
    <section className="relative bg-linear-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* ================= HEADER SECTION ================= */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decoration */}
        

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            >
              <span className="tracking-[0.1em] inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">Excellence Redefined</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 mb-6" 
            >
              Our Star Performers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Celebrating exceptional achievements across academics, sports, and arts
            </motion.p>
          </motion.div>
          <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="w-24 h-1 bg-chart-1 mx-auto mb-10"
                  ></motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative mt-20"
        >
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              <span className="text-base font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">✦</span>
                Honoring Student Success
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="relative py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {students?.map((student, index) => {
              const Icon = achievementIcons[index % achievementIcons.length]

              return (
                <motion.div
                  key={student.id || index}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  className="group relative h-full"
                >
                  <div className="relative h-full bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2">
                    {/* Image */}
                    <div className="relative w-full h-56 md:h-64 overflow-hidden">
                      <Image
                        src={(student.image as Media)?.url || '/image.png'}
                        alt={student.name}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                      <div className="absolute top-4 right-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 to-accent/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{student.name}</h3>

                      <div className="mb-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-4 border border-primary/20">
                        <h4 className="text-lg font-bold mb-1">{student.achievementTitle}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4 text-primary" />
                          Outstanding Performance
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed line-clamp-4">
                        {student.description}
                      </p>

                      <div className="flex items-center gap-3 pt-6 mt-6 border-t border-border/50">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary">#{index + 1}</span>
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider text-muted-foreground">
                            Rank
                          </div>
                          <div className="text-sm font-semibold">Top Performer</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </section>
  )
}
