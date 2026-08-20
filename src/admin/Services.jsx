import { useState } from 'react'
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import AdminTopbar from './AdminTopbar'

const emptyForm = { name: '', tagline: '', description: '', image: '', status: 'Published', icon: 'window', features: '', designs: '', benefits: '' }

export default function AdminServices() {
  const { services, addService, updateService, deleteService } = useData()
  const [modal, setModal] = useState(null) // 'add' | serviceId
  const [form, setForm] = useState(emptyForm)
  const [confirmId, setConfirmId] = useState(null)

  const openAdd = () => { setForm(emptyForm); setModal('add') }
  const openEdit = (s) => {
    setForm({
      ...s,
      features: (s.features || []).join(', '),
      designs: (s.designs || []).join(', '),
      benefits: (s.benefits || []).join(', '),
    })
    setModal(s.id)
  }

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSave = (e) => {
    e.preventDefault()
    const payload = {
      ...form,
      image: form.image || `https://picsum.photos/seed/${encodeURIComponent(form.name)}/900/600`,
      features: form.features.split(',').map((s) => s.trim()).filter(Boolean),
      designs: form.designs.split(',').map((s) => s.trim()).filter(Boolean),
      benefits: form.benefits.split(',').map((s) => s.trim()).filter(Boolean),
    }
    if (modal === 'add') addService(payload)
    else updateService(modal, payload)
    setModal(null)
  }

  return (
    <div>
      <AdminTopbar
        title="Services"
        action={<button onClick={openAdd} className="btn-gold !py-2 !px-4 text-sm"><FiPlus /> Add Service</button>}
      />
      <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div key={s.id} className="bg-white rounded-xl overflow-hidden card-shadow border border-ink-400/10">
            <img src={s.image} alt={s.name} className="w-full h-36 object-cover" />
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display font-semibold text-navy-900">{s.name}</h3>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${s.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>{s.status}</span>
              </div>
              <p className="text-xs text-ink-600 mt-1 line-clamp-2">{s.tagline}</p>
              <div className="flex gap-3 mt-4 text-navy-700">
                <button onClick={() => openEdit(s)} className="text-sm font-medium hover:text-gold-600 flex items-center gap-1"><FiEdit2 /> Edit</button>
                <button onClick={() => setConfirmId(s.id)} className="text-sm font-medium hover:text-red-600 flex items-center gap-1"><FiTrash2 /> Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-navy-950/50 flex items-center justify-center z-50 p-4 overflow-y-auto" onClick={() => setModal(null)}>
          <form onSubmit={handleSave} onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl p-6 max-w-lg w-full space-y-4 my-8">
            <h3 className="font-display font-semibold text-lg text-navy-900">{modal === 'add' ? 'Add Service' : 'Edit Service'}</h3>
            <div>
              <label className="text-xs font-semibold text-ink-600">Service Name</label>
              <input required value={form.name} onChange={update('name')} className="input mt-1" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-600">Tagline</label>
              <input value={form.tagline} onChange={update('tagline')} className="input mt-1" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-600">Description</label>
              <textarea rows={3} value={form.description} onChange={update('description')} className="input mt-1" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink-600">Image URL</label>
                <input value={form.image} onChange={update('image')} placeholder="Leave blank to auto-generate" className="input mt-1" />
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-600">Status</label>
                <select value={form.status} onChange={update('status')} className="input mt-1 bg-white">
                  <option>Published</option>
                  <option>Hidden</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-600">Features (comma separated)</label>
              <input value={form.features} onChange={update('features')} className="input mt-1" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-600">Available Designs (comma separated)</label>
              <input value={form.designs} onChange={update('designs')} className="input mt-1" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-600">Benefits (comma separated)</label>
              <input value={form.benefits} onChange={update('benefits')} className="input mt-1" />
            </div>
            <div className="flex gap-3 justify-end pt-1">
              <button type="button" onClick={() => setModal(null)} className="px-4 py-2 rounded-lg text-sm font-medium text-ink-600 hover:bg-mist-100">Cancel</button>
              <button type="submit" className="btn-primary !py-2 !px-5 text-sm">Save</button>
            </div>
          </form>
        </div>
      )}

      {confirmId && (
        <div className="fixed inset-0 bg-navy-950/50 flex items-center justify-center z-50 p-4" onClick={() => setConfirmId(null)}>
          <div className="bg-white rounded-xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display font-semibold text-navy-900 mb-2">Delete this service?</h3>
            <p className="text-sm text-ink-600 mb-5">It will be removed from the public website too.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setConfirmId(null)} className="px-4 py-2 rounded-lg text-sm font-medium text-ink-600 hover:bg-mist-100">Cancel</button>
              <button onClick={() => { deleteService(confirmId); setConfirmId(null) }} className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
