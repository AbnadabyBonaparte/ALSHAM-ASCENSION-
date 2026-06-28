import { motion } from 'framer-motion'
import { ILLUSION_ITEMS, LEGACY_ITEMS } from '@/lib/constants'

export function Paradox() {
  return (
    <section className="py-24 md:py-32 bg-obsidian">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow mb-4">— O Paradoxo do Mercado Digital —</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[56px] font-bold text-light leading-tight">
            Tráfego não é Autoridade.
            <br />
            <span className="text-champagne italic">Viralização não é Legado.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border border-bordeaux/30 bg-onyx/50 p-8 md:p-10"
          >
            <h3 className="text-bordeaux text-sm tracking-[0.1em] uppercase mb-6 font-medium">
              ❌ A Ilusão da Visibilidade
            </h3>
            <ul className="space-y-4">
              {ILLUSION_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-platinum">
                  <span className="w-1.5 h-1.5 rounded-full bg-bordeaux/60 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border border-gold/30 bg-onyx/50 p-8 md:p-10"
          >
            <h3 className="text-gold text-sm tracking-[0.1em] uppercase mb-6 font-medium">
              ✅ A Engenharia do Legado
            </h3>
            <ul className="space-y-4">
              {LEGACY_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display text-2xl md:text-3xl italic text-gold text-center mt-16"
        >
          Autoridade → Ativos → Legado.
        </motion.p>
      </div>
    </section>
  )
}
