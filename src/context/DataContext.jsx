import { createContext, useContext, useEffect, useState } from 'react'
import { loadOrSeed, save, uid } from '../utils/storage'
import {
  defaultServices,
  defaultProjects,
  defaultGallery,
  defaultTestimonials,
  defaultTeam,
  defaultWebsiteContent,
  defaultEnquiries,
  ADMIN_CREDENTIALS,
} from '../data/aluminiumData'

const DataContext = createContext(null)

const KEYS = {
  services: 'alupro_services',
  projects: 'alupro_projects',
  gallery: 'alupro_gallery',
  testimonials: 'alupro_testimonials',
  team: 'alupro_team',
  content: 'alupro_content',
  enquiries: 'alupro_enquiries',
  auth: 'alupro_admin_auth',
  visualRefresh: 'alupro_visual_refresh_20260822_home_solutions',
}

function visualRefresh(value, defaults, imageFields = ['image']) {
  if (typeof localStorage === 'undefined' || localStorage.getItem(KEYS.visualRefresh)) return value
  const byId = new Map(defaults.map((item) => [item.id, item]))
  const seen = new Set(value.map((item) => item.id))
  const refreshed = value.map((item) => {
    const fresh = byId.get(item.id)
    if (!fresh) return item
    const patch = { ...fresh }
    imageFields.forEach((field) => {
      if (fresh[field]) patch[field] = fresh[field]
    })
    if (fresh.gallery) patch.gallery = fresh.gallery
    return { ...item, ...patch }
  })
  const additions = defaults.filter((item) => !seen.has(item.id))
  return [...refreshed, ...additions]
}

function visualRefreshContent(value) {
  if (typeof localStorage === 'undefined' || localStorage.getItem(KEYS.visualRefresh)) return value
  return {
    ...value,
    heroTitle: defaultWebsiteContent.heroTitle,
    heroDescription: defaultWebsiteContent.heroDescription,
    heroServices: defaultWebsiteContent.heroServices,
    aboutContent: defaultWebsiteContent.aboutContent,
    seo: defaultWebsiteContent.seo,
    heroImages: defaultWebsiteContent.heroImages,
    showcaseVideo: defaultWebsiteContent.showcaseVideo,
  }
}

export function DataProvider({ children }) {
  const [services, setServices] = useState(() => visualRefresh(loadOrSeed(KEYS.services, defaultServices), defaultServices))
  const [projects, setProjects] = useState(() => visualRefresh(loadOrSeed(KEYS.projects, defaultProjects), defaultProjects))
  const [gallery, setGallery] = useState(() => visualRefresh(loadOrSeed(KEYS.gallery, defaultGallery), defaultGallery))
  const [testimonials, setTestimonials] = useState(() => visualRefresh(loadOrSeed(KEYS.testimonials, defaultTestimonials), defaultTestimonials, ['photo']))
  const [team, setTeam] = useState(() => visualRefresh(loadOrSeed(KEYS.team, defaultTeam), defaultTeam, ['photo']))
  const [content, setContent] = useState(() => visualRefreshContent(loadOrSeed(KEYS.content, defaultWebsiteContent)))
  const [enquiries, setEnquiries] = useState(() => loadOrSeed(KEYS.enquiries, defaultEnquiries))
  const [isAdmin, setIsAdmin] = useState(() => loadOrSeed(KEYS.auth, false))

  useEffect(() => save(KEYS.services, services), [services])
  useEffect(() => save(KEYS.projects, projects), [projects])
  useEffect(() => save(KEYS.gallery, gallery), [gallery])
  useEffect(() => save(KEYS.testimonials, testimonials), [testimonials])
  useEffect(() => save(KEYS.team, team), [team])
  useEffect(() => save(KEYS.content, content), [content])
  useEffect(() => save(KEYS.enquiries, enquiries), [enquiries])
  useEffect(() => save(KEYS.auth, isAdmin), [isAdmin])
  useEffect(() => save(KEYS.visualRefresh, true), [])

  // ---- Auth ----
  const login = (email, password) => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      setIsAdmin(true)
      return true
    }
    return false
  }
  const logout = () => setIsAdmin(false)

  // ---- Projects CRUD ----
  const addProject = (project) => {
    const withId = { ...project, id: project.id || uid('P') }
    setProjects((prev) => [withId, ...prev])
    return withId
  }
  const updateProject = (id, patch) => setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)))
  const deleteProject = (id) => setProjects((prev) => prev.filter((p) => p.id !== id))

  // ---- Services CRUD ----
  const addService = (service) => {
    const withId = { ...service, id: service.id || uid('svc') }
    setServices((prev) => [withId, ...prev])
    return withId
  }
  const updateService = (id, patch) => setServices((prev) => prev.map((s) => (s.id === id ? { ...s, ...patch } : s)))
  const deleteService = (id) => setServices((prev) => prev.filter((s) => s.id !== id))

  // ---- Gallery CRUD ----
  const addGalleryImage = (image) => {
    const withId = { ...image, id: image.id || uid('g') }
    setGallery((prev) => [withId, ...prev])
    return withId
  }
  const updateGalleryImage = (id, patch) => setGallery((prev) => prev.map((g) => (g.id === id ? { ...g, ...patch } : g)))
  const deleteGalleryImage = (id) => setGallery((prev) => prev.filter((g) => g.id !== id))

  // ---- Testimonials CRUD ----
  const addTestimonial = (t) => {
    const withId = { ...t, id: t.id || uid('t') }
    setTestimonials((prev) => [withId, ...prev])
    return withId
  }
  const updateTestimonial = (id, patch) => setTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, ...patch } : t)))
  const deleteTestimonial = (id) => setTestimonials((prev) => prev.filter((t) => t.id !== id))

  // ---- Team CRUD ----
  const addTeamMember = (m) => {
    const withId = { ...m, id: m.id || uid('m') }
    setTeam((prev) => [withId, ...prev])
    return withId
  }
  const updateTeamMember = (id, patch) => setTeam((prev) => prev.map((m) => (m.id === id ? { ...m, ...patch } : m)))
  const deleteTeamMember = (id) => setTeam((prev) => prev.filter((m) => m.id !== id))

  // ---- Enquiries ----
  const addEnquiry = (e) => {
    const withId = {
      ...e,
      id: uid('e'),
      date: new Date().toISOString().slice(0, 10),
      status: 'New',
    }
    setEnquiries((prev) => [withId, ...prev])
    return withId
  }
  const updateEnquiryStatus = (id, status) => setEnquiries((prev) => prev.map((e) => (e.id === id ? { ...e, status } : e)))
  const deleteEnquiry = (id) => setEnquiries((prev) => prev.filter((e) => e.id !== id))

  // ---- Website content ----
  const updateContent = (patch) => setContent((prev) => ({ ...prev, ...patch }))

  const value = {
    services, addService, updateService, deleteService,
    projects, addProject, updateProject, deleteProject,
    gallery, addGalleryImage, updateGalleryImage, deleteGalleryImage,
    testimonials, addTestimonial, updateTestimonial, deleteTestimonial,
    team, addTeamMember, updateTeamMember, deleteTeamMember,
    enquiries, addEnquiry, updateEnquiryStatus, deleteEnquiry,
    content, updateContent,
    isAdmin, login, logout,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within DataProvider')
  return ctx
}
