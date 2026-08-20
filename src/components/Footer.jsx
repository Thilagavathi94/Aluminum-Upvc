import { FiFacebook, FiInstagram, FiYoutube, FiLinkedin, FiPhone, FiMail, FiMapPin, FiArrowRight, FiChevronRight } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import BrandLogo from './BrandLogo'

export default function Footer() {
  const { content } = useData()
  const year = new Date().getFullYear()
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.address)}`
  const quickLinks = [
    ['#about', 'About Us'],
    ['#services', 'Services'],
    ['#projects', 'Projects'],
    ['#gallery', 'Gallery'],
    ['#quote', 'Contact'],
  ]

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/80">
      <div className="absolute inset-0 opacity-25">
        <svg viewBox="0 0 1200 320" className="absolute bottom-0 left-0 w-full h-full" aria-hidden="true">
          <path d="M0 220 C220 130 360 280 560 180 S880 110 1200 210 V320 H0 Z" fill="#14627e" />
          <path d="M0 250 C250 160 390 300 620 210 S930 150 1200 245 V320 H0 Z" fill="#f2a81d" opacity=".45" />
        </svg>
      </div>
      <div className="container-page relative py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BrandLogo />
          </div>
          <p className="text-sm leading-relaxed text-white/60">{content.heroDescription}</p>
          <a href="#quote" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300 transition">
            Start a project <FiArrowRight />
          </a>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="group inline-flex items-center gap-2 hover:text-gold-400 transition-colors">
                  <FiChevronRight className="text-gold-400 group-hover:translate-x-1 transition-transform" /> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Aluminium Windows &amp; Doors</li>
            <li>UPVC Windows &amp; Doors</li>
            <li>Glass Facades &amp; Partitions</li>
            <li>Sliding Systems</li>
            <li>Skylights &amp; Railings</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li><a href={`tel:${content.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 hover:text-gold-400"><FiPhone className="text-gold-400" /> {content.phone}</a></li>
            <li><a href={`mailto:${content.email}`} className="flex items-center gap-2 hover:text-gold-400"><FiMail className="text-gold-400" /> {content.email}</a></li>
            <li>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 hover:text-gold-400 transition-colors">
                <FiMapPin className="mt-0.5 text-gold-400 shrink-0" /> {content.address}
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-5">
            <a href={content.social.facebook} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 hover:-translate-y-1 transition-all"><FiFacebook /></a>
            <a href={content.social.instagram} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 hover:-translate-y-1 transition-all"><FiInstagram /></a>
            <a href={content.social.youtube} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 hover:-translate-y-1 transition-all"><FiYoutube /></a>
            <a href={content.social.linkedin} className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-950 hover:-translate-y-1 transition-all"><FiLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {year} {content.companyName} Solutions. All rights reserved.
      </div>
    </footer>
  )
}
