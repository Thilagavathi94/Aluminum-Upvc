import { useState } from 'react'
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import AdminTopbar from './AdminTopbar'

const categories = ['Residential', 'Commercial', 'Office', 'Other']
const emptyForm = { title: '', category: 'Residential', image: '', description: '' }

export default function AdminGallery() {
  const { gallery, addGalleryImage, updateGalleryImage, deleteGalleryImage } = useData()
  const [filter, setFilter] = useState('All')
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [confirmId, setConfirmId] = useState(null)

  const filtered = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)

  const openAdd = () => { setForm(emptyForm); setModal('add') }
  const openEdit = (g) => { setForm(g); setModal(g.id) }
  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSave = (e) => {
    e.preventDefault()
    const payload = { ...form, image: form.image || `https://picsum.photos/seed/${encodeURIComponent(form.title || Date.now())}/700/700` }
    if (modal === 'add') addGalleryImage(payload)
    else updateGalleryImage(modal, payload)
    setModal(null)
  }

  return (
    <div>
      <AdminTopbar
        title="Gallery"
        action={<button onClick={openAdd} className="btn-gold !py-2 !px-4 text-sm"><FiPlus /> Add Image</button>}
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-5">
          {['All', ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${filter === c ? 'bg-navy-900 text-white' : 'bg-white border border-ink-400/20 text-navy-800'}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((g) => (
            <div key={g.id} className="bg-white rounded-xl overflow-hidden card-shadow border border-ink-400/10 group relative">
              <img src={g.image} alt={g.title} className="w-full h-36 object-cover" />
              <div className="p-3">
                <p className="text-sm font-medium text-navy-900 truncate">{g.title}</p>
                <p className="text-xs text-ink-600">{g.category}</p>
              </div>
              <div className="absolute top-2 right-2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition">
                <button onClick={() => openEdit(g)} className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-navy-800 hover:text-gold-600"><FiEdit2 size={13} /></button>
                <button onClick={() => setConfirmId(g.id)} className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center text-navy-800 hover:text-red-600"><FiTrash2 size={13} /></button>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <p className="col-span-full text-center text-ink-600 py-10">No images in this category.</p>}
        </div>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-navy-950/50 flex items-center justify-center z-50 p-4" onClick={() => setModal(null)}>
          <form onSubmit={handleSave} onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl p-6 max-w-md w-full space-y-4">
            <h3 className="font-display font-semibold text-lg text-navy-900">{modal === 'add' ? 'Add Image' : 'Edit Image'}</h3>
            <div>
              <label className="text-xs font-semibold text-ink-600">Title</label>
              <input required value={form.title} onChange={update('title')} className="input mt-1" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-600">Category</label>
              <select value={form.category} onChange={update('category')} className="input mt-1 bg-white">
                {categories.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-600">Image URL</label>
              <input value={form.image} onChange={update('image')} placeholder="Leave blank to auto-generate" className="input mt-1" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-600">Description</label>
              <input value={form.description} onChange={update('description')} className="input mt-1" />
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
            <h3 className="font-display font-semibold text-navy-900 mb-2">Delete this image?</h3>
            <div className="flex gap-3 justify-end mt-4">
              <button onClick={() => setConfirmId(null)} className="px-4 py-2 rounded-lg text-sm font-medium text-ink-600 hover:bg-mist-100">Cancel</button>
              <button onClick={() => { deleteGalleryImage(confirmId); setConfirmId(null) }} className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
