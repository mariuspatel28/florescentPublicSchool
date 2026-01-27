'use client'

import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import { Scholarship, ScholarshipPage as PageData } from '@/payload/payload-types'

export default function ScholarshipView({
  data,
  scholarships,
}: {
  data: PageData
  scholarships: Scholarship[]
}) {
  return (
    <div className="min-h-screen bg-background bg-linear-to-br from-secondary/5 via-primary/5 to-background">
      {/* Hero Section - Matching your existing style */}
      <section className="relative py-20 md:py-32 overflow-hidden ">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="px-4 py-2 bg-secondary/10 text-primary rounded-full text-sm font-bold mb-6 inline-block">
              Excellence Recognized
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              {data.hero?.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {data.hero?.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-24 h-1 bg-chart-1 mx-auto mb-10"
          ></motion.div>
        </div>

        <div className="relative md:mt-20">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              <span className="text-base font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">✦</span>
                Empowering Academic Excellence
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Grid */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {scholarships.map((s, i) => {
              const Icon = (LucideIcons as any)[s.iconName || 'Award'] || LucideIcons.Award
              return (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-8 rounded-3xl hover:shadow-xl transition-all group"
                >
                  <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="text-sm font-bold text-secondary mb-2 uppercase tracking-wider">
                    Standards {s.standards}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <div className="text-3xl font-black text-primary mb-4">{s.reward}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.criteria}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Conditions Section - Matches your 'Meeting Guidelines' UI */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-muted/30 border border-border rounded-3xl p-8 md:p-12 mb-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <LucideIcons.ShieldCheck className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Terms & Conditions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {data.conditions?.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold text-xs">
                    {idx + 1}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.rule}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground italic">
                These scholarships will be awarded based on the {new Date().getFullYear()} academic results, subject to the rules and regulations set for the scheme.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
