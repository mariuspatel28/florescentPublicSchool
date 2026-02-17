'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import * as LucideIcons from 'lucide-react'
import { AdmissionPage as AdmissionData } from '@/payload/payload-types'

export default function AdmissionView({ data }: { data: AdmissionData }) {
  const [activeProcessStep, setActiveProcessStep] = useState(0)
  const steps = data.admissionProcess?.steps || []

  return (
    <div className="min-h-screen bg-linear-to-b from-background via-background to-primary/5">
      {/* HERO SECTION */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-muted/30 to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Admissions
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {data.admissionProcess?.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Begin your child’s educational journey with a transparent and student-focused
              admission process.
            </p>
          </motion.div>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="w-24 h-1 bg-chart-1 mx-auto mb-10"
            ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }} className="relative md:mt-20">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              <span className="text-base font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">✦</span>
                Shaping Futures From Day One
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }} className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* STEP NAVIGATION */}
            <div className="lg:col-span-4 space-y-4">
              {steps.map((step, index) => {
                const Icon = (LucideIcons as any)[step.iconName || 'Circle'] || LucideIcons.Circle

                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveProcessStep(index)}
                    className={`w-full text-left p-6 rounded-2xl border flex items-center gap-4 transition-all ${
                      activeProcessStep === index
                        ? 'bg-primary/30 text-primary-foreground border-primary shadow-md scale-[1.02]'
                        : 'bg-card border-border hover:border-primary/40'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-xl ${
                        activeProcessStep === index
                          ? 'bg-white/20'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase opacity-70">
                        Step {step.stepNumber}
                      </span>
                      <h3 className="font-bold text-lg">{step.title}</h3>
                    </div>
                  </motion.button>
                )
              })}
            </div>

            {/* STEP CONTENT */}
            <div className="lg:col-span-8">
              {steps[activeProcessStep] && (
                <motion.div
                  key={activeProcessStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-card border border-border rounded-3xl p-8 md:p-10"
                >
                  <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {steps[activeProcessStep].title}
                    </h3>
                    {steps[activeProcessStep].duration && (
                      <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        {steps[activeProcessStep].duration}
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-8">
                    {steps[activeProcessStep].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {steps[activeProcessStep].details?.map((detail, i) => (
                      <div key={i} className="flex gap-3">
                        <LucideIcons.CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <span className="font-medium">{detail.item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
