import { motion } from 'framer-motion'
import { FormEvent, useState } from 'react'
import { MARKET_OPTIONS } from '@/lib/constants'

export function CTAFinal() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="aplicar" className="py-24 md:py-32 bg-obsidian relative">
      <div className="absolute top-0 left-0 right-0 gold-line" />

      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 border border-gold/30">
            <span className="text-gold text-lg">⚜</span>
            <span className="section-eyebrow">ALSHAM SELECT™</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-[64px] font-bold text-light leading-tight mb-6">
            Você está pronto para transcender o presente?
          </h2>

          <p className="text-platinum text-lg leading-relaxed">
            Se este manifesto ressoa com a sua visão, a próxima etapa é um diálogo estratégico.
            Aplique ao ALSHAM SELECT™ — nossa curadoria avalia trajetória, potencial de autoridade
            e alinhamento de propósito.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 border border-gold/30"
          >
            <span className="text-gold text-4xl mb-4 block">⚜</span>
            <h3 className="font-display text-2xl text-gold mb-4">Candidatura Recebida</h3>
            <p className="text-platinum">
              Sua aplicação ao ALSHAM SELECT™ foi registrada. Resposta confidencial em até 72h úteis.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Nome completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Nome completo"
                className="underline-input"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                E-mail corporativo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="E-mail corporativo"
                className="underline-input"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="sr-only">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                placeholder="WhatsApp"
                className="underline-input"
              />
            </div>

            <div>
              <label htmlFor="profession" className="sr-only">
                Profissão / Especialidade
              </label>
              <input
                id="profession"
                name="profession"
                type="text"
                required
                placeholder="Profissão / Especialidade"
                className="underline-input"
              />
            </div>

            <div>
              <label htmlFor="vertical" className="sr-only">
                Vertical de mercado
              </label>
              <select id="vertical" name="vertical" required className="underline-input" defaultValue="">
                <option value="" disabled>
                  Vertical de mercado
                </option>
                {MARKET_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="legacy" className="sr-only">
                Breve descrição do seu legado pretendido
              </label>
              <textarea
                id="legacy"
                name="legacy"
                required
                maxLength={200}
                placeholder="Breve descrição do seu legado pretendido (máx. 200 caracteres)"
                className="underline-input"
              />
            </div>

            <button type="submit" className="cta-primary w-full mt-8">
              ▸ APLICAR AO ALSHAM SELECT™
            </button>

            <p className="text-center text-platinum text-xs tracking-wide">
              Resposta confidencial em até 72h úteis.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
