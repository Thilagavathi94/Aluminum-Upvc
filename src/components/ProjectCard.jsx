import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="animated-card bg-white rounded-xl overflow-hidden border border-ink-400/15 card-shadow group"
    >
      <div className="relative h-56 overflow-hidden image-sheen">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <span className="absolute top-3 left-3 bg-navy-900/85 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>
      <div className="relative z-10 p-5">
        <h3 className="font-display font-semibold text-navy-900">{project.name}</h3>
        <p className="text-sm text-ink-600 mt-1">{project.location}</p>
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 mt-4 hover:gap-2.5 transition-all"
        >
          View Project <FiArrowRight />
        </Link>
      </div>
    </motion.div>
  )
}
