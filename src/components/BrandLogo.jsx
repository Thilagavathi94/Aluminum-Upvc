export default function BrandLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="brand-mark" aria-hidden="true">
        <span className="brand-mark__beam brand-mark__beam--one" />
        <span className="brand-mark__beam brand-mark__beam--two" />
        <span className="brand-mark__letters">A</span>
      </div>
      {!compact && <span className="font-display font-bold text-lg text-white tracking-tight">AluPro</span>}
    </div>
  )
}
