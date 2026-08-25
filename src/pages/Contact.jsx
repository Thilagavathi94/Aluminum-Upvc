import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useData } from '../context/DataContext'
import PageHeader from '../components/PageHeader'
import QuoteForm from '../components/QuoteForm'

export default function Contact() {
  const { content } = useData()
  const phoneDigits = content.phone.replace(/[^0-9+]/g, '')
  const waDigits = content.whatsapp.replace(/[^0-9]/g, '')
  const mapsQuery = encodeURIComponent(content.address)

  const cards = [
    { icon: FiPhone, label: 'Call Us', value: content.phone, href: `tel:${phoneDigits}` },
    { icon: FaWhatsapp, label: 'WhatsApp', value: content.whatsapp, href: `https://wa.me/${waDigits}` },
    { icon: FiMail, label: 'Email Us', value: content.email, href: `mailto:${content.email}` },
    { icon: FiMapPin, label: 'Office Address', value: content.address, href: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}` },
  ]

  return (
    <div>
      <PageHeader title="Contact Us" />

      <section id="quote" className="section-py bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="eyebrow">Get in Touch</p>
            <h2 className="font-display text-3xl font-bold text-navy-900 mt-2 mb-2">We'd love to hear from you</h2>
            <p className="text-ink-600 mb-8">Reach out directly, or send us your project details using the form.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {cards.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.label === 'Office Address' ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex items-start gap-3 bg-mist-50 rounded-xl p-4 border border-ink-400/10 hover:border-gold-400/50 hover:shadow-md transition-all"
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="w-10 h-10 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center text-lg shrink-0">
                    <c.icon />
                  </motion.div>
                  <div>
                    <p className="text-xs text-ink-600">{c.label}</p>
                    <p className="text-sm font-semibold text-navy-900 break-words">{c.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="rounded-xl overflow-hidden border border-ink-400/10 h-64">
              <iframe
                title={`${content.companyName} location`}
                width="100%"
                height="100%"
                loading="lazy"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              />
            </div>

            <div className="mt-6">
              <p className="font-display font-semibold text-navy-900 mb-3">Connect With Us</p>
              <div className="flex items-center gap-3">
                <motion.a whileHover={{ scale: 1.15, rotate: -6 }} href={content.social.facebook} className="w-10 h-10 rounded-full bg-mist-100 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors"><FiFacebook /></motion.a>
                <motion.a whileHover={{ scale: 1.15, rotate: 6 }} href={content.social.instagram} className="w-10 h-10 rounded-full bg-mist-100 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors"><FiInstagram /></motion.a>
                <motion.a whileHover={{ scale: 1.15, rotate: -6 }} href={content.social.youtube} className="w-10 h-10 rounded-full bg-mist-100 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors"><FiYoutube /></motion.a>
                <motion.a whileHover={{ scale: 1.15, rotate: 6 }} href={content.social.linkedin} className="w-10 h-10 rounded-full bg-mist-100 flex items-center justify-center hover:bg-gold-500 hover:text-white transition-colors"><FiLinkedin /></motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <QuoteForm />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
