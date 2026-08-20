import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  MdWindow, MdSensorDoor, MdApartment, MdViewAgenda, MdOutlineViewCarousel,
  MdOutlineVilla, MdOutlineFence, MdWbSunny, MdOutlineDoorSliding,
} from 'react-icons/md'

const iconMap = {
  window: MdWindow,
  door: MdSensorDoor,
  facade: MdApartment,
  partition: MdViewAgenda,
  sliding: MdOutlineDoorSliding,
  curtain: MdOutlineVilla,
  railing: MdOutlineFence,
  skylight: MdWbSunny,
  default: MdOutlineViewCarousel,
}

export default function ServiceCard({ service, index = 0 }) {
  const Icon = iconMap[service.icon] || iconMap.default
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        to={`/services/${service.id}`}
        className="group animated-card block bg-white rounded-xl border border-ink-400/15 p-6 card-shadow hover:border-gold-400/60 h-full"
      >
        <div className="relative z-10 w-12 h-12 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center text-2xl mb-4 group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
          <Icon />
        </div>
        <h3 className="relative z-10 font-display font-semibold text-navy-900 mb-1.5">{service.name}</h3>
        <p className="relative z-10 text-sm text-ink-600 leading-relaxed">{service.tagline}</p>
      </Link>
    </motion.div>
  )
}
