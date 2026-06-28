import { motion } from 'framer-motion'
import { AlshamIcon } from '@/components/icons'
import { VERTICALS } from '@/lib/constants'

export function TargetAudience() {
  return (
    <section id="verticais" className="py-24 md:py-32 bg-onyx">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow mb-4">— Para Quem É —</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-light">
            Seis Verticais de Mercado
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERTICALS.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-8 border border-gold/10 bg-obsidian hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
            >
              <AlshamIcon id={vertical.iconId} size={36} strokeWidth={1.5} className="mb-4" />
              <h3 className="font-display text-xl text-gold mb-2">{vertical.title}</h3>
              <p className="text-platinum text-sm">{vertical.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-gold text-sm tracking-[0.1em] uppercase mt-12"
        >
          Acesso restrito por avaliação ALSHAM SELECT™
        </motion.p>
      </div>
    </section>
  )
}
