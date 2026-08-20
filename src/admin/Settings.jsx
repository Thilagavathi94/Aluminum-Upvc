import { useState, useEffect } from 'react'
import { FiCheck } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import AdminTopbar from './AdminTopbar'

const tabs = ['General', 'Contact', 'Social Media', 'SEO', 'Admin Profile']

export default function AdminSettings() {
  const { content, updateContent } = useData()
  const [tab, setTab] = useState('General')
  const [form, setForm] = useState(content)
  const [saved, setSaved] = useState(false)

  useEffect(() => setForm(content), [content])

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  const updateSocial = (field) => (e) => setForm((f) => ({ ...f, social: { ...f.social, [field]: e.target.value } }))
  const updateSeo = (field) => (e) => setForm((f) => ({ ...f, seo: { ...f.seo, [field]: e.target.value } }))

  const handleSave = (e) => {
    e.preventDefault()
    updateContent(form)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div>
      <AdminTopbar title="Settings" />
      <div className="p-6 max-w-2xl">
        <div className="flex flex-wrap gap-2 mb-5">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${tab === t ? 'bg-navy-900 text-white' : 'bg-white border border-ink-400/20 text-navy-800'}`}
            >
              {t}
            </button>
          ))}
        </div>

        <form onSubmit={handleSave} className="bg-white rounded-xl p-6 card-shadow border border-ink-400/10 space-y-5">
          {tab === 'General' && (
            <>
              <div><label className="text-xs font-semibold text-ink-600">Company Name</label><input value={form.companyName} onChange={update('companyName')} className="input mt-1" /></div>
              <div><label className="text-xs font-semibold text-ink-600">Logo Text</label><input value={form.logoText} onChange={update('logoText')} className="input mt-1" /></div>
            </>
          )}
          {tab === 'Contact' && (
            <>
              <div><label className="text-xs font-semibold text-ink-600">Phone</label><input value={form.phone} onChange={update('phone')} className="input mt-1" /></div>
              <div><label className="text-xs font-semibold text-ink-600">Email</label><input value={form.email} onChange={update('email')} className="input mt-1" /></div>
              <div><label className="text-xs font-semibold text-ink-600">Address</label><input value={form.address} onChange={update('address')} className="input mt-1" /></div>
            </>
          )}
          {tab === 'Social Media' && (
            <>
              <div><label className="text-xs font-semibold text-ink-600">Facebook</label><input value={form.social.facebook} onChange={updateSocial('facebook')} className="input mt-1" /></div>
              <div><label className="text-xs font-semibold text-ink-600">Instagram</label><input value={form.social.instagram} onChange={updateSocial('instagram')} className="input mt-1" /></div>
              <div><label className="text-xs font-semibold text-ink-600">YouTube</label><input value={form.social.youtube} onChange={updateSocial('youtube')} className="input mt-1" /></div>
              <div><label className="text-xs font-semibold text-ink-600">LinkedIn</label><input value={form.social.linkedin} onChange={updateSocial('linkedin')} className="input mt-1" /></div>
            </>
          )}
          {tab === 'SEO' && (
            <>
              <div><label className="text-xs font-semibold text-ink-600">Meta Title</label><input value={form.seo.title} onChange={updateSeo('title')} className="input mt-1" /></div>
              <div><label className="text-xs font-semibold text-ink-600">Meta Description</label><textarea rows={3} value={form.seo.description} onChange={updateSeo('description')} className="input mt-1" /></div>
            </>
          )}
          {tab === 'Admin Profile' && (
            <>
              <p className="text-sm text-ink-600">Demo login: <span className="font-medium text-navy-900">admin@alupro.com</span> / <span className="font-medium text-navy-900">alupro123</span></p>
              <p className="text-xs text-ink-400">Connect a backend to enable real profile and password management.</p>
            </>
          )}

          <div className="flex items-center gap-3 justify-end pt-2">
            {saved && <span className="text-sm text-green-600 flex items-center gap-1"><FiCheck /> Saved</span>}
            <button type="submit" className="btn-primary !py-2.5 !px-6 text-sm">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  )
}
