import { useState } from 'react'
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import AdminTopbar from './AdminTopbar'

const emptyForm = { name: '', designation: '', experience: '', photo: '', linkedin: '', instagram: '' }

export default function AdminTeam() {
  const { team, addTeamMember, updateTeamMember, deleteTeamMember } = useData()
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState(emptyForm)
  const [confirmId, setConfirmId] = useState(null)

  const openAdd = () => { setForm(emptyForm); setModal('add') }
  const openEdit = (m) => { setForm({ ...m, linkedin: m.social?.linkedin || '', instagram: m.social?.instagram || '' }); setModal(m.id) }
  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSave = (e) => {
    e.preventDefault()
    const payload = {
      name: form.name, designation: form.designation, experience: form.experience,
      photo: form.photo || `https://picsum.photos/seed/${encodeURIComponent(form.name)}/300/300`,
      social: { linkedin: form.linkedin, instagram: form.instagram },
    }
    if (modal === 'add') addTeamMember(payload)
    else updateTeamMember(modal, payload)
    setModal(null)
  }

  return (
    <div>
      <AdminTopbar title="Team" action={<button onClick={openAdd} className="btn-gold !py-2 !px-4 text-sm"><FiPlus /> Add Member</button>} />
      <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {team.map((m) => (
          <div key={m.id} className="bg-white rounded-xl overflow-hidden card-shadow border border-ink-400/10 text-center">
            <img src={m.photo} alt={m.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="font-semibold text-navy-900">{m.name}</p>
              <p className="text-xs text-gold-600 font-medium">{m.designation}</p>
              <p className="text-xs text-ink-600 mt-0.5">{m.experience}</p>
              <div className="flex justify-center gap-3 mt-3 text-navy-700">
                <button onClick={() => openEdit(m)} className="hover:text-gold-600"><FiEdit2 size={15} /></button>
                <button onClick={() => setConfirmId(m.id)} className="hover:text-red-600"><FiTrash2 size={15} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-navy-950/50 flex items-center justify-center z-50 p-4" onClick={() => setModal(null)}>
          <form onSubmit={handleSave} onClick={(e) => e.stopPropagation()} className="bg-white rounded-xl p-6 max-w-md w-full space-y-4">
            <h3 className="font-display font-semibold text-lg text-navy-900">{modal === 'add' ? 'Add Member' : 'Edit Member'}</h3>
            <div><label className="text-xs font-semibold text-ink-600">Name</label><input required value={form.name} onChange={update('name')} className="input mt-1" /></div>
            <div><label className="text-xs font-semibold text-ink-600">Designation</label><input value={form.designation} onChange={update('designation')} className="input mt-1" /></div>
            <div><label className="text-xs font-semibold text-ink-600">Experience</label><input value={form.experience} onChange={update('experience')} placeholder="e.g. 10+ years" className="input mt-1" /></div>
            <div><label className="text-xs font-semibold text-ink-600">Photo URL</label><input value={form.photo} onChange={update('photo')} placeholder="Leave blank to auto-generate" className="input mt-1" /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="text-xs font-semibold text-ink-600">LinkedIn URL</label><input value={form.linkedin} onChange={update('linkedin')} className="input mt-1" /></div>
              <div><label className="text-xs font-semibold text-ink-600">Instagram URL</label><input value={form.instagram} onChange={update('instagram')} className="input mt-1" /></div>
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
            <h3 className="font-display font-semibold text-navy-900 mb-2">Remove this team member?</h3>
            <div className="flex gap-3 justify-end mt-4">
              <button onClick={() => setConfirmId(null)} className="px-4 py-2 rounded-lg text-sm font-medium text-ink-600 hover:bg-mist-100">Cancel</button>
              <button onClick={() => { deleteTeamMember(confirmId); setConfirmId(null) }} className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-600 text-white hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
