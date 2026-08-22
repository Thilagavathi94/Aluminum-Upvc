import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useData } from '../context/DataContext'
import PageHeader from '../components/PageHeader'
import Stats from '../components/Stats'
import TestimonialCarousel from '../components/TestimonialCarousel'
import SectionHeading from '../components/SectionHeading'

const highlights = ['Premium Quality Materials', 'Expert Installation', 'On-time Delivery', 'Customer Satisfaction']

export default function About() {
  const { content, team, testimonials } = useData()
  const published = testimonials.filter((t) => t.status === 'Published')

  return (
    <div>
      <PageHeader title="About Us" />

      <section className="section-py bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://picsum.photos/seed/about-main/900/700"
            alt="AluPro workshop"
            className="rounded-2xl card-shadow w-full h-[420px] object-cover"
          />
          <div>
            <p className="eyebrow">About {content.companyName}</p>
            <h2 className="font-display text-3xl font-bold text-navy-900 mt-2 mb-4">{content.aboutContent.split('.')[0]}.</h2>
            <p className="text-ink-600 leading-relaxed mb-6">{content.aboutContent}</p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-navy-900 font-medium">
                  <FiCheckCircle className="text-gold-500 shrink-0" /> {h}
                </li>
              ))}
            </ul>
            <Stats />
          </div>
        </div>
      </section>

      <section className="section-py bg-mist-50">
        <div className="container-page">
          <SectionHeading eyebrow="Meet the Team" title="The people behind every installation" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl overflow-hidden card-shadow border border-ink-400/10 text-center group hover:border-gold-400/50 transition-colors"
              >
                <div className="overflow-hidden">
                  <img src={m.photo} alt={m.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-navy-900">{m.name}</h3>
                  <p className="text-sm text-gold-600 font-medium">{m.designation}</p>
                  <p className="text-sm text-ink-600 mt-1">{m.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {published.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-page">
            <SectionHeading eyebrow="Testimonials" title="What our clients say" />
            <TestimonialCarousel testimonials={published} />
          </div>
        </section>
      )}

      <section className="bg-navy-900">
        <div className="container-page py-14 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Ready to Upgrade Your Space?</h2>
            <p className="mt-1 text-white/70">Get a free consultation and estimate today.</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${content.phone.replace(/[^0-9+]/g, '')}`} className="btn-outline">Call Now</a>
            <Link to="/contact#quote" className="btn-gold">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  )
}