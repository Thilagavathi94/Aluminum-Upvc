import { motion } from 'framer-motion'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useData } from '../context/DataContext'

export default function FloatingActions() {
  const { content } = useData()
  const phoneDigits = content.phone.replace(/[^0-9+]/g, '')
  const waDigits = content.whatsapp.replace(/[^0-9]/g, '')

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/${waDigits}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="animate-pulse-ring animate-blink-breathe w-[56px] h-[56px] rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl shadow-lg shadow-green-600/30"
      >
        <FaWhatsapp />
      </motion.a>
      <motion.a
        href={`tel:${phoneDigits}`}
        aria-label="Call us"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        className="animate-blink-breathe w-[56px] h-[56px] rounded-full bg-gradient-to-br from-navy-600 to-gold-500 text-white flex items-center justify-center text-xl shadow-lg shadow-navy-900/25"
      >
        <FiPhone />
      </motion.a>
    </div>
  )
}
