import { Navigate } from 'react-router-dom'
import { useData } from '../context/DataContext'

export default function ProtectedRoute({ children }) {
  const { isAdmin } = useData()
  if (!isAdmin) return <Navigate to="/admin/login" replace />
  return children
}
