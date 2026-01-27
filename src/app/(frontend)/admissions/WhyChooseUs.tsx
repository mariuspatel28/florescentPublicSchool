
'use client'

import { motion, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import * as LucideIcons from "lucide-react"
import { AdmissionPage as AdmissionData } from "@/payload/payload-types"

const CountingNumber = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const end = parseInt(value.replace(/[^0-9]/g, ''))
    let current = 0

    const timer = setInterval(() => {
      current += Math.ceil(end / 50)
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 30)

    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{count}{value.includes('+') ? '+' : ''}</span>
}

export default function WhyChooseUsView({ data }: { data: AdmissionData }) {
  return (
    <section className="pb-24 bg-gradient-to-b to-background via-background from-primary/5">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }} className="container mx-auto px-4">

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {data.whyChooseUs?.stats?.map((stat, i) => {
            const Icon =
              (LucideIcons as any)[stat.iconName || 'Star'] ||
              LucideIcons.Star

            return (
              <motion.div key={i} className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-4xl font-bold mb-1">
                  <CountingNumber value={stat.value} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* FEATURES */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            {data.whyChooseUs?.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.whyChooseUs?.features?.map((feature, i) => {
            const Icon =
              (LucideIcons as any)[feature.iconName || 'Award'] ||
              LucideIcons.Award

            return (
              <motion.div
                key={i}
                className="p-8 rounded-3xl bg-card border border-border hover:shadow-xl transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                {/* <p className="text-muted-foreground">
                  {feature.description}
                </p> */}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
