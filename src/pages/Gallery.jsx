import { useState, useMemo, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import PageHeader from '../components/PageHeader'

const categories = ['All', 'Residential', 'Commercial', 'Office', 'Other']

export default function Gallery() {
  const { gallery } = useData()
  const [active, setActive] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () => (active === 'All' ? gallery : gallery.filter((g) => g.category === active)),
    [gallery, active]
  )

  const close = useCallback(() => setLightboxIndex(null), [])
  const next = useCallback(() => setLightboxIndex((i) => (i + 1) % filtered.length), [filtered.length])
  const prev = useCallback(() => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, close, next, prev])

  return (
    <div>
      <PageHeader title="Gallery" />
      <section className="section-py bg-white">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((c) => (
              <motion.button
                key={c}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === c ? 'bg-navy-900 text-white' : 'bg-mist-100 text-navy-800 hover:bg-mist-100/70'
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {filtered.map((g, i) => (
              <motion.button
                key={g.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                onClick={() => setLightboxIndex(i)}
                className="w-full block rounded-xl overflow-hidden break-inside-avoid card-shadow group relative"
              >
                <img src={g.image} alt={g.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/40 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <p className="text-white text-sm font-semibold text-left">{g.title}</p>
                </div>
              </motion.button>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-ink-600 py-12">No images in this category yet.</p>}
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy-950/95 flex items-center justify-center p-4"
            onClick={close}
          >
            <button onClick={close} className="absolute top-5 right-5 text-white text-3xl hover:text-gold-400" aria-label="Close">
              <FiX />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-3 md:left-8 text-white text-3xl hover:text-gold-400"
              aria-label="Previous"
            >
              <FiChevronLeft />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={filtered[lightboxIndex].image} alt={filtered[lightboxIndex].title} className="w-full max-h-[75vh] object-contain rounded-lg" />
              <p className="text-white text-center mt-4 font-medium">{filtered[lightboxIndex].title}</p>
              <p className="text-white/50 text-center text-sm">{filtered[lightboxIndex].description}</p>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-3 md:right-8 text-white text-3xl hover:text-gold-400"
              aria-label="Next"
            >
              <FiChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
