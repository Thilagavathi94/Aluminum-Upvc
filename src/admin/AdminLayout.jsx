import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(242,168,29,0.14),transparent_30rem),linear-gradient(135deg,#f7f9fc,#eef7fb)]">
      <AdminSidebar />
      <div className="flex-1 min-w-0">
        <Outlet />
      </div>
    </div>
  )
}
