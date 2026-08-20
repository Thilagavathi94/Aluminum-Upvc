import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'

export default function ProjectDetails() {
  const { id } = useParams()
  const { projects } = useData()
  const project = projects.find((p) => p.id === id)
  const [mainImage, setMainImage] = useState(project?.image)

  if (!project) return <Navigate to="/projects" replace />

  const similar = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3)
  const thumbs = [project.image, ...project.gallery]

  const info = [
    ['Category', project.category],
    ['Location', project.location],
    ['Year', project.year],
    ['Products', project.products],
    ['Client', project.client],
    ['Area', project.area],
  ]

  return (
    <div>
      <PageHeader title={project.name} crumb={`Projects / ${project.name}`} />

      <section className="section-py bg-white">
        <div className="container-page grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <img src={mainImage} alt={project.name} className="rounded-2xl card-shadow w-full h-[420px] object-cover" />
            <div className="grid grid-cols-4 gap-3 mt-3">
              {thumbs.map((img, i) => (
                <button key={i} onClick={() => setMainImage(img)} className={`rounded-lg overflow-hidden border-2 ${mainImage === img ? 'border-gold-500' : 'border-transparent'}`}>
                  <img src={img} alt="" className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>

            <h3 className="font-display text-2xl font-bold text-navy-900 mt-10 mb-3">Project Overview</h3>
            <p className="text-ink-600 leading-relaxed">{project.description}</p>

            <h3 className="font-display text-2xl font-bold text-navy-900 mt-10 mb-4">Project Gallery</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {project.gallery.map((g, i) => (
                <img key={i} src={g} alt="" className="rounded-lg w-full h-32 object-cover" />
              ))}
            </div>
          </div>

          <aside>
            <div className="bg-mist-50 rounded-xl p-6 border border-ink-400/10 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-semibold text-navy-900">Project Info</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">{project.status}</span>
              </div>
              <dl className="space-y-3">
                {info.map(([label, value]) => (
                  <div key={label} className="flex justify-between text-sm border-b border-ink-400/10 pb-2">
                    <dt className="text-ink-600">{label}</dt>
                    <dd className="font-medium text-navy-900 text-right max-w-[60%]">{value}</dd>
                  </div>
                ))}
              </dl>
              <Link to="/contact#quote" className="btn-gold w-full mt-6">Get Similar Quote</Link>
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-navy-700 font-medium mt-4 hover:underline">
                <FiArrowLeft /> Back to Projects
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="section-py bg-mist-50">
          <div className="container-page">
            <h3 className="font-display text-2xl font-bold text-navy-900 mb-8 text-center">Similar Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
