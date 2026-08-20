import { motion } from 'framer-motion'
import { FiShield, FiTool, FiUsers, FiHeadphones, FiArrowRight, FiCheck, FiPlayCircle, FiPhoneCall } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import Stats from '../components/Stats'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import QuoteForm from '../components/QuoteForm'
import HeroCarousel from '../components/HeroCarousel'
import SectionHeading from '../components/SectionHeading'
import { whyChooseUs, processSteps } from '../data/aluminiumData'

const whyIcon = { shield: FiShield, ruler: FiTool, team: FiUsers, support: FiHeadphones }

export default function Home() {
  const { content, services, projects, testimonials, gallery } = useData()
  const published = testimonials.filter((t) => t.status === 'Published')
  const marqueeItems = [...services.slice(0, 8), ...services.slice(0, 8)]

  return (
    <div id="home">
      {/* HERO */}
      <section className="relative min-h-[86vh] bg-navy-950 text-white overflow-hidden flex items-center">
        <HeroCarousel images={content.heroImages} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,200,87,0.22),transparent_28rem),linear-gradient(110deg,#03111f_0%,rgba(3,17,31,0.92)_42%,rgba(3,17,31,0.38)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
        <div className="container-page relative py-16 md:py-20 grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
          <div>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow text-gold-400 mb-4">
            Aluminium &amp; UPVC Specialists
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold max-w-2xl leading-[1.08]"
          >
            <span className="metal-text">{content.heroTitle}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 max-w-lg mt-6 leading-relaxed"
          >
            {content.heroDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl mt-7"
          >
            {['Powder-coated profiles', 'Toughened safety glass', 'Site-ready installation'].map((item) => (
              <div key={item} className="glass-panel rounded-lg px-3 py-2 text-xs text-navy-950 font-semibold flex items-center gap-2">
                <FiCheck className="text-gold-600 shrink-0" /> {item}
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-9"
          >
            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a href="#quote" className="btn-gold">Get a Quote</a>
            </motion.span>
            <motion.span whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a href="#projects" className="btn-outline">View Our Work</a>
            </motion.span>
          </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-5 rounded-2xl bg-gold-400/20 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl image-sheen">
                <video
                  src={content.showcaseVideo || 'https://videos.pexels.com/video-files/7578547/7578547-uhd_2560_1440_30fps.mp4'}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={content.heroImages?.[0]}
                  className="h-[430px] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-navy-950/90 to-transparent">
                  <p className="flex items-center gap-2 text-sm font-semibold"><FiPlayCircle className="text-gold-400" /> Live finish preview</p>
                  <p className="text-xs text-white/65 mt-1">Auto-playing HD motion for a premium facade feel.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-py bg-white">
        <div className="container-page">
          <Stats />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-py bg-mist-50 overflow-hidden">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="eyebrow">About AluPro</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mt-2">Premium aluminium design, precise fabrication, clean installation.</h2>
            <p className="text-ink-600 mt-5 leading-relaxed">{content.aboutContent}</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-7">
              {['Marine-grade finishes', 'Custom site measurements', 'Commercial load planning', 'After-sales support'].map((item) => (
                <div key={item} className="animated-card rounded-xl bg-white border border-ink-400/10 p-4 flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-gold-500 text-navy-950 flex items-center justify-center"><FiCheck /></span>
                  <span className="text-sm font-semibold text-navy-900">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {content.heroImages.slice(0, 4).map((image, i) => (
              <div key={image} className={`image-sheen rounded-xl overflow-hidden shadow-xl ${i % 2 ? 'mt-8' : ''}`}>
                <img src={image} alt="Aluminium project detail" className="h-48 md:h-64 w-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-py bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Our Services" title="High-quality Aluminium & UPVC solutions" subtitle="Tailored to your needs, from single windows to full commercial facades." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {services.slice(0, 10).map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>
        </div>
        <div className="mt-8 overflow-hidden border-y border-ink-400/10 bg-navy-950 py-4">
          <div className="animate-marquee flex w-max gap-4">
            {marqueeItems.map((s, i) => (
              <span key={`${s.id}-${i}`} className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white/80">
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="section-py bg-mist-50">
        <div className="container-page">
          <SectionHeading eyebrow="Portfolio" title="Featured Projects" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-py bg-navy-900 text-white">
        <div className="container-page">
          <SectionHeading eyebrow="Why Choose Us" title="Built on quality, backed by service" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {whyChooseUs.map((w, i) => {
              const Icon = whyIcon[w.icon]
              return (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                className="animated-card bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 hover:border-gold-400/40 transition-colors group"
                >
                  <motion.div whileHover={{ rotate: 12, scale: 1.15 }} transition={{ type: 'spring', stiffness: 300 }} className="inline-block">
                    <Icon className="text-3xl text-gold-400 mx-auto mb-3" />
                  </motion.div>
                  <h3 className="font-semibold">{w.title}</h3>
                  <p className="text-xs text-white/60 mt-1.5">{w.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="section-py bg-mist-50">
        <div className="container-page">
          <SectionHeading eyebrow="Our Process" title="From consultation to installation" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="animated-card bg-white rounded-xl p-5 card-shadow border border-ink-400/10 hover:border-gold-400/50 transition-colors"
              >
                <span className="font-display text-2xl font-bold text-gold-500">0{s.step}</span>
                <h3 className="font-semibold text-navy-900 mt-2">{s.title}</h3>
                <p className="text-xs text-ink-600 mt-1.5">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {published.length > 0 && (
        <section className="section-py bg-white">
          <div className="container-page">
            <SectionHeading eyebrow="Testimonials" title="What our clients say" />
            <TestimonialCarousel testimonials={published} />
          </div>
        </section>
      )}

      {/* GALLERY */}
      <section id="gallery" className="section-py bg-navy-950 text-white overflow-hidden">
        <div className="container-page">
          <SectionHeading eyebrow="Gallery" title="Project Gallery" light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.slice(0, 8).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`group relative image-sheen rounded-xl overflow-hidden border border-white/10 ${i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <img src={item.image} alt={item.title} className="h-full min-h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-navy-950/90 to-transparent">
                  <p className="font-semibold text-sm">{item.title}</p>
                  <p className="text-xs text-white/60">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gold-500"
      >
        <div className="container-page py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-navy-950">
          <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Have a Project in Mind?</h2>
            <p className="mt-1 text-navy-950/80">Let's build something together.</p>
          </motion.div>
          <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
            <a href="#quote" className="bg-navy-900 text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-800 hover:shadow-xl transition-all inline-flex items-center gap-2">
              Get a Quote <FiArrowRight />
            </a>
          </motion.span>
        </div>
      </motion.section>

      {/* CONTACT PREVIEW */}
      <section id="quote" className="section-py bg-mist-50">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="eyebrow">Contact Us</p>
              <h2 className="font-display text-3xl font-bold text-navy-900 mt-2 mb-4">Ready to upgrade your space?</h2>
            </motion.div>
            <p className="text-ink-600 mb-6">Get a free consultation and estimate today. Our team responds within 24 hours.</p>
            <div className="flex gap-3">
              <a href={`tel:${content.phone.replace(/[^0-9+]/g, '')}`} className="btn-primary"><FiPhoneCall /> Call Now</a>
              <a href="#quote" className="btn-gold">Get a Quote</a>
            </div>
          </div>
          <QuoteForm compact />
        </div>
      </section>
    </div>
  )
}
