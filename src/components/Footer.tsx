import { AlshamIcon } from '@/components/icons'
import type { IconId } from '@/components/icons'
import { FOOTER_COLUMN_ICONS } from '@/lib/constants'

const FOOTER_COLUMNS = [
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre a ALSHAM', href: '#tese' },
      { label: 'Manifesto', href: '#manifesto' },
      { label: 'ALSHAM SELECT™', href: '#aplicar' },
    ],
  },
  {
    title: 'Metodologia',
    links: [
      { label: 'A Jornada', href: '#metodologia' },
      { label: 'Genesis™', href: '#metodologia' },
      { label: 'Vault™', href: '#metodologia' },
    ],
  },
  {
    title: 'Verticais',
    links: [
      { label: 'Saúde', href: '#verticais' },
      { label: 'Jurídico', href: '#verticais' },
      { label: 'Educação', href: '#verticais' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Termos de Uso', href: '#' },
      { label: 'Privacidade (LGPD)', href: '#' },
      { label: 'Contato', href: '#aplicar' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-obsidian border-t border-gold/20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="text-gold text-xs tracking-[0.12em] uppercase mb-4 font-medium flex items-center gap-2">
                <AlshamIcon
                  id={FOOTER_COLUMN_ICONS[column.title as keyof typeof FOOTER_COLUMN_ICONS] as IconId}
                  size={14}
                  strokeWidth={1.5}
                />
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-platinum text-sm hover:text-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gold/10 pt-10 mb-10">
          <h4 className="text-gold text-xs tracking-[0.12em] uppercase mb-6 text-center">
            Universo Bonaparte · ALSHAM
          </h4>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              { label: 'Casa Bonaparte', url: 'https://casabonaparte.com.br' },
              { label: 'ALSHAM Global', url: 'https://alshamglobal.com.br' },
              { label: 'Livraria Bonaparte', url: 'https://livraria.casabonaparte.com.br' },
              { label: 'Aby Bonaparte', url: 'https://abnadabybonaparte.alshamglobal.com.br' },
              { label: 'A Família', url: 'https://the-bonaparte-family.vercel.app' },
              { label: 'ALSHAM Pulso', url: 'https://pulso.alshamglobal.com.br' },
              { label: 'Bonaparte Cast', url: 'https://podcast.casabonaparte.com.br' },
            ].map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-platinum text-xs tracking-[0.1em] uppercase hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-6">
            {/* SUBSTITUIR: @alshamglobal quando criado */}
            <a href="#" className="text-platinum text-xs tracking-[0.1em] uppercase opacity-40">
              Instagram · Em breve
            </a>
            <a href="#" className="text-platinum text-xs tracking-[0.1em] uppercase opacity-40">
              YouTube · Em breve
            </a>
          </div>
        </div>

        <div className="gold-line mb-12" />

        <div className="text-center mb-8">
          <AlshamIcon id="ICO-040" size={36} strokeWidth={1.5} className="mx-auto mb-4" title="ALSHAM Heritage" />
          <p className="font-display text-2xl md:text-3xl text-gold font-semibold tracking-wide mb-4">
            ALSHAM GLOBAL COMMERCE™
          </p>
          <p className="font-display text-champagne italic text-lg max-w-xl mx-auto">
            Transformamos conhecimento em autoridade. Autoridade em ativos. Ativos em legado.
          </p>
        </div>

        <div className="text-center text-platinum text-xs space-y-2 opacity-60">
          <p>© {new Date().getFullYear()} ALSHAM Global Commerce™. Todos os direitos reservados.</p>
          <p>
            Holding de Engenharia de Autoridade, Capital Intelectual e Patrimônio Digital.
          </p>
        </div>
      </div>
    </footer>
  )
}
