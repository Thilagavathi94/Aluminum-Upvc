import { motion } from 'framer-motion'
import { useData } from '../context/DataContext'
import CountUp from './CountUp'

export default function Stats() {
  const { content } = useData()
  const items = [
    { value: content.stats.years, label: 'Years Experience' },
    { value: content.stats.projects, label: 'Projects Done' },
    { value: content.stats.clients, label: 'Happy Clients' },
    { value: content.stats.quality, label: 'Quality Assurance' },
  ]
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          whileHover={{ y: -4 }}
          className="text-center"
        >
          <p className="font-display text-3xl md:text-4xl font-bold text-navy-900">
            <CountUp value={it.value} />
          </p>
          <p className="text-sm text-ink-600 mt-1">{it.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
