import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiEye, FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import AdminTopbar from './AdminTopbar'

export default function AdminProjects() {
  const { projects, deleteProject } = useData()
  const navigate = useNavigate()
  const [confirmId, setConfirmId] = useState(null)

  const handleDelete = (id) => {
    deleteProject(id)
    setConfirmId(null)
  }

  return (
    <div>
      <AdminTopbar
        title="Projects"
        action={
          <Link to="/admin/projects/new" className="btn-gold !py-2 !px-4 text-sm">
            <FiPlus /> Add Project
          </Link>
        }
      />
      <div className="p-6">
        <div className="bg-white rounded-xl card-shadow border border-ink-400/10 overflow-x-auto">
          <table className="w-full text-sm min-w-[720px]">
            <thead>
              <tr className="text-left text-ink-600 bg-mist-50">
                <th className="px-5 py-3 font-medium">ID</th>
                <th className="px-5 py-3 font-medium">Project Name</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Location</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Year</th>
                <th className="px-5 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((p) => (
                <tr key={p.id} className="border-t border-ink-400/10">
                  <td className="px-5 py-3 text-ink-600">{p.id}</td>
                  <td className="px-5 py-3 font-medium text-navy-900">{p.name}</td>
                  <td className="px-5 py-3 text-ink-600">{p.category}</td>
                  <td className="px-5 py-3 text-ink-600">{p.location}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{p.status}</span>
                  </td>
                  <td className="px-5 py-3 text-ink-600">{p.year}</td>
                  <td className="px-5 py-3">
                    <div className="flex justify-end gap-3 text-navy-700">
                      <button onClick={() => navigate(`/projects/${p.id}`)} title="View" className="hover:text-gold-600"><FiEye /></button>
                      <button onClick={() => navigate(`/admin/projects/${p.id}/edit`)} title="Edit" className="hover:text-gold-600"><FiEdit2 /></button>
                      <button onClick={() => setConfirmId(p.id)} title="Delete" className="hover:text-red-600"><FiTrash2 /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr><td colSpan={7} className="px-5 py-10 text-center text-ink-600">No projects yet. Add your first project.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {confirmId && (
        <div className="fixed inset-0 bg-navy-950/50 flex items-center justify-center z-50 p-4" onClick={() => setConfirmId(null)}>
          <div className="bg-white rounded-xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display font-semibold text-navy-900 mb-2">Delete this project?</h3>
            <p className="text-sm text-ink-600 mb-5">This action cannot be undone.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setConfirmId(null)} className="px-4 py-2 rounded-lg text-sm font-medium text-ink-600 hover:bg-mist-100">Cancel</button>
              <button onClick={() => handleDelete(confirmId)} className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
