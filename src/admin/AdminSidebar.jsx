import { NavLink, useNavigate } from 'react-router-dom'
import {
  FiGrid, FiFolder, FiTool, FiInbox, FiImage, FiStar, FiUsers, FiFileText, FiSettings, FiLogOut,
} from 'react-icons/fi'
import { useData } from '../context/DataContext'
import BrandLogo from '../components/BrandLogo'

const items = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: FiGrid },
  { to: '/admin/projects', label: 'Projects', icon: FiFolder },
  { to: '/admin/services', label: 'Services', icon: FiTool },
  { to: '/admin/enquiries', label: 'Enquiries', icon: FiInbox },
  { to: '/admin/gallery', label: 'Gallery', icon: FiImage },
  { to: '/admin/testimonials', label: 'Testimonials', icon: FiStar },
  { to: '/admin/team', label: 'Team', icon: FiUsers },
  { to: '/admin/content', label: 'Website Content', icon: FiFileText },
  { to: '/admin/settings', label: 'Settings', icon: FiSettings },
]

export default function AdminSidebar() {
  const { logout, content } = useData()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  return (
    <aside className="w-64 shrink-0 bg-[linear-gradient(180deg,#03111f,#082033_52%,#104866)] text-white flex flex-col h-screen sticky top-0 shadow-2xl">
      <div className="flex items-center gap-2 px-5 h-16 border-b border-white/10">
        <BrandLogo compact />
        <div>
          <p className="font-display font-bold leading-none">{content.logoText}</p>
          <p className="text-[10px] text-white/50 tracking-widest">ADMIN PANEL</p>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20' : 'text-white/75 hover:bg-white/10 hover:translate-x-1'
              }`
            }
          >
            <it.icon className="text-lg" /> {it.label}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-3 py-2.5 mx-3 mb-4 rounded-lg text-sm font-medium text-white/75 hover:bg-white/10 transition"
      >
        <FiLogOut className="text-lg" /> Logout
      </button>
    </aside>
  )
}
