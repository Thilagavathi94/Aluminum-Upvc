import { useState } from 'react'
import { FiPlus, FiEdit2, FiTrash2, FiStar } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import AdminTopbar from './AdminTopbar'

const emptyForm = { name: '', project: '', review: '', rating: 5, status: 'Published', photo: '' }

export default function AdminTestimonials() {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useData()
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [confirmId, setConfirmId] = useState(null)

  const openAdd = () => { setForm(emptyForm); setModal('add') }
  const openEdit = (t) => { setForm(t); setModal(t.id) }
  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSave = (e) => {
    e.preventDefault()
    const payload = { ...form, rating: Number(form.rating), photo: form.photo || `https://picsum.photos/seed/${encodeURIComponent(form.name)}/200/200` }
    if (modal === 'add') addTestimonial(payload)
    else updateTestimonial(modal, payload)
    setModal(null)
  }

  const toggleStatus = (t) => updateTestimonial(t.id, { status: t.status === 'Published' ? 'Hidden' : 'Published' })

  return (
    <div>
      <AdminTopbar title="Testimonials" action={<button onClick={openAdd} className="btn-gold !py-2 !px-4 text-sm"><FiPlus /> Add Testimonial</button>} />
      <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-xl p-5 card-shadow border border-ink-400/10">
            <div className="flex items-center gap-3 mb-3">
              <img src={t.photo} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                <p className="text-xs text-ink-600">{t.project}</p>
              </div>
            </div>
            <div className="flex text-gold-500 mb-2">
              {Array.from({ length: 5 }).map((_, i) => <FiStar key={i} className={i < t.rating ? 'fill-gold-500' : ''} />)}
            </div>
            <p className="text-sm text-ink-600 line-clamp-3">{t.review}</p>
            <div className="flex items-center justify-between mt-4">
              <button onClick={() => toggleStatus(t)} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                {t.status}
              </button>
              <div className="flex gap-3 text-navy-700">
                <button onClick={() => openEdit(t)} className="hover:text-gold-600"><FiEdit2 size={15} /></button>
                <button onClick={() => setConfirmId(t.id)} className="hover:text-red-600"><FiTrash2 size={15} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-navy-950/50 flex items-center justify-center z-50 p-4" onClick={() => setModal(null)}>
          <form onSubmit={handleSave} onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl p-6 max-w-md w-full space-y-4">
            <h3 className="font-display font-semibold text-lg text-navy-900">{modal === 'add' ? 'Add Testimonial' : 'Edit Testimonial'}</h3>
            <div><label className="text-xs font-semibold text-ink-600">Customer Name</label><input required value={form.name} onChange={update('name')} className="input mt-1" /></div>
            <div><label className="text-xs font-semibold text-ink-600">Project</label><input value={form.project} onChange={update('project')} className="input mt-1" /></div>
            <div><label className="text-xs font-semibold text-ink-600">Photo URL</label><input value={form.photo} onChange={update('photo')} placeholder="Leave blank to auto-generate" className="input mt-1" /></div>
            <div><label className="text-xs font-semibold text-ink-600">Review</label><textarea rows={3} value={form.review} onChange={update('review')} className="input mt-1" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-ink-600">Rating</label>
                <select value={form.rating} onChange={update('rating')} className="input mt-1 bg-white">
                  {[5, 4, 3, 2, 1].map((r) => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-ink-600">Status</label>
                <select value={form.status} onChange={update('status')} className="input mt-1 bg-white">
                  <option>Published</option>
                  <option>Hidden</option>
                </select>
              </div>
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
            <h3 className="font-display font-semibold text-navy-900 mb-2">Delete this testimonial?</h3>
            <div className="flex gap-3 justify-end mt-4">
              <button onClick={() => setConfirmId(null)} className="px-4 py-2 rounded-lg text-sm font-medium text-ink-600 hover:bg-mist-100">Cancel</button>
              <button onClick={() => { deleteTestimonial(confirmId); setConfirmId(null) }} className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
