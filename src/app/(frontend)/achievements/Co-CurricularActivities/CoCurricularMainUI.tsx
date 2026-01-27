'use client'
export const dynamic = 'force-dynamic'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Calendar, MapPin, Trophy, Award, Star } from 'lucide-react'
import { AchievementsPage, Media } from '@/payload/payload-types'

type CoCurricularData = AchievementsPage['coCurricular']

export default function CoCurricularView({ data }: { data: CoCurricularData }) {
  const [selectedEvent, setSelectedEvent] = useState<number>(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  const events = data?.events || []
  const currentEvent = events[selectedEvent]
  const eventImages = currentEvent?.images || []

  const nextEvent = () => {
    setSelectedEvent((prev) => (prev + 1) % events.length)
    setSelectedImageIndex(0)
  }

  const prevEvent = () => {
      
    setSelectedEvent((prev) => (prev - 1 + events.length) % events.length)
    setSelectedImageIndex(0)
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % eventImages.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + eventImages.length) % eventImages.length)
  }

  const selectEvent = (index: number) => {
    setSelectedEvent(index)
    setSelectedImageIndex(0)
  }

  if (events.length === 0) return <div className="py-20 text-center">No events found.</div>

  return (
    <div className="py-16 md:py-24 min-h-screen bg-linear-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-chart-1 rounded-full text-sm font-semibold mb-6">
            Co-Curricular Gallery
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {data?.title || 'Beyond Academics'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {data?.description}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-24 h-1 bg-chart-1 mx-auto mb-10"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative md:mt-20 mb-14 lg:mb-23"
        >
          <div className="absolute top-1/2 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2"></div>
          <div className="relative flex justify-center">
            <div className="bg-background px-8 py-3 border border-border/50 rounded-full shadow-lg">
              <span className="text-base font-medium text-foreground flex items-center gap-2">
                <span className="text-primary">✦</span>
                Beyond Classroom Boundaries
                <span className="text-primary">✦</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Event List */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-lg sticky top-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Recent Events</h2>
              <div className="space-y-3">
                {events.map((event, index) => (
                  <motion.button
                    key={index}
                    onClick={() => selectEvent(index)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      selectedEvent === index
                        ? 'bg-linear-to-r from-primary/20 via-secondary/20 to-accent/20 border-l-4 border-primary'
                        : 'bg-muted/30 hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          selectedEvent === index
                            ? 'bg-linear-to-r from-primary to-secondary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground line-clamp-1">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-3 h-3 text-primary" />
                          <span className="text-xs text-muted-foreground">{event.date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Event Details */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedEvent}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-xl"
              >
                {/* Event Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {currentEvent.title}
                      </h2>
                      <Trophy className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{currentEvent.date}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-secondary/10 px-3 py-1.5 rounded-full">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span>{currentEvent.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevEvent}
                      className="p-3 rounded-full bg-linear-to-r from-primary/20 to-secondary/20 hover:bg-linear-to-r hover:from-primary hover:to-secondary hover:text-primary-foreground transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextEvent}
                      className="p-3 rounded-full bg-linear-to-r from-primary/20 to-secondary/20 hover:bg-linear-to-r hover:from-primary hover:to-secondary hover:text-primary-foreground transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {currentEvent.description}
                </p>

                {/* Image Gallery */}
                <div className="mb-8">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-linear-to-br from-muted to-muted-foreground/10">
                    {eventImages[selectedImageIndex] ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={(eventImages[selectedImageIndex].image as Media).url || ''}
                          alt={currentEvent.title}
                          fill
                          className="object-cover"
                        />
                        {eventImages.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-linear-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary text-white transition-colors"
                            >
                              <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-linear-to-r from-primary/80 to-secondary/80 hover:from-primary hover:to-secondary text-white transition-colors"
                            >
                              <ChevronRight className="w-5 h-5" />
                            </button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-linear-to-r from-primary/80 to-secondary/80 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                              {selectedImageIndex + 1} / {eventImages.length}
                            </div>
                          </>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <Award className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                  </div>
                  {eventImages.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {eventImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            selectedImageIndex === index
                              ? 'bg-linear-to-r from-primary to-secondary w-4'
                              : 'bg-muted hover:bg-primary/50'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Highlights */}
                {currentEvent.highlights && currentEvent.highlights.length > 0 && (
                  <div className="bg-linear-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-accent" />
                      Event Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentEvent.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border"
                        >
                          <div className="w-6 h-6 rounded-full bg-linear-to-r from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-primary">{index + 1}</span>
                          </div>
                          <span className="text-foreground">{highlight.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Event indicator dots */}
        {events.length > 1 && (
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectEvent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    selectedEvent === index
                      ? 'bg-linear-to-r from-primary to-secondary w-6'
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                  aria-label={`Go to event ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}