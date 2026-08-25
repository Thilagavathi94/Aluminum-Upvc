export default function BrandLogo({ compact = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={compact ? '/assets/brand/vetri-logo-mark.png' : '/assets/brand/vetri-logo-full.png'}
        alt="VETRI Aluminium and uPVC Solutions"
        className={`${compact ? 'h-11 w-11 rounded-full' : 'h-12 w-auto max-w-[190px]'} object-contain`}
      />
    </div>
  )
}
