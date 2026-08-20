import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PageHeader({ title, crumb }) {
  return (
    <div className="bg-navy-900 text-white">
      <div className="container-page py-12">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-display text-3xl md:text-4xl font-bold"
        >
          {title}
        </motion.h1>
        <p className="text-white/60 text-sm mt-2">
          <Link to="/" className="hover:text-gold-400">Home</Link> / {crumb || title}
        </p>
      </div>
    </div>
  )
}
