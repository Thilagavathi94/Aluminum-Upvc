export default function BrandLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/assets/brand/alupro-logo.png"
        alt="AluPro Aluminium and uPVC Solutions"
        className={`${compact ? 'h-11 w-11' : 'h-12 w-12'} rounded-full object-contain bg-white shadow-lg ring-1 ring-white/25`}
      />
      {!compact && (
        <span className="font-display font-bold text-lg text-white tracking-tight leading-tight">
          AluPro
        </span>
      )}
    </div>
  )
}
