import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/services/${service.id}`}
        className="group animated-card block bg-white rounded-xl border border-ink-400/15 card-shadow hover:border-gold-400/60 h-full"
      >
        <div className="relative h-36 overflow-hidden image-sheen">
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy-950/70 to-transparent" />
        </div>
        <div className="p-5">
          <h3 className="relative z-10 font-display font-semibold text-navy-900 mb-1.5">{service.name}</h3>
          <p className="relative z-10 text-sm text-ink-600 leading-relaxed">{service.tagline}</p>
        </div>
      </Link>
    </motion.div>
  )
}
