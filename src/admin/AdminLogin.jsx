import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useData } from '../context/DataContext'
import BrandLogo from '../components/BrandLogo'

export default function AdminLogin() {
  const { login, isAdmin } = useData()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  if (isAdmin) return <Navigate to="/admin/dashboard" replace />

  const handleSubmit = (e) => {
    e.preventDefault()
    const ok = login(email.trim(), password)
    if (ok) navigate('/admin/dashboard')
    else setError('Invalid email or password. Try admin@alupro.com / alupro123')
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#03111f,#104866)] flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,200,87,0.28),transparent_26rem),radial-gradient(circle_at_78%_78%,rgba(29,132,166,0.32),transparent_24rem)]" />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-sm glass-panel rounded-2xl p-8"
      >
        <div className="text-center mb-7">
          <div className="flex justify-center mb-3">
            <BrandLogo compact />
          </div>
          <h1 className="font-display font-bold text-xl text-navy-900">AluPro</h1>
          <p className="text-xs text-ink-600 tracking-widest">ADMIN PANEL</p>
        </div>
        <h2 className="font-display font-semibold text-lg text-navy-900 mb-1">Welcome Back!</h2>
        <p className="text-sm text-ink-600 mb-6">Please login to your account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-ink-600">Email Address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="mt-1 w-full border border-ink-400/30 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
              placeholder="admin@alupro.com"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-ink-600">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="mt-1 w-full border border-ink-400/30 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-xs text-red-600">{error}</p>}
          <label className="flex items-center gap-2 text-sm text-ink-600">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} /> Remember me
          </label>
          <button type="submit" className="btn-primary w-full">Login</button>
        </form>
        <p className="text-center text-xs text-ink-600 mt-5">
          Demo login: <span className="font-medium text-navy-900">admin@alupro.com</span> / <span className="font-medium text-navy-900">alupro123</span>
        </p>
      </motion.div>
    </div>
  )
}
