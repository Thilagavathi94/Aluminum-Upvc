import { useState, useMemo } from 'react'
import { FiPhone, FiMail, FiTrash2, FiX, FiDownload } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useData } from '../context/DataContext'
import { enquiryStatusOptions } from '../data/aluminiumData'
import AdminTopbar from './AdminTopbar'

const statusColor = {
  New: 'bg-blue-100 text-blue-700',
  Contacted: 'bg-yellow-100 text-yellow-700',
  'In Progress': 'bg-purple-100 text-purple-700',
  Quoted: 'bg-orange-100 text-orange-700',
  Completed: 'bg-green-100 text-green-700',
  Closed: 'bg-gray-200 text-gray-600',
}

export default function Enquiries() {
  const { enquiries, updateEnquiryStatus, deleteEnquiry } = useData()
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const [confirmId, setConfirmId] = useState(null)

  const filtered = useMemo(
    () => (filter === 'All' ? enquiries : enquiries.filter((e) => e.status === filter)),
    [enquiries, filter]
  )

  const exportCsv = () => {
    const header = ['Name', 'Phone', 'Email', 'Project Type', 'Location', 'Date', 'Status', 'Message']
    const rows = enquiries.map((e) => [e.name, e.phone, e.email, e.projectType, e.location, e.date, e.status, e.message])
    const csv = [header, ...rows].map((r) => r.map((v) => `"${(v || '').toString().replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'alupro-enquiries.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      <AdminTopbar
        title="Enquiries"
        action={
          <div className="flex items-center gap-2">
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="input !w-auto bg-white text-sm">
              <option>All</option>
              {enquiryStatusOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
            <button onClick={exportCsv} className="btn-primary !py-2 !px-4 text-sm"><FiDownload /> Export</button>
          </div>
        }
      />
      <div className="p-6">
        <div className="bg-white rounded-xl card-shadow border border-ink-400/10 overflow-x-auto">
          <table className="w-full text-sm min-w-[820px]">
            <thead>
              <tr className="text-left text-ink-600 bg-mist-50">
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Phone</th>
                <th className="px-5 py-3 font-medium">Project Type</th>
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((e) => (
                <tr key={e.id} className="border-t border-ink-400/10 hover:bg-mist-50/60 cursor-pointer" onClick={() => setSelected(e)}>
                  <td className="px-5 py-3 font-medium text-navy-900">{e.name}</td>
                  <td className="px-5 py-3 text-ink-600">{e.phone}</td>
                  <td className="px-5 py-3 text-ink-600">{e.projectType}</td>
                  <td className="px-5 py-3 text-ink-600">{e.date}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColor[e.status] || 'bg-gray-100 text-gray-600'}`}>{e.status}</span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button onClick={(ev) => { ev.stopPropagation(); setConfirmId(e.id) }} className="text-ink-600 hover:text-red-600"><FiTrash2 /></button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-5 py-10 text-center text-ink-600">No enquiries match this filter.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-navy-950/50 flex items-center justify-end z-50" onClick={() => setSelected(null)}>
          <div className="bg-white h-full w-full max-w-md p-6 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-semibold text-lg text-navy-900">Customer Details</h3>
              <button onClick={() => setSelected(null)} className="text-ink-600 hover:text-navy-900 text-xl"><FiX /></button>
            </div>

            <dl className="space-y-4 text-sm">
              {[
                ['Name', selected.name],
                ['Phone', selected.phone],
                ['Email', selected.email || '—'],
                ['Project Type', selected.projectType],
                ['Location', selected.location || '—'],
                ['Budget', selected.budget || '—'],
                ['Date', selected.date],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-ink-400/10 pb-3">
                  <dt className="text-ink-600">{label}</dt>
                  <dd className="font-medium text-navy-900 text-right max-w-[60%]">{value}</dd>
                </div>
              ))}
              <div>
                <dt className="text-ink-600 mb-1">Message</dt>
                <dd className="font-medium text-navy-900">{selected.message || '—'}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <label className="text-xs font-semibold text-ink-600">Change Status</label>
              <select
                value={selected.status}
                onChange={(e) => {
                  updateEnquiryStatus(selected.id, e.target.value)
                  setSelected((s) => ({ ...s, status: e.target.value }))
                }}
                className="input mt-1 bg-white"
              >
                {enquiryStatusOptions.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <a href={`tel:${selected.phone}`} className="flex flex-col items-center gap-1 py-3 rounded-lg bg-mist-50 hover:bg-mist-100 text-navy-900 text-xs font-medium">
                <FiPhone className="text-lg" /> Call
              </a>
              <a href={`mailto:${selected.email}`} className="flex flex-col items-center gap-1 py-3 rounded-lg bg-mist-50 hover:bg-mist-100 text-navy-900 text-xs font-medium">
                <FiMail className="text-lg" /> Email
              </a>
              <a href={`https://wa.me/${selected.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 py-3 rounded-lg bg-mist-50 hover:bg-mist-100 text-navy-900 text-xs font-medium">
                <FaWhatsapp className="text-lg" /> WhatsApp
              </a>
            </div>

            <button
              onClick={() => { setConfirmId(selected.id); setSelected(null) }}
              className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50"
            >
              <FiTrash2 /> Delete Enquiry
            </button>
          </div>
        </div>
      )}

      {confirmId && (
        <div className="fixed inset-0 bg-navy-950/50 flex items-center justify-center z-50 p-4" onClick={() => setConfirmId(null)}>
          <div className="bg-white rounded-xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display font-semibold text-navy-900 mb-2">Delete this enquiry?</h3>
            <p className="text-sm text-ink-600 mb-5">This action cannot be undone.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setConfirmId(null)} className="px-4 py-2 rounded-lg text-sm font-medium text-ink-600 hover:bg-mist-100">Cancel</button>
              <button onClick={() => { deleteEnquiry(confirmId); setConfirmId(null) }} className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
