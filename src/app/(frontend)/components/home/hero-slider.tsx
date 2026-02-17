"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion"
import { Media } from "@/payload/payload-types"

interface HeroSlide {
  image: string | Media
  title: string
  highlightWord?: string
}

interface HeroSliderProps {
  slides: HeroSlide[]
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isMounted, setIsMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: isMounted ? heroRef : undefined,
    offset: ["start start", "end start"],
  })

  const rawOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])
  const rawScale = useTransform(scrollYProgress, [0, 0.9], [1, 0.94])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!slides?.length) return
    const timer = setInterval(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % slides.length
        setDirection(next > prev ? 1 : -1)
        return next
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [slides])

  const heroOpacity = isMounted ? rawOpacity : 1
  const heroScale = isMounted ? rawScale : 1

  if (!slides?.length) return null

  const getImageUrl = (image: string | Media) =>
    typeof image === "string" ? image : image?.url

  /** 🔒 FIXED slide variants */
  const slideVariants = {
    enter: (d: number) => ({
      x: d > 0 ? "100vw" : "-100vw",
      opacity: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (d: number) => ({
      x: d > 0 ? "-100vw" : "100vw",
      opacity: 0.8,
    }),
  }

  return (
    <section className="relative h-screen bg-black overflow-x-hidden touch-pan-y">
      <motion.div
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="sticky top-0 h-screen w-full overflow-hidden will-change-transform"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${getImageUrl(slides[activeSlide].image)})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>

        <div className="relative h-full flex items-center justify-center text-white px-6 z-10">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSlide}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d > 0 ? 80 : -80 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d > 0 ? -80 : 80 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 1, delay: 0.3 }}
              className="text-center max-w-6xl"
            >
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight flex flex-wrap justify-center gap-3">
                {slides[activeSlide].title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={
                      word.toUpperCase() === slides[activeSlide].highlightWord?.toUpperCase()
                        ? "bg-[#374151] px-4 py-1 rounded-sm"
                        : ""
                    }
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-10 h-10 sm:w-12 sm:h-12" />
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-6 z-20 text-white">
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > activeSlide ? 1 : -1)
                  setActiveSlide(i)
                }}
                className={`w-3 h-3 rounded-full border-2 ${
                  i === activeSlide
                    ? "bg-[#FFD700] border-[#FFD700]"
                    : "border-[#FFD700]"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}