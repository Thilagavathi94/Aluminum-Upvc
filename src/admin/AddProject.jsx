import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useData } from '../context/DataContext'
import AdminTopbar from './AdminTopbar'

const categories = ['Residential', 'Commercial', 'Office', 'Others']
const statuses = ['Completed', 'In Progress']

const emptyForm = {
  name: '', category: 'Residential', location: '', year: new Date().getFullYear().toString(),
  client: '', area: '', products: '', description: '', image: '', gallery: '', status: 'In Progress',
}

export default function AddProject() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const { projects, addProject, updateProject } = useData()
  const navigate = useNavigate()
  const [form, setForm] = useState(emptyForm)

  useEffect(() => {
    if (isEdit) {
      const existing = projects.find((p) => p.id === id)
      if (existing) {
        setForm({ ...existing, gallery: (existing.gallery || []).join(', ') })
      }
    }
  }, [id, isEdit, projects])

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      ...form,
      image: form.image || `https://picsum.photos/seed/${encodeURIComponent(form.name || 'project')}/900/600`,
      gallery: form.gallery
        ? form.gallery.split(',').map((s) => s.trim()).filter(Boolean)
        : [
            `https://picsum.photos/seed/${encodeURIComponent(form.name || 'p')}1/500/400`,
            `https://picsum.photos/seed/${encodeURIComponent(form.name || 'p')}2/500/400`,
          ],
    }
    if (isEdit) {
      updateProject(id, payload)
    } else {
      addProject(payload)
    }
    navigate('/admin/projects')
  }

  return (
    <div>
      <AdminTopbar title={isEdit ? 'Edit Project' : 'Add New Project'} />
      <div className="p-6 max-w-3xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 card-shadow border border-ink-400/10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Project Name" required>
              <input required value={form.name} onChange={update('name')} className="input" />
            </Field>
            <Field label="Category">
              <select value={form.category} onChange={update('category')} className="input bg-white">
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Location">
              <input value={form.location} onChange={update('location')} className="input" />
            </Field>
            <Field label="Year">
              <input value={form.year} onChange={update('year')} className="input" />
            </Field>
            <Field label="Client Name">
              <input value={form.client} onChange={update('client')} className="input" />
            </Field>
            <Field label="Area (Sq.ft)">
              <input value={form.area} onChange={update('area')} className="input" />
            </Field>
            <Field label="Status">
              <select value={form.status} onChange={update('status')} className="input bg-white">
                {statuses.map((s) => <option key={s}>{s}</option>)}
              </select>
            </Field>
            <Field label="Main Image URL">
              <input value={form.image} onChange={update('image')} placeholder="Leave blank to auto-generate" className="input" />
            </Field>
          </div>

          <Field label="Products Used">
            <input value={form.products} onChange={update('products')} placeholder="e.g. Aluminium Windows, Glass Railing" className="input" />
          </Field>

          <Field label="Gallery Image URLs (comma separated)">
            <input value={form.gallery} onChange={update('gallery')} placeholder="Leave blank to auto-generate" className="input" />
          </Field>

          <Field label="Description">
            <textarea value={form.description} onChange={update('description')} rows={4} className="input" />
          </Field>

          <div className="flex gap-3 justify-end pt-2">
            <button type="button" onClick={() => navigate('/admin/projects')} className="px-5 py-2.5 rounded-lg text-sm font-medium text-ink-600 hover:bg-mist-100">Cancel</button>
            <button type="submit" className="btn-primary !py-2.5 !px-6 text-sm">Save Project</button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({ label, required, children }) {
  return (
    <div>
      <label className="text-xs font-semibold text-ink-600">{label}{required && ' *'}</label>
      <div className="mt-1">{children}</div>
    </div>
  )
}
