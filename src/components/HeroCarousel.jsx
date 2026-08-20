import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function HeroCarousel({ images = [], interval = 5000 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  if (images.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.58 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <motion.img
            src={images[index]}
            alt=""
            initial={{ scale: 1 }}
            animate={{ scale: 1.1, x: index % 2 ? -18 : 18 }}
            transition={{ duration: interval / 1000 + 1.4, ease: 'linear' }}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {/* slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-7 bg-gold-400' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
