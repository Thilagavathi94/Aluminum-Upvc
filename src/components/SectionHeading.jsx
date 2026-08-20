import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, light = false, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`max-w-xl mb-12 ${alignClass}`}
    >
      {eyebrow && <p className={`eyebrow ${light ? 'text-gold-400' : ''}`}>{eyebrow}</p>}
      <h2 className={`font-display text-3xl font-bold mt-2 ${light ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-sm ${light ? 'text-white/60' : 'text-ink-600'}`}>{subtitle}</p>}
    </motion.div>
  )
}
