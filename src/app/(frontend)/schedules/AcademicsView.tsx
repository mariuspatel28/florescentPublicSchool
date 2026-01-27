'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ClipboardList, MapPin } from 'lucide-react'
import { AcademicsPage as AcademicsData } from '@/payload/payload-types'

export default function AcademicsView({ data }: { data: AcademicsData }) {
  return (
    <div className="min-h-screen bg-linear-to-b to-background via-background from-primary/5">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-primary rounded-full text-sm font-semibold mb-6">
              Academic Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {data.hero?.title || 'Examination & Academics'}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {data.hero?.subtitle}
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
            transition={{ delay: 0.1 }} className="relative md:mt-20 mb-10">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              <span className="text-base font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">✦</span>
                Structuring Success Every Day
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Examination Schedule */}
              <div className="space-y-8 mb-20">
                <h2 className="text-2xl md:text-3xl font-bold">Examination Schedule</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {data.examSchedules?.map((exam, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-card rounded-2xl p-6 border border-border"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                          {exam.classes}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          {exam.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{exam.term}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" /> {exam.date}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events Table */}
              <div className="mb-20">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Upcoming Events</h2>
                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left py-4 px-6 font-semibold">Event</th>
                          <th className="text-left py-4 px-6 font-semibold">Date & Time</th>
                          <th className="text-left py-4 px-6 font-semibold">Venue</th>
                          <th className="text-left py-4 px-6 font-semibold">Participants</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {data.upcomingEvents?.map((event, index) => (
                          <tr key={index} className="hover:bg-muted/30 transition-colors">
                            <td className="py-4 px-6">
                              <div className="font-bold">{event.title}</div>
                              <div className="text-xs text-primary uppercase">{event.category}</div>
                            </td>
                            <td className="py-4 px-6 text-sm">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-3 h-3" /> {event.date}
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-3 h-3" /> {event.time}
                              </div>
                            </td>
                            <td className="py-4 px-6 text-sm text-muted-foreground">
                              {event.venue}
                            </td>
                            <td className="py-4 px-6 text-sm">{event.participants}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* PTM Schedule */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {data?.ptmSchedules?.map((ptm: any, index: number) => (
                  <div
                    key={index}
                    className="bg-card rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
                  >
                    {/* Exam Title */}
                    <h3 className="text-xl font-bold text-foreground mb-4">{ptm.Exam}</h3>

                    {/* Date / Time / Venue */}
                    <div className="space-y-3 text-sm mb-6">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-foreground font-medium">{ptm.date}</span>
                      </div>

                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{ptm.time}</span>
                      </div>

                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{ptm.venue}</span>
                      </div>
                    </div>

                    {/* Points to Discuss */}
                    {ptm['Points To Discuss']?.length > 0 && (
                      <div className="border-t border-border pt-4">
                        <div className="flex items-center gap-2 mb-3">
                          <ClipboardList className="w-4 h-4 text-primary" />
                          <h4 className="font-semibold text-foreground">Points to Discuss</h4>
                        </div>

                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {ptm['Points To Discuss'].map((item: any, idx: number) => (
                            <li key={idx}>{item['point 1']}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> 
      </section>
    </div>
  )
}
