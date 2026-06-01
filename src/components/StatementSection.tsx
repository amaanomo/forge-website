'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { DoodleStar } from './DoodleAccent'

const words = ['builders', 'developers', 'designers', 'scientists', 'engineers', 'founders', 'leaders']

// depth controls how much each image shifts on hover
const photos = [
  { src: '/myImages/f25_applepicking.jpeg', alt: 'Photo 1', depth: 1.2, rotate: -8,  pos: 'top-[4%]    -left-4'    },
  { src: '/myImages/2.jpeg', alt: 'Photo 2', depth: 0.7, rotate:  4,  pos: 'top-[8%]    -right-4'   },
  { src: '/myImages/3.jpeg', alt: 'Photo 3', depth: 1.8, rotate: -5,  pos: 'bottom-[4%] -left-4'    },
  { src: '/myImages/4.jpeg', alt: 'Photo 4', depth: 1.0, rotate:  6,  pos: 'bottom-[6%] -right-4'   },
  { src: '/myImages/5.jpeg', alt: 'Photo 5', depth: 0.5, rotate: 10,  pos: '-top-14 left-[27%]'     },
  { src: '/myImages/6.jpeg', alt: 'Photo 6', depth: 1.4, rotate: -4,  pos: '-bottom-14 right-[25%]' },
  { src: '/myImages/7.jpeg', alt: 'Photo 7', depth: 0.9, rotate:  7,  pos: '-top-[6%] right-[28%]'  },
  { src: '/myImages/8.jpeg', alt: 'Photo 8', depth: 1.5, rotate: -7,  pos: '-bottom-[6%] left-[28%]' },
]

const StatementSection = () => {
  const [wordIndex, setWordIndex] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setWordIndex(i => (i + 1) % words.length), 2000)
    return () => clearTimeout(t)
  }, [wordIndex])

  const onMove = (e: React.MouseEvent) => {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({
      x: (e.clientX - rect.left) / rect.width  - 0.5,
      y: (e.clientY - rect.top)  / rect.height - 0.5,
    })
  }

  return (
    <section className="w-full bg-[#f9f6f2] pt-56 pb-36 px-6">
      {/* Positioning context — wide enough for overflow images */}
      <div
        ref={wrapRef}
        className="relative max-w-4xl mx-auto"
        onMouseMove={onMove}
        onMouseLeave={() => setMouse({ x: 0, y: 0 })}
      >
        {/* Scattered photos */}
        {photos.map((p) => (
          <motion.div
            key={p.src}
            className={`absolute hidden md:block pointer-events-none ${p.pos}`}
            animate={{
              x: mouse.x * p.depth * 40,
              y: mouse.y * p.depth * 40,
            }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, mass: 0.4 }}
            style={{ rotate: p.rotate, zIndex: 0 }}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={144}
              height={112}
              className="w-36 h-28 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        ))}

        {/* Text — sits above photos */}
        <div className="relative z-10 max-w-2xl mx-auto text-center py-16">
          <hr className="border-none border-t border-[#111111]/15 mb-14" />
          <div className="relative inline-block">
            <p
              className="font-serif italic text-[#111111] leading-tight"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              &ldquo;A collective of ambitious student{' '}
              <span className="relative inline-flex overflow-hidden align-bottom" style={{ minWidth: '5ch' }}>
                <span className="invisible" aria-hidden>{words[wordIndex]}</span>
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    className="absolute left-0"
                    initial={{ opacity: 0, y: 40 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      wordIndex === i
                        ? { y: 0, opacity: 1 }
                        : { y: wordIndex > i ? -40 : 40, opacity: 0 }
                    }
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              .&rdquo;
            </p>
            <DoodleStar
              size={28}
              opacity={0.35}
              className="absolute -top-4 -right-8 md:-right-10"
            />
          </div>
          <hr className="border-none border-t border-[#111111]/15 mt-14" />
        </div>
      </div>
    </section>
  )
}

export default StatementSection
