import { useState, useEffect } from 'react'
import { FiCheck } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import AdminTopbar from './AdminTopbar'

export default function AdminWebsiteContent() {
  const { content, updateContent } = useData()
  const [form, setForm] = useState(content)
  const [saved, setSaved] = useState(false)

  useEffect(() => setForm(content), [content])

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  const updateSocial = (field) => (e) => setForm((f) => ({ ...f, social: { ...f.social, [field]: e.target.value } }))

  const handleSave = (e) => {
    e.preventDefault()
    updateContent(form)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <AdminTopbar title="Website Content" />
      <div className="p-6 max-w-2xl">
        <form onSubmit={handleSave} className="bg-white rounded-xl p-6 card-shadow border border-ink-400/10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-xs font-semibold text-ink-600">Company Name</label><input value={form.companyName} onChange={update('companyName')} className="input mt-1" /></div>
            <div><label className="text-xs font-semibold text-ink-600">Logo Text</label><input value={form.logoText} onChange={update('logoText')} className="input mt-1" /></div>
          </div>
          <div><label className="text-xs font-semibold text-ink-600">Hero Title</label><input value={form.heroTitle} onChange={update('heroTitle')} className="input mt-1" /></div>
          <div><label className="text-xs font-semibold text-ink-600">Hero Description</label><textarea rows={2} value={form.heroDescription} onChange={update('heroDescription')} className="input mt-1" /></div>
          <div><label className="text-xs font-semibold text-ink-600">About Content</label><textarea rows={4} value={form.aboutContent} onChange={update('aboutContent')} className="input mt-1" /></div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div><label className="text-xs font-semibold text-ink-600">Phone</label><input value={form.phone} onChange={update('phone')} className="input mt-1" /></div>
            <div><label className="text-xs font-semibold text-ink-600">WhatsApp</label><input value={form.whatsapp} onChange={update('whatsapp')} className="input mt-1" /></div>
            <div><label className="text-xs font-semibold text-ink-600">Email</label><input value={form.email} onChange={update('email')} className="input mt-1" /></div>
          </div>
          <div><label className="text-xs font-semibold text-ink-600">Address</label><input value={form.address} onChange={update('address')} className="input mt-1" /></div>

          <div>
            <p className="text-xs font-semibold text-ink-600 mb-2">Social Links</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <input value={form.social.facebook} onChange={updateSocial('facebook')} placeholder="Facebook URL" className="input" />
              <input value={form.social.instagram} onChange={updateSocial('instagram')} placeholder="Instagram URL" className="input" />
              <input value={form.social.youtube} onChange={updateSocial('youtube')} placeholder="YouTube URL" className="input" />
              <input value={form.social.linkedin} onChange={updateSocial('linkedin')} placeholder="LinkedIn URL" className="input" />
            </div>
          </div>

          <div className="flex items-center gap-3 justify-end pt-2">
            {saved && <span className="text-sm text-green-600 flex items-center gap-1"><FiCheck /> Saved</span>}
            <button type="submit" className="btn-primary !py-2.5 !px-6 text-sm">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  )
}
