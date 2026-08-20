export default function AdminTopbar({ title, action }) {
  return (
    <div className="flex items-center justify-between glass-panel border-b border-white/60 px-6 h-16 sticky top-0 z-10">
      <h1 className="font-display text-xl font-bold text-navy-900">{title}</h1>
      {action}
    </div>
  )
}
