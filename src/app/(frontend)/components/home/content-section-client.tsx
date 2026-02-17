'use client'

import Image from 'next/image'
import { Button } from '../../../../../public/UI/button' // Verify this path is correct
import { motion, MotionValue, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import { HomePage, Media } from '@/payload/payload-types'

type Card = NonNullable<HomePage['scrollCards']>[number]

interface Props {
  card: Card
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}

function ProgressDot({ index, total, scrollYProgress }: { index: number, total: number, scrollYProgress: MotionValue<number> }) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1])
  const scale = useTransform(scrollYProgress, [start, end], [0.8, 1.2])

  return (
    <motion.div
      style={{ opacity, scale }}
      className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full transition-colors"
    />
  )
}

export function ContentCard({ card, index, total, scrollYProgress }: Props) {
  const start = index / total
  const end = (index + 1) / total

  // Entrance and Exit animations
  const contentOpacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  )

  const contentY = useTransform(scrollYProgress, [start, start + 0.1], [40, 0])
  
  // Responsive Image Animations: subtle scaling
  const imageScale = useTransform(scrollYProgress, [start, start + 0.15], [0.9, 1])
  const imageRotate = useTransform(scrollYProgress, [start, start + 0.2], [index % 2 === 0 ? -2 : 2, 0])

  const imageData = card.image as Media

  return (
    <motion.div 
      style={{ opacity: contentOpacity }}
      className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 p-6 sm:p-10 lg:p-16 items-center"
    >
      {/* IMAGE - Top on Mobile, Right on Desktop */}
      <div className="flex items-center justify-center order-1 lg:order-2 h-full max-h-[30vh] sm:max-h-[40vh] lg:max-h-full">
        <motion.div
          style={{ scale: imageScale, rotate: imageRotate }}
          className="w-full h-full relative"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border bg-muted">
            {imageData?.url && (
              <Image
                src={imageData.url}
                alt={imageData.alt || card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                priority={index === 0}
              />
            )}
          </div>
        </motion.div>
      </div>

      {/* TEXT CONTENT - Bottom on Mobile, Left on Desktop */}
      <motion.div
        style={{ y: contentY }}
        className="flex flex-col justify-center text-center lg:text-left space-y-4 md:space-y-6 z-10 order-2 lg:order-1"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          {card.title}
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
          {card.description}
        </p>

        {card.buttonText && (
          <div className="pt-2">
            <Button size="lg" className="w-full sm:w-fit font-semibold px-8 shadow-lg shadow-primary/20">
              {card.buttonText}
            </Button>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export function ContentSectionClient({ cards }: { cards: Card[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  // We multiply the viewport height by the number of cards to make the scroll speed feel natural
  const scrollHeight = `${cards.length * 100}vh`

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section ref={containerRef} className="relative" style={{ height: scrollHeight }}>
      {/* Sticky wrapper */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Main Card Container */}
        <div className="w-[95%] sm:w-[90%] max-w-7xl h-[85vh] md:h-[80vh] rounded-[2rem] border border-border bg-card relative overflow-hidden shadow-2xl transition-all duration-500">
          
          <div className="relative h-full w-full">
            {cards.map((card, index) => (
              <ContentCard
                key={index}
                card={card}
                index={index}
                total={cards.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Progress indicators */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border/50">
            {cards.map((_, index) => (
              <ProgressDot 
                key={index} 
                index={index} 
                total={cards.length} 
                scrollYProgress={scrollYProgress} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}