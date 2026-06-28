import { ICON_LIST } from './iconRegistry'
import { AlshamIcon } from './AlshamIcon'

export function IconSystemShowcase() {
  return (
    <div className="min-h-screen bg-obsidian p-8 md:p-12">
      <header className="text-center mb-12 border-b border-gold/20 pb-8">
        <p className="section-eyebrow mb-2">ALSHAM Icon System™</p>
        <h1 className="font-display text-3xl md:text-4xl text-light font-bold">
          Biblioteca Proprietária v1.0
        </h1>
        <p className="text-platinum text-sm mt-3">
          Grid 48×48 · Stroke 1.5px · #C6A45A · Line art institucional
        </p>
      </header>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        style={{
          backgroundImage:
            'linear-gradient(color-mix(in srgb, var(--color-gold) 15%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-gold) 15%, transparent) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      >
        {ICON_LIST.map((icon) => (
          <div
            key={icon.id}
            className="group flex flex-col items-center p-6 border border-gold/20 bg-onyx/40 hover:border-gold/50 transition-colors"
          >
            <div className="mb-4 text-gold group-hover:text-[#F2D18B] transition-colors">
              <AlshamIcon id={icon.id} size={40} strokeWidth={1.5} />
            </div>
            <span className="text-gold text-xs font-mono tracking-wide">{icon.id}</span>
            <span className="text-light text-sm mt-1 text-center">{icon.name}</span>
            <span className="text-platinum text-[10px] mt-1 uppercase tracking-wider opacity-60">
              {icon.category}
            </span>
            <div className="flex gap-3 mt-4 opacity-70">
              <AlshamIcon id={icon.id} size={16} strokeWidth={1.5} />
              <AlshamIcon id={icon.id} size={24} strokeWidth={2} />
              <AlshamIcon id={icon.id} size={32} strokeWidth={1.5} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
