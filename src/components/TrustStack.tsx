import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { AlshamIcon } from '@/components/icons'
import type { IconId } from '@/components/icons'
import { INSTITUTIONAL_BADGES, TRUST_METRICS } from '@/lib/constants'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl italic text-gold">
      {count}
      {suffix}
    </span>
  )
}

const METRICS = TRUST_METRICS

const TESTIMONIALS = [
  {
    quote:
      'A ALSHAM não vendeu marketing. Estruturou meu conhecimento como patrimônio intelectual mensurável.',
    author: 'Especialista em Saúde',
  },
  {
    quote:
      'Pela primeira vez, minha autoridade foi tratada como ativo empresarial, não como perfil de rede social.',
    author: 'Executivo de Negócios',
  },
] as const

export function TrustStack() {
  return (
    <section className="py-24 md:py-32 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-eyebrow mb-4">— Provas de Autoridade —</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-light">
            Engenharia Comprovada
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 border border-gold/20"
            >
              <AlshamIcon id={metric.iconId as IconId} size={32} strokeWidth={1.5} className="mx-auto mb-4" />
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <p className="text-platinum text-sm mt-3 tracking-wide">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 border-l-2 border-gold bg-obsidian/50"
            >
              <span className="font-display text-4xl text-gold/40 leading-none">"</span>
              <p className="font-display text-lg italic text-champagne -mt-2 mb-4">{item.quote}</p>
              <footer className="text-platinum text-sm">— {item.author}</footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 opacity-40"
        >
          {INSTITUTIONAL_BADGES.map((badge) => (
            <span
              key={badge.label}
              className="flex items-center gap-2 text-platinum text-xs tracking-[0.15em] uppercase"
            >
              <AlshamIcon id={badge.iconId} size={16} strokeWidth={1.5} />
              {badge.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
