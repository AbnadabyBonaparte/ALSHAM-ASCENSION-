import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { AlshamIcon } from '@/components/icons'
import { HERO_ASSETS, useHeroImageSrc } from '@/lib/heroAssets'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { src, format, handleError } = useHeroImageSrc()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])

  return (
    <section
      ref={sectionRef}
      className="hero-observatory relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="The Observatory — HERO-001"
      data-hero-format={format}
    >
      <motion.div className="hero-observatory__media absolute inset-0" style={{ y: imageY }}>
        {src ? (
          <img
            key={src}
            src={src}
            alt=""
            className="hero-observatory__image"
            fetchPriority="high"
            decoding="async"
            loading="eager"
            onError={handleError}
          />
        ) : null}
      </motion.div>

      <div className="hero-observatory__overlay absolute inset-0" aria-hidden />
      <div className="hero-observatory__vignette absolute inset-0" aria-hidden />
      <div className="hero-observatory__glow absolute inset-0" aria-hidden />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center pt-24 pb-20 sm:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="section-eyebrow mb-8 hero-observatory__text"
        >
          — Holding de Engenharia de Autoridade —
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-bold text-light leading-[1.08] mb-8 hero-observatory__headline"
        >
          A maioria vende tempo.
          <br />
          <span className="text-champagne italic">Nós construímos legado.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
          className="text-champagne text-lg sm:text-xl md:text-[22px] max-w-3xl mx-auto mb-12 font-light hero-observatory__text"
        >
          Transformamos conhecimento humano em patrimônio intelectual mensurável,
          autoridade reconhecida e legado duradouro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#aplicar" className="cta-primary w-full sm:w-auto text-center">
            REQUISITAR DIAGNÓSTICO DE AUTORIDADE™
          </a>
          <a
            href="#manifesto"
            className="cta-outlined w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
          >
            ASSISTIR AO MANIFESTO
            <AlshamIcon id="ICO-038" size={16} strokeWidth={1.5} />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-platinum text-sm opacity-70 hero-observatory__text"
        >
          Acesso por curadoria. Nem todo profissional se qualifica.
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent opacity-80"
        />
      </div>
    </section>
  )
}

// Re-export for preload hints in index.html documentation
export { HERO_ASSETS }
