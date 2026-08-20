import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { useData } from '../context/DataContext'
import { projectTypeOptions } from '../data/aluminiumData'

const initialForm = {
  name: '', phone: '', email: '', projectType: projectTypeOptions[0], location: '', budget: '', message: '',
}

export default function QuoteForm({ compact = false }) {
  const { addEnquiry } = useData()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const err = {}
    if (!form.name.trim()) err.name = 'Name is required'
    if (!form.phone.trim()) err.phone = 'Phone is required'
    else if (!/^[0-9+\-\s]{7,15}$/.test(form.phone.trim())) err.phone = 'Enter a valid phone number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Enter a valid email'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    addEnquiry({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      projectType: form.projectType,
      location: form.location.trim(),
      budget: form.budget.trim(),
      message: form.message.trim(),
    })
    setSubmitted(true)
    setForm(initialForm)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl p-8 text-center card-shadow border border-ink-400/10"
      >
        <FiCheckCircle className="text-5xl text-green-600 mx-auto mb-4" />
        <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">Thank you!</h3>
        <p className="text-ink-600 text-sm mb-5">Your enquiry has been submitted successfully. Our team will contact you shortly.</p>
        <button onClick={() => setSubmitted(false)} className="btn-primary !py-2 !px-4 text-sm">
          Submit Another Enquiry
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-xl card-shadow border border-ink-400/10 ${compact ? 'p-5' : 'p-7'}`}>
      {!compact && <h3 className="font-display text-xl font-semibold text-navy-900 mb-1">Get a Free Quote</h3>}
      {!compact && <p className="text-sm text-ink-600 mb-5">Fill in your details and we'll get back to you within 24 hours.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-ink-600">Name *</label>
          <input value={form.name} onChange={update('name')} className="mt-1 w-full border border-ink-400/30 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600" placeholder="Your Name" />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="text-xs font-semibold text-ink-600">Phone *</label>
          <input value={form.phone} onChange={update('phone')} className="mt-1 w-full border border-ink-400/30 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600" placeholder="Phone Number" />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="text-xs font-semibold text-ink-600">Email</label>
          <input value={form.email} onChange={update('email')} className="mt-1 w-full border border-ink-400/30 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600" placeholder="Email Address" />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="text-xs font-semibold text-ink-600">Project Type</label>
          <select value={form.projectType} onChange={update('projectType')} className="mt-1 w-full border border-ink-400/30 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 bg-white">
            {projectTypeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-ink-600">Location</label>
          <input value={form.location} onChange={update('location')} className="mt-1 w-full border border-ink-400/30 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600" placeholder="City" />
        </div>
        <div>
          <label className="text-xs font-semibold text-ink-600">Budget</label>
          <input value={form.budget} onChange={update('budget')} className="mt-1 w-full border border-ink-400/30 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600" placeholder="Approx. budget (optional)" />
        </div>
        <div className="sm:col-span-2">
          <label className="text-xs font-semibold text-ink-600">Message</label>
          <textarea value={form.message} onChange={update('message')} rows={3} className="mt-1 w-full border border-ink-400/30 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-navy-600" placeholder="Tell us about your project" />
        </div>
      </div>

      <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-gold w-full mt-5">Submit Enquiry</motion.button>
    </form>
  )
}
