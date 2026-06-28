import { motion } from 'framer-motion'

export function Thesis() {
  return (
    <section id="tese" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <div className="font-display text-[120px] md:text-[200px] text-gold whitespace-nowrap -rotate-12 absolute -top-20 -left-20">
          LEGADO · AUTORIDADE · PATRIMÔNIO ·
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="font-display text-6xl text-gold/30 leading-none block mb-4">"</span>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl text-champagne leading-relaxed font-light">
            Não vendemos marketing. Não vendemos seguidores. Não vendemos sites.
            Não vendemos inteligência artificial.{' '}
            <span className="text-light font-semibold not-italic">
              Construímos Patrimônios Digitais de Autoridade.
            </span>
          </p>
          <span className="font-display text-6xl text-gold/30 leading-none block mt-4">"</span>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="section-eyebrow">— ALSHAM GLOBAL COMMERCE™ —</p>
        </motion.div>
      </div>
    </section>
  )
}
