import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DataProvider } from './context/DataContext'

import PublicLayout from './components/PublicLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

import AdminLayout from './admin/AdminLayout'
import AdminLogin from './admin/AdminLogin'
import ProtectedRoute from './admin/ProtectedRoute'
import Dashboard from './admin/Dashboard'
import AdminProjects from './admin/Projects'
import AddProject from './admin/AddProject'
import AdminServices from './admin/Services'
import Enquiries from './admin/Enquiries'
import AdminGallery from './admin/Gallery'
import AdminTestimonials from './admin/Testimonials'
import AdminTeam from './admin/Team'
import AdminWebsiteContent from './admin/WebsiteContent'
import AdminSettings from './admin/Settings'

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="projects/new" element={<AddProject />} />
            <Route path="projects/:id/edit" element={<AddProject />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
            <Route path="team" element={<AdminTeam />} />
            <Route path="content" element={<AdminWebsiteContent />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}
