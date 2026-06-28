import { motion } from 'framer-motion'
import { AlshamIcon } from '@/components/icons'
import { ARE_ITEMS, NOT_ITEMS } from '@/lib/constants'

export function Differentiators() {
  return (
    <section id="manifesto" className="py-24 md:py-32 bg-obsidian">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow mb-4">— Diferenciação —</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-light">
            O que NÃO Somos vs. O que SOMOS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 border border-gold/20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-gold/20"
          >
            <h3 className="text-bordeaux text-sm tracking-[0.1em] uppercase mb-8 font-medium flex items-center gap-3">
              <AlshamIcon id="ICO-009" size={20} strokeWidth={1.5} className="text-bordeaux" stroke="currentColor" />
              O que a ALSHAM NÃO é
            </h3>
            <ul className="space-y-5">
              {NOT_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-platinum">
                  <span className="text-bordeaux mt-1.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 md:p-10"
          >
            <h3 className="text-gold text-sm tracking-[0.1em] uppercase mb-8 font-medium flex items-center gap-3">
              <AlshamIcon id="ICO-007" size={20} strokeWidth={1.5} />
              O que a ALSHAM é
            </h3>
            <ul className="space-y-5">
              {ARE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-light">
                  <span className="text-gold mt-1.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
