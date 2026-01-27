'use client'

import Image from 'next/image'
import * as motion from 'framer-motion/client'
import { Media } from '@/payload/payload-types'
import { CheckCircle2, BookOpen, ShieldCheck, Home, Users } from 'lucide-react'

type Props = {
  data: any
}

export default function AboutUI({ data }: Props) {
  const {
    hero = {},
    philosophy = {},
    regulations = { norms: [], rules: [] },
    houseSystem = {},
    leadership = [],
    team = [], // New field
    establishedYear,
  } = data || {}

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  }

  return (
    <div className="bg-slate-50 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-white">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />
        <div className="relative container mx-auto px-4 text-center max-w-4xl">
          {hero.badge && (
            <motion.span {...fadeUp} className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              {hero.badge}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            {hero?.title}
          </motion.h1>

          {hero.description && (
            <motion.p {...fadeUp} className="text-xl text-slate-600 mb-8 leading-relaxed">
              {hero.description}
            </motion.p>
          )}

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
                Guiding Florescent Since {establishedYear}
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="bg-white p-10 rounded-[2.5rem] shadow-sm border">
            <BookOpen className="text-primary mb-6" />
            <h2 className="text-3xl font-bold mb-4"><span className='text-accent'>Mission :</span> {philosophy.missionTitle}</h2>
            <p className="text-slate-600 leading-relaxed italic border-l-4 border-primary pl-4">
              {philosophy.missionContent}
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="bg-slate-900 p-10 rounded-[2.5rem] shadow-xl text-white">
            <CheckCircle2 className="text-yellow-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4"><span className='text-orange-300'>Vision :</span> {philosophy.visionTitle}</h2>
            <p className="text-slate-300 leading-relaxed">
              {philosophy.visionContent}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      {leadership.length > 0 && (
        <section className="py-20 container mx-auto px-4 space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-2">School Leadership</h2>
            <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full" />
          </div>

          {leadership.map((leader: any, i: number) => {
            const image = leader.image && typeof leader.image === 'object' ? (leader.image as Media) : null

            return (
              <motion.div key={i} {...fadeUp} className="bg-white p-10 rounded-[3rem] border flex flex-col md:flex-row gap-8 shadow-sm hover:shadow-md transition-shadow">
                <div className={`relative w-48 h-48 rounded-3xl overflow-hidden shrink-0 shadow-inner ${leader.gradient}`}>
                  {image?.url && (
                    <Image src={image.url} alt={leader.name} fill className="object-cover" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold">{leader.name}</h3>
                  <p className="text-amber-700 uppercase text-sm font-semibold tracking-widest">{leader.role}</p>
                  <p className="italic text-slate-600 mt-4 text-lg">{leader.message}</p>
                  <p className="text-slate-500 mt-4 leading-relaxed"> 
                    <span className='text-amber-600 font-medium' >Message from : </span> {leader.introduction}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </section>
      )}

      {/* ================= NEW: OUR TEAM SECTION ================= */}
      {team.length > 0 && (
        <section className="py-24 bg-slate-100/50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-4">
               <Users className="text-primary h-6 w-6" />
               <h2 className="text-4xl font-bold">Our Educators & Staff</h2>
            </div>
            <p className="text-center text-slate-500 mb-16 max-w-2xl mx-auto">
              Meet the dedicated professionals who nurture and guide our students every day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member: any, i: number) => {
                const img = member.image && typeof member.image === 'object' ? (member.image as Media) : null
                return (
                  <motion.div 
                    key={i} 
                    {...fadeUp}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white rounded-3xl p-6 border border-slate-200 text-center hover:shadow-lg transition-all group"
                  >
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden ring-4 ring-slate-50 group-hover:ring-primary/20 transition-all">
                      {img?.url ? (
                        <Image src={img.url} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                          <Users size={40} />
                        </div>
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                    <p className="text-primary font-medium text-sm mt-1">{member.designation}</p>
                    {member.category && (
                      <span className="inline-block mt-3 px-3 py-1 bg-slate-100 text-slate-500 text-[10px] uppercase tracking-widest rounded-full">
                        {member.category}
                      </span>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ================= CORE VALUES ================= */}
      {philosophy.acronymValues?.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-slate-500">The pillars that define Florescent</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {philosophy.acronymValues.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-3xl bg-slate-50 border text-center hover:bg-primary hover:text-white transition group"
                >
                  <span className="text-4xl text-blue-800 block font-bold mb-2 group-hover:text-white transition">
                    {item.letter}
                  </span>
                  <span className="font-bold block text-red-500 group-hover:text-white transition">{item.word}</span>
                  <span className="text-xs block text-blue-950 group-hover:text-slate-100 transition">{item.description}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= HOUSE SYSTEM ================= */}
      {houseSystem?.description && (
        <section className="py-20 container mx-auto px-4">
          <div className="bg-white rounded-[3rem] p-10 border shadow-sm">
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <Home className="text-secondary mb-4" />
                <h2 className="text-4xl font-bold mb-4">House System</h2>
                <p className="text-slate-600 leading-relaxed">{houseSystem.description}</p>
              </div>

              <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
                {houseSystem.houses?.map((house: any, i: number) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-50 border flex gap-4 hover:border-slate-300 transition-colors">
                    <div className="w-4 h-12 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: house.hexColor || '#ccc' }} />
                    <div>
                      <h4 className="font-bold text-lg">{house.name}</h4>
                      <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">{house.colorName}</span>
                      <p className="text-sm text-slate-500 mt-2">{house.motto}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ================= NORMS & RULES ================= */}
      <section className="py-20 bg-slate-900 text-white rounded-t-[4rem]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-primary" />
              <h2 className="text-3xl font-bold">School Norms</h2>
            </div>
            <ul className="space-y-3">
              {regulations.norms?.map((n: any, i: number) => (
                <li key={i} className="bg-white/5 p-4 rounded-xl text-sm border border-white/5 hover:bg-white/10 transition">
                  {n.item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-secondary" />
              <h2 className="text-3xl font-bold">School Rules</h2>
            </div>
            <ul className="space-y-3 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {regulations.rules?.map((r: any, i: number) => (
                <li key={i} className="bg-white/5 p-4 rounded-xl text-sm border border-white/5 hover:bg-white/10 transition">
                  {r.item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
