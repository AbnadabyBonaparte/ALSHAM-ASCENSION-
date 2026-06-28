import { motion } from 'framer-motion'
import { useState } from 'react'
import { JOURNEY_STEPS } from '@/lib/constants'

export function Journey() {
  const [activeStep, setActiveStep] = useState<string | null>(null)

  return (
    <section id="metodologia" className="py-24 md:py-32 bg-obsidian">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow mb-4">— A Jornada —</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-light">
            O Mapa do Patrimônio
          </h2>
          <p className="text-platinum mt-4 max-w-2xl mx-auto">
            Nove etapas sequenciais. Cada fase prepara a próxima. Nenhuma substitui a anterior.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gold/20" />

          {JOURNEY_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative pl-16 pb-10 last:pb-0 group"
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div
                className={`absolute left-0 top-1 w-14 h-14 border flex items-center justify-center transition-all duration-300 ${
                  activeStep === step.id
                    ? 'border-gold bg-gold/10 shadow-[0_0_20px_color-mix(in_srgb,var(--color-gold)_20%,transparent)]'
                    : 'border-gold/30 bg-onyx'
                }`}
              >
                <span className="font-display text-gold text-lg">{step.id}</span>
              </div>

              <div
                className={`p-6 border transition-all duration-300 ${
                  activeStep === step.id
                    ? 'border-gold/40 bg-onyx -translate-y-1'
                    : 'border-transparent bg-onyx/30'
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <h3 className="font-display text-xl text-light font-semibold">{step.name}</h3>
                  <span className="text-gold text-sm tracking-wide">— {step.tagline}</span>
                </div>
                <p
                  className={`text-platinum text-sm transition-all duration-300 ${
                    activeStep === step.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden md:opacity-60 md:max-h-20'
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
