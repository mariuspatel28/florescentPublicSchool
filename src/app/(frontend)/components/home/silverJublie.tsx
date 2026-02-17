'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Star, Trophy, GraduationCap, Quote, Heart, Target } from 'lucide-react'

export default function SilverJubilee() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#f8fafc]">
      {/* Decorative Brand Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1e3a5a]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ffc107]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* 1. TOP SECTION: THE BADGE & TITLE */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative inline-block mb-10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 -m-4 md:-m-6 border-2 border-dashed border-[#ffc107]/40 rounded-full"
              />
              <div className="relative w-40 h-40 md:w-52 md:h-52 bg-white rounded-full p-2 shadow-[0_20px_50px_rgba(30,58,90,0.15)] border border-slate-100">
                <div className="w-full h-full rounded-full border-4 border-[#1e3a5a] flex flex-col items-center justify-center bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-inner">
                  <motion.div initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-center">
                    <Trophy className="w-6 h-6 md:w-8 md:h-8 text-[#ffc107] mb-1 mx-auto" />
                    <span className="block text-[10px] font-black text-[#1e3a5a] uppercase tracking-[0.3em]">Glorious</span>
                    <span className="block text-5xl md:text-7xl font-black text-[#1e3a5a] tracking-tighter leading-none">25</span>
                    <span className="block text-[10px] font-black text-[#1e3a5a] uppercase tracking-[0.3em]">Years</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#1e3a5a]/20" />
                <span className="text-xs font-black text-[#1e3a5a]/60 uppercase tracking-[0.4em]">2000 — 2025</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#1e3a5a]/20" />
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#1e3a5a] tracking-tighter uppercase mb-6">
                Silver <span className="text-[#ffc107] italic">Jubilee</span> Reflections
              </h2>
            </motion.div>
          </div>

          {/* 2. MIDDLE SECTION: THE REFLECTIONS (Modern Split Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            
            {/* Left Column: Founding & Legacy */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-8 text-slate-100 w-24 h-24 -z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#1e3a5a] rounded-lg text-white">
                    <Heart size={20} />
                  </div>
                  <h3 className="text-xl font-black text-[#1e3a5a] uppercase tracking-tight">The Foundation of Values</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Founded by <span className="text-[#1e3a5a] font-bold">Shree Motibhai Patel</span> with a visionary commitment to quality education, 
                  Florescent Public School was lovingly nurtured and strengthened by our late Managing Trustee, 
                  <span className="text-[#1e3a5a] font-bold"> Shri Nareshbhai Patel</span>. Their combined foresight shaped a journey rooted in 
                  holistic excellence, evolving from a humble beginning into a center of academic brilliance and responsible citizenship.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Present & Future */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 py-4"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#ffc107] rounded-lg text-[#1e3a5a]">
                    <Target size={20} />
                  </div>
                  <h3 className="text-xl font-black text-[#1e3a5a] uppercase tracking-tight">Renewed Vision</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Under the able guidance of our present Managing Trustee, <span className="text-[#1e3a5a] font-bold">Nikita Patel</span>, 
                  the institution continues to progress with renewed vision. We embrace modern pedagogy while upholding strong ethical values, 
                  ensuring our students become confident, compassionate, and future-ready global citizens.
                </p>
              </div>

              {/* Achievement Grid (Internal) */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: GraduationCap, label: 'Education' },
                  { icon: Star, label: 'Legacy' },
                  { icon: Sparkles, label: 'Future' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#1e3a5a]/5 text-[#1e3a5a]">
                    <item.icon size={20} />
                    <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 3. BOTTOM SECTION: CALLOUT */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-[#1e3a5a] text-white p-8 rounded-[2rem] shadow-xl"
          >
            <p className="text-lg md:text-xl font-medium italic opacity-90">
              25 years of meaningful education—testimony to a dedicated faculty and progressive spirit.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}