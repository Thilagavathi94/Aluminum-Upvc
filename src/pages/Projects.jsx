import { useState, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useData } from '../context/DataContext'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'

const categories = ['All', 'Residential', 'Commercial', 'Office', 'Others']

export default function Projects() {
  const { projects } = useData()
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((p) => p.category === active)
  }, [projects, active])

  return (
    <div>
      <PageHeader title="Our Projects" />
      <section className="section-py bg-white">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((c) => (
              <motion.button
                key={c}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === c ? 'bg-navy-900 text-white' : 'bg-mist-100 text-navy-800 hover:bg-mist-100/70'
                }`}
              >
                {c}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
              {filtered.length === 0 && (
                <p className="text-center col-span-full text-ink-600 py-12">No projects found in this category yet.</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
