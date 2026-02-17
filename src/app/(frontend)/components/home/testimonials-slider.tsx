
'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface TestimonialProps {
  testimonials?: {
    quote: string
    author: string
    role?: string | null
    image: any 
  }[] | null
}

export function TestimonialsSlider({ testimonials = [] }: TestimonialProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (!testimonials || testimonials.length <= 1) return
    const timer = setInterval(() => {
      setDirection(1)
      setActiveSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials])

  const handleNext = () => {
    setDirection(1)
    setActiveSlide((prev) => (prev + 1) % (testimonials?.length || 1))
  }

  const handlePrevious = () => {
    setDirection(-1)
    setActiveSlide((prev) => (prev - 1 + (testimonials?.length || 1)) % (testimonials?.length || 1))
  }

  if (!testimonials || testimonials.length === 0) return null

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction > 0 ? -50 : 50,
      opacity: 0,
    }),
  }

  return (
    <section className="relative bg-linear-to-br from-primary/5 to-accent/5 py-16 md:py-24 lg:py-32 overflow-hidden">
      
      {/* --- DECORATIVE BACKGROUND ICONS --- */}
      {/* Hidden on small mobile, reduced opacity/size on tablet */}
      <img
        src="/UI/pencil.png"
        alt=""
        className="absolute top-10 left-4 md:top-20 md:left-10 w-12 h-12 md:w-24 md:h-24 opacity-5 md:opacity-10 rotate-25 pointer-events-none hidden sm:block"
      />
      <img
        src="/UI/book.png"
        alt=""
        className="absolute top-20 right-6 md:top-32 md:right-16 w-16 h-16 md:w-32 md:h-32 opacity-5 md:opacity-10 rotate-18 pointer-events-none hidden sm:block"
      />
      <img
        src="/UI/pencil.png"
        alt=""
        className="absolute bottom-10 right-10 w-12 h-12 md:w-20 md:h-20 opacity-5 md:opacity-10 rotate-35 pointer-events-none hidden lg:block"
      />
      <img
        src="/UI/book.png"
        alt=""
        className="absolute bottom-16 left-10 w-16 h-16 md:w-28 md:h-28 opacity-5 md:opacity-10 rotate-15 pointer-events-none hidden lg:block"
      />

      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
          >
            What Our Students Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Hear from our community about their experiences and achievements
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon Background - Scaled for Mobile */}
          <Quote className="absolute -top-6 -left-2 md:-top-10 md:-left-4 w-10 h-10 md:w-20 md:h-20 text-primary/10" />

          {/* Testimonial Content Area */}
          <div className="relative min-h-[380px] sm:min-h-[320px] md:min-h-[280px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="text-center px-2 md:px-8 w-full"
              >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8 md:mb-10 italic">
                  &ldquo;{testimonials[activeSlide].quote}&rdquo;
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 md:border-4 border-primary/20 shadow-md">
                    <Image
                      src={testimonials[activeSlide].image?.url || "/placeholder.svg"}
                      alt={testimonials[activeSlide].author}
                      fill
                      sizes="(max-width: 768px) 56px, 64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="font-bold text-base md:text-lg text-foreground">
                      {testimonials[activeSlide].author}
                    </p>
                    <p className="text-xs md:text-sm text-primary font-semibold uppercase tracking-wider">
                      {testimonials[activeSlide].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- NAVIGATION CONTROLS --- */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 md:mt-12">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-md active:scale-90 border border-primary/5"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeSlide ? 1 : -1)
                      setActiveSlide(index)
                    }}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === activeSlide ? "bg-primary w-6 md:w-8" : "bg-primary/20 w-2.5 hover:bg-primary/40"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center shadow-md active:scale-90 border border-primary/5"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}