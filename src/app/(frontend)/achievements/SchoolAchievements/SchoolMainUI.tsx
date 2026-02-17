'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, GraduationCap, TrendingUp, Award } from 'lucide-react'
import { AchievementsPage, Media, Result } from '@/payload/payload-types'
import Image from 'next/image'

interface ResultsMainUIProps {
  header: AchievementsPage['resultsSection']
  results: Result[]
}

export default function ResultsMainUI({ header, results }: ResultsMainUIProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!results || results.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="text-center bg-white p-12 rounded-[2rem] shadow-sm border border-slate-100">
          <Award className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-800">No records found</h3>
          <p className="text-slate-500">Academic records will appear here once updated.</p>
        </div>
      </div>
    )
  }

  const current = results[currentIndex]
  const image = current.image as Media

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20">
      {/* 1. HEADER SECTION */}
      <section className="relative overflow-hidden py-20 mt-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-[150px]"></div>
          <div className="absolute bottom-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 blur-[150px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Institutional Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Institutional Milestones
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Celebrating our journey of excellence
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative py-10"
        >
          <div className="absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              <span className="text-base font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">✦</span>
                Here To Guide You Forward
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 space-y-12 max-w-6xl">
        {/* <div className="h-auto relative aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white bg-slate-200">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-full w-full"
            >
              {image?.url ? (
                <Image src={image.url} alt={current.year} fill className="object-cover" priority />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400 font-bold text-xs">
                  IMAGE NOT PROVIDED
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5a]/90 via-transparent to-transparent" />
            </motion.div>
          </AnimatePresence>

          {results.length > 1 && (
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 md:px-8 z-20">
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
                }
                className="p-3 md:p-5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#ffc107] hover:text-[#1e3a5a] transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % results.length)}
                className="p-3 md:p-5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-[#ffc107] hover:text-[#1e3a5a] transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div> */}

        {/* 3. PERFORMANCE DATA (Summary Stats Group) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Year', val: current.year, icon: Award },
            {
              label: 'School Performance',
              val: `${current.summaryStats?.schoolResult}%`,
              icon: TrendingUp,
            },
            {
              label: 'Board Performance',
              val: `${current.summaryStats?.boardResult}%`,
              icon: GraduationCap,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center"
            >
              <item.icon className="w-6 h-6 mx-auto mb-4 text-[#ffc107]" />
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                {item.label}
              </p>
              <p className="text-3xl font-black text-[#1e3a5a]">{item.val}</p>
            </motion.div>
          ))}
        </div>

        {/* 4. STUDENT LIST (Array Field) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100"
        >
          <div className="p-8 bg-[#1e3a5a] text-white flex justify-between items-center">
            <h3 className="font-black uppercase tracking-widest text-sm flex items-center gap-3">
              <GraduationCap className="text-[#ffc107]" /> Detailed Merit List
            </h3>
            <span className="text-[10px] font-bold px-3 py-1 bg-white/10 rounded-full">
              {current.studentResults?.length || 0} Entries
            </span>
          </div>

          <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
            <table className="w-full text-left">
              <thead className="sticky top-0 bg-slate-50 z-10">
                <tr>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase">
                    Student Name
                  </th>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase text-center">
                    Percentage
                  </th>
                  <th className="p-6 text-[10px] font-black text-slate-400 uppercase text-right">
                    Grade
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {current.studentResults?.map((student, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold text-[#1e3a5a] uppercase text-sm">
                      {student.studentName}
                    </td>
                    <td className="p-6 font-black text-[#ffc107] text-center text-xl">
                      {student.percentage}%
                    </td>
                    <td className="p-6 text-right">
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-md font-black text-[10px] border border-emerald-100">
                        {student.grade || '—'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
