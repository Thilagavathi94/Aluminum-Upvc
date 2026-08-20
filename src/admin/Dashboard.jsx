import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { FiFolder, FiInbox, FiClock, FiImage } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import AdminTopbar from './AdminTopbar'

const statusColor = {
  New: 'bg-blue-100 text-blue-700',
  Contacted: 'bg-yellow-100 text-yellow-700',
  'In Progress': 'bg-purple-100 text-purple-700',
  Quoted: 'bg-orange-100 text-orange-700',
  Completed: 'bg-green-100 text-green-700',
  Closed: 'bg-gray-200 text-gray-600',
}

export default function Dashboard() {
  const { projects, enquiries, gallery } = useData()

  const pending = enquiries.filter((e) => !['Completed', 'Closed'].includes(e.status)).length

  const chartData = useMemo(() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const counts = Array(12).fill(0)
    enquiries.forEach((e) => {
      const m = new Date(e.date).getMonth()
      if (!Number.isNaN(m)) counts[m] += 1
    })
    return months.map((m, i) => ({ month: m, enquiries: counts[i] }))
  }, [enquiries])

  const cards = [
    { label: 'Total Projects', value: projects.length, icon: FiFolder, to: '/admin/projects' },
    { label: 'Total Enquiries', value: enquiries.length, icon: FiInbox, to: '/admin/enquiries' },
    { label: 'Pending Enquiries', value: pending, icon: FiClock, to: '/admin/enquiries' },
    { label: 'Gallery Images', value: gallery.length, icon: FiImage, to: '/admin/gallery' },
  ]

  const recent = enquiries.slice(0, 6)

  return (
    <div>
      <AdminTopbar title="Dashboard" />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => (
            <Link key={c.label} to={c.to} className="animated-card bg-white rounded-xl p-5 card-shadow border border-ink-400/10">
              <div className="relative z-10 w-10 h-10 rounded-lg bg-gradient-to-br from-navy-900 to-navy-600 text-gold-400 flex items-center justify-center text-lg mb-3">
                <c.icon />
              </div>
              <p className="relative z-10 font-display text-2xl font-bold text-navy-900">{c.value}</p>
              <p className="relative z-10 text-xs text-ink-600 mt-1">{c.label}</p>
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-xl p-5 card-shadow border border-ink-400/10 overflow-hidden">
          <h3 className="font-display font-semibold text-navy-900 mb-4">Enquiries Overview</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="enquiries" stroke="#14627e" strokeWidth={3} dot={{ r: 4, fill: '#f2a81d', stroke: '#14627e' }} activeDot={{ r: 7, fill: '#f2a81d' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl card-shadow border border-ink-400/10 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-ink-400/10">
            <h3 className="font-display font-semibold text-navy-900">Recent Enquiries</h3>
            <Link to="/admin/enquiries" className="text-sm text-gold-600 font-semibold hover:underline">View all</Link>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-ink-600 bg-mist-50">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Phone</th>
                <th className="px-5 py-3 font-medium">Project Type</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((e) => (
                <tr key={e.id} className="border-t border-ink-400/10 hover:bg-mist-50 transition-colors">
                  <td className="px-5 py-3 font-medium text-navy-900">{e.name}</td>
                  <td className="px-5 py-3 text-ink-600">{e.phone}</td>
                  <td className="px-5 py-3 text-ink-600">{e.projectType}</td>
                  <td className="px-5 py-3 text-ink-600">{e.date}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor[e.status] || 'bg-gray-100 text-gray-600'}`}>{e.status}</span>
                  </td>
                </tr>
              ))}
              {recent.length === 0 && (
                <tr><td colSpan={5} className="px-5 py-8 text-center text-ink-600">No enquiries yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
