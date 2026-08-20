import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useData } from '../context/DataContext'
import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'

export default function Services() {
  const { services } = useData()
  const published = services.filter((s) => s.status !== 'Hidden')

  return (
    <div>
      <PageHeader title="Our Services" />
      <section className="section-py bg-white">
        <div className="container-page">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {published.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-navy-900"
      >
        <div className="container-page py-14 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Have a Project in Mind?</h2>
            <p className="mt-1 text-white/70">Let's build something together.</p>
          </div>
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <Link to="/contact#quote" className="btn-gold">Get a Quote</Link>
          </motion.span>
        </div>
      </motion.section>
    </div>
  )
}
