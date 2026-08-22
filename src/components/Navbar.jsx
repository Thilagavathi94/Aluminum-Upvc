import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import BrandLogo from './BrandLogo'

const links = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'services', label: 'Services' },
  { to: 'offers', label: 'Offers' },
  { to: 'projects', label: 'Projects' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'quote', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToSection = (id) => {
    setOpen(false)
    navigate('/')
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
  }

  const linkClass = 'text-sm font-medium text-white/85 hover:text-gold-400 transition-colors'

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'bg-navy-900/97 backdrop-blur' : 'bg-navy-900'
      } border-b border-white/10`}
    >
      <div className="container-page flex items-center justify-between h-[60px] py-2">
        <Link to="/" onClick={() => goToSection('home')} className="flex items-center gap-2 group">
          <BrandLogo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.to} onClick={() => goToSection(l.to)} className={linkClass}>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button onClick={() => goToSection('quote')} className="btn-gold !py-2.5 !px-5 text-sm">
            Get a Quote
          </button>
        </div>

        <button className="md:hidden text-white text-2xl" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-900 border-t border-white/10 px-5 pb-5 pt-2 flex flex-col gap-4">
          {links.map((l) => (
            <button key={l.to} className={`${linkClass} text-left`} onClick={() => goToSection(l.to)}>
              {l.label}
            </button>
          ))}
          <button
            onClick={() => {
              goToSection('quote')
            }}
            className="btn-gold !py-2.5 text-sm w-full"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  )
}
