'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Star, Trophy, GraduationCap } from 'lucide-react'

// Removed 'async' from the function definition
export default function SilverJubilee() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f8fafc]">
      {/* Decorative Brand Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1e3a5a]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ffc107]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Badge: Navy & Gold Theme */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative inline-block mb-10"
          >
            {/* Outer Rotating Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -m-4 md:-m-6 border-2 border-dashed border-[#ffc107]/40 rounded-full"
            />

            {/* Silver/Gold Gradient Badge */}
            <div className="relative w-40 h-40 md:w-52 md:h-52 bg-white rounded-full p-2 shadow-[0_20px_50px_rgba(30,58,90,0.15)] border border-slate-100">
              <div className="w-full h-full rounded-full border-4 border-[#1e3a5a] flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-inner">
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <Trophy className="w-6 h-6 md:w-8 md:h-8 text-[#ffc107] mb-1 mx-auto" />
                  <span className="block text-5xl md:text-7xl font-black text-[#1e3a5a] tracking-tighter leading-none">
                    25
                  </span>
                  <span className="block text-[10px] md:text-xs font-black text-[#1e3a5a] uppercase tracking-[0.3em] mt-1">
                    Years
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Typography: Navy Primary & Gold Accents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-[#1e3a5a]/20" />
              <span className="text-xs md:text-sm font-black text-[#1e3a5a]/60 uppercase tracking-[0.4em]">1999 — 2024</span>
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-[#1e3a5a]/20" />
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-[#1e3a5a] tracking-tighter uppercase">
              Silver <span className="text-[#ffc107] italic">Jubilee</span>
            </h2>

            <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Celebrating <span className="text-[#1e3a5a] font-bold">25 Years</span> of academic distinction, 
              character building, and excellence in education.
            </p>

            {/* Achievement Icons */}
            <div className="flex justify-center items-center gap-8 md:gap-16 pt-8">
              {[
                { icon: GraduationCap, label: "Education" },
                { icon: Star, label: "Legacy" },
                { icon: Sparkles, label: "Future" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#1e3a5a]/5 flex items-center justify-center text-[#1e3a5a]">
                    <item.icon size={24} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#1e3a5a]/40">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}