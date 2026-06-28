import { motion } from 'framer-motion'

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 4,
  size: Math.random() * 3 + 1,
}))

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-obsidian">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, color-mix(in srgb, var(--color-gold) 8%, transparent) 0%, transparent 60%)',
          }}
        />
        {PARTICLES.map((p) => (
          <div
            key={p.id}
            className="particle absolute rounded-full bg-gold"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="section-eyebrow mb-8"
        >
          — Holding de Engenharia de Autoridade —
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold text-light leading-[1.1] mb-8"
        >
          A maioria vende tempo.
          <br />
          <span className="text-champagne italic">Nós construímos legado.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-champagne text-lg sm:text-xl md:text-[22px] max-w-3xl mx-auto mb-12 font-light"
        >
          Transformamos conhecimento humano em patrimônio intelectual mensurável,
          autoridade reconhecida e legado duradouro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#aplicar" className="cta-primary w-full sm:w-auto text-center">
            REQUISITAR DIAGNÓSTICO DE AUTORIDADE™
          </a>
          <a href="#manifesto" className="cta-outlined w-full sm:w-auto text-center">
            ASSISTIR AO MANIFESTO ▸
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="text-platinum text-sm opacity-60"
        >
          Acesso por curadoria. Nem todo profissional se qualifica.
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
        />
      </div>
    </section>
  )
}
