import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function TestimonialCarousel({ testimonials, interval = 4500 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [testimonials.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length), [testimonials.length])

  useEffect(() => {
    if (paused || testimonials.length < 2) return
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [paused, next, interval, testimonials.length])

  if (testimonials.length === 0) return null
  const t = testimonials[index]

  return (
    <div
      className="relative max-w-2xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-2xl bg-white card-shadow border border-ink-400/10 p-8 sm:p-10 min-h-[260px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="w-full text-center"
          >
            <div className="flex justify-center gap-1 text-gold-500 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <FiStar key={i} className={i < t.rating ? 'fill-gold-500' : ''} />
              ))}
            </div>
            <p className="text-ink-700 leading-relaxed text-lg italic">&ldquo;{t.review}&rdquo;</p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gold-400/40" />
              <div className="text-left">
                <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                <p className="text-xs text-ink-600">{t.project}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {testimonials.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 -translate-x-1/2 sm:translate-x-0 w-10 h-10 rounded-full bg-white card-shadow border border-ink-400/10 flex items-center justify-center text-navy-800 hover:bg-navy-900 hover:text-white transition"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 translate-x-1/2 sm:translate-x-0 w-10 h-10 rounded-full bg-white card-shadow border border-ink-400/10 flex items-center justify-center text-navy-800 hover:bg-navy-900 hover:text-white transition"
          >
            <FiChevronRight />
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-gold-500' : 'w-1.5 bg-ink-400/30 hover:bg-ink-400/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
