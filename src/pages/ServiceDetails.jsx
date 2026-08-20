import { useParams, Link, Navigate } from 'react-router-dom'
import { FiCheckCircle } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import PageHeader from '../components/PageHeader'
import ServiceCard from '../components/ServiceCard'

export default function ServiceDetails() {
  const { id } = useParams()
  const { services } = useData()
  const service = services.find((s) => s.id === id)

  if (!service) return <Navigate to="/services" replace />

  const related = services.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <div>
      <PageHeader title={service.name} crumb={`Services / ${service.name}`} />

      <section className="section-py bg-white">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <img src={service.image} alt={service.name} className="rounded-2xl card-shadow w-full h-[380px] object-cover" />
          <div>
            <p className="eyebrow">{service.tagline}</p>
            <h2 className="font-display text-3xl font-bold text-navy-900 mt-2 mb-4">Product Details</h2>
            <p className="text-ink-600 leading-relaxed mb-6">{service.description}</p>

            <h3 className="font-display font-semibold text-navy-900 mb-2">Features</h3>
            <ul className="grid sm:grid-cols-2 gap-2 mb-6">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-ink-700">
                  <FiCheckCircle className="text-gold-500 shrink-0" /> {f}
                </li>
              ))}
            </ul>

            <h3 className="font-display font-semibold text-navy-900 mb-2">Available Designs</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {service.designs.map((d) => (
                <span key={d} className="text-xs font-medium bg-mist-100 text-navy-800 px-3 py-1.5 rounded-full">{d}</span>
              ))}
            </div>

            <Link to="/contact#quote" className="btn-gold">Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="section-py bg-mist-50">
        <div className="container-page">
          <h3 className="font-display text-2xl font-bold text-navy-900 mb-6 text-center">Benefits</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.benefits.map((b) => (
              <div key={b} className="bg-white rounded-xl p-5 text-center card-shadow border border-ink-400/10 text-sm font-medium text-navy-900">
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-page">
            <h3 className="font-display text-2xl font-bold text-navy-900 mb-8 text-center">You May Also Like</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
