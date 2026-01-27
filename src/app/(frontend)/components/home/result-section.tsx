'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { HomePage, Media } from '@/payload/payload-types'

type ResultItem = NonNullable<HomePage['resultsHighlight']>[number]

interface ResultsProps {
  results: ResultItem[]
}

export function ResultsSection({ results = [] }: ResultsProps) {
  if (!results.length) return null

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16 md:gap-24">
          {results.map((result, idx) => {
            const image = result.image as Media | undefined
            const imageOnLeft = idx % 2 === 1

            return (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              >
                {/* IMAGE */}
                <div
                  className={[
                    'relative w-full',
                    imageOnLeft ? 'lg:order-1' : 'lg:order-2',
                  ].join(' ')}
                >
                  <ImageCard image={image} title={result.title || 'Result Image'} />
                </div>

                {/* TABLE */}
                <div className={imageOnLeft ? 'lg:order-2' : 'lg:order-1'}>
                  <ResultTableCard result={result} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* RESULT TABLE CARD */
/* ------------------------------------------------------------------ */

function ResultTableCard({ result }: { result: ResultItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-8
                 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1e3a5a] mb-6 uppercase">
        {result.title}
      </h2>

      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[520px] text-left border-collapse">
          <thead>
            <tr className="bg-white">
              <th className="p-3 sm:p-4 text-[10px] sm:text-xs font-bold uppercase text-slate-400 tracking-widest">
                Academic Year
              </th>
              <th className="p-3 sm:p-4 text-[10px] sm:text-xs font-bold uppercase text-slate-400 tracking-widest text-right">
                School Result
              </th>
              <th className="p-3 sm:p-4 text-[10px] sm:text-xs font-bold uppercase text-slate-400 tracking-widest text-right">
                Board Result
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {result.yearlyData?.map((data: any, i: number) => (
              <tr
                key={i}
                className="bg-white hover:bg-slate-50 transition-colors"
              >
                <td className="p-3 sm:p-4 text-sm sm:text-base font-semibold text-[#1e3a5a]">
                  {data.academicYear}
                </td>
                <td className="p-3 sm:p-4 text-lg sm:text-xl md:text-2xl font-bold text-[#ffc107] text-right">
                  {data.schoolResult}
                </td>
                <td className="p-3 sm:p-4 text-lg sm:text-xl md:text-2xl font-bold text-[#ffc107] text-right">
                  {data.boardResult}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 sm:mt-6 text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-widest">
        Official G.S.E.B Board Standards
      </p>
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* IMAGE CARD */
/* ------------------------------------------------------------------ */

function ImageCard({ image, title }: { image?: Media; title: string }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl sm:rounded-[2.5rem]
                 h-[240px] sm:h-[320px] md:h-[420px] lg:h-[520px]
                 shadow-2xl"
    >
      {image?.url ? (
        <Image
          src={image.url}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 50vw"
          priority={false}
        />
      ) : (
        <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center text-slate-400">
          <span className="text-3xl sm:text-4xl mb-2">🎓</span>
          <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest">
            No Image Provided
          </p>
        </div>
      )}
    </div>
  )
}
