import { FiStar } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="bg-white rounded-xl p-6 card-shadow border border-ink-400/10 h-full flex flex-col"
    >
      <div className="flex gap-1 text-gold-500 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <FiStar key={i} className={i < testimonial.rating ? 'fill-gold-500' : ''} />
        ))}
      </div>
      <p className="text-sm text-ink-600 leading-relaxed flex-1">&ldquo;{testimonial.review}&rdquo;</p>
      <div className="flex items-center gap-3 mt-5">
        <img src={testimonial.photo} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-navy-900 text-sm">{testimonial.name}</p>
          <p className="text-sm text-ink-600">{testimonial.project}</p>
        </div>
      </div>
    </motion.div>
  )
}