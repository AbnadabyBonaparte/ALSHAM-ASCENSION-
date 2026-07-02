import { motion } from 'framer-motion'
import { useState } from 'react'
import { AlshamIcon } from '@/components/icons'
import type { IconId } from '@/components/icons'

const PILLARS = [
  {
    title: 'Diagnóstico honesto',
    iconId: 'ICO-009' as IconId,
    description:
      'Antes de qualquer proposta, entendemos o negócio real. O que funciona, o que drena, o que precisa mudar. Não vendemos solução antes de entender o problema.',
  },
  {
    title: 'Co-construção',
    iconId: 'ICO-024' as IconId,
    description:
      'Não entregamos um produto e saímos. Ficamos enquanto o sistema não está funcionando sozinho. A parceria é de resultado, não de entrega.',
  },
  {
    title: 'Dados antes de intuição',
    iconId: 'ICO-018' as IconId,
    description:
      'Cada decisão tem base. Cada sistema tem métrica. Cada resultado é documentado. Nenhuma promessa sem indicador verificável.',
  },
] as const

const PARTNERSHIP_STEPS = [
  {
    step: '01',
    name: 'Diagnóstico',
    duration: '48h',
    description:
      'Conversa inicial. Mapeamento do negócio. Identificação dos 3 maiores gargalos. Sem custo. Sem compromisso.',
  },
  {
    step: '02',
    name: 'Proposta de estrutura',
    duration: '7 dias',
    description:
      'Proposta personalizada com sistemas, agentes e plataforma. Modelo de parceria definido. Cronograma real, não estimativa genérica.',
  },
  {
    step: '03',
    name: 'Piloto',
    duration: '30 dias',
    description:
      'Implementação controlada. Um sistema por vez. Métricas definidas antes de começar. Ajustes em tempo real.',
  },
  {
    step: '04',
    name: 'Escala',
    duration: 'Contínuo',
    description:
      'O que funciona no piloto entra em escala. Novos sistemas adicionados conforme maturidade. A operação cresce sem o fundador no centro.',
  },
] as const

const WHAT_WE_BRING = [
  {
    title: 'Agentes de IA',
    iconId: 'ICO-022' as IconId,
    acento: '#10B981',
    description:
      'Sistemas autônomos que executam tarefas repetitivas, nutrem leads, respondem clientes e geram relatórios — sem supervisão constante.',
  },
  {
    title: 'Sistema de gestão',
    iconId: 'ICO-006' as IconId,
    acento: '#5B8CFF',
    description:
      'CRM, pipeline de vendas, controle financeiro e gestão de equipe integrados. Uma visão única de tudo que acontece no negócio.',
  },
  {
    title: 'Plataforma digital',
    iconId: 'ICO-030' as IconId,
    acento: '#C7A24A',
    description:
      'Landing pages, checkout, área de membros e automações de marketing. A presença digital que converte, não só que existe.',
  },
  {
    title: 'Estratégia de crescimento',
    iconId: 'ICO-017' as IconId,
    acento: '#EC4899',
    description:
      'Não apenas ferramentas — um plano. O que fazer agora, o que escalar depois, o que nunca fazer. Direção antes de execução.',
  },
] as const

const WHAT_PARTNER_BRINGS = [
  'Comprometimento com o processo — não apenas com o resultado. Quem quer atalho não é parceiro ALSHAM.',
  'Dados reais do negócio — faturamento, custos, equipe, gargalos. Sem transparência não existe diagnóstico honesto.',
  'Disposição para mudar — sistemas novos exigem processos novos. Quem não muda nada não pode esperar resultados diferentes.',
] as const

const PARTNERSHIP_MODELS = [
  {
    title: 'Revenue Share',
    badge: 'Mais comum',
    acento: '#10B981',
    description:
      'A ALSHAM entra com sistema e estratégia. O parceiro entra com o negócio. Dividimos o crescimento.',
    fit: 'Quando faz sentido: negócios com receita existente que querem escalar sem risco de caixa.',
  },
  {
    title: 'Licenciamento',
    badge: null,
    acento: '#5B8CFF',
    description:
      'O parceiro licencia a tecnologia ALSHAM e opera com autonomia crescente. Suporte e atualizações incluídos.',
    fit: 'Quando faz sentido: empresas com equipe técnica própria que querem a plataforma ALSHAM.',
  },
  {
    title: 'Co-produto',
    badge: null,
    acento: '#C7A24A',
    description:
      'Construímos juntos um produto novo. Propriedade intelectual compartilhada. Go-to-market conjunto.',
    fit: 'Quando faz sentido: especialistas de nicho com audiência e sem estrutura tecnológica.',
  },
  {
    title: 'Consultoria estratégica',
    badge: null,
    acento: '#8B5CF6',
    description:
      'A ALSHAM entra como conselho estratégico. Definimos o que construir, como construir e quando escalar. Sem execução direta.',
    fit: 'Quando faz sentido: fundadores que precisam de direção antes de investir em execução.',
  },
] as const

const FAQ_ITEMS = [
  {
    question: 'O que diferencia a ALSHAM de uma agência de marketing?',
    answer:
      'Agências entregam campanhas. A ALSHAM constrói sistemas. A diferença é que sistemas continuam funcionando depois que a agência vai embora. Não vendemos presença — vendemos estrutura.',
  },
  {
    question: 'Quanto tempo leva para ver resultado?',
    answer:
      'Depende do piloto. Sistemas de atendimento automático: 7 a 14 dias. CRM integrado: 15 a 30 dias. Escala de receita: 60 a 90 dias. Prometemos o que podemos medir, não o que soa bem em proposta.',
  },
  {
    question: 'Preciso ter equipe técnica?',
    answer:
      'Não. Os sistemas ALSHAM são operados por interface. Onde a configuração é complexa, nossa equipe cuida. O parceiro opera — não programa.',
  },
  {
    question: 'Qual o investimento mínimo?',
    answer:
      'Depende do modelo. Revenue share pode começar sem investimento fixo. Licenciamento e co-produto têm valores que discutimos no diagnóstico. Não existe proposta antes de diagnóstico.',
  },
  {
    question: 'A ALSHAM trabalha com qualquer segmento?',
    answer:
      'Não. Trabalhamos com negócios onde a tecnologia muda resultado — saúde, jurídico, educação, serviços B2B, e-commerce. Segmentos que exigem volume e relacionamento, não venda pontual.',
  },
  {
    question: 'O que acontece se o piloto não funcionar?',
    answer:
      'Documentamos o que funcionou, o que não funcionou e por quê. Nenhuma parceria continua sem resultado verificável. Preferimos encerrar bem a escalar mal.',
  },
] as const

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <p className="section-eyebrow mb-4">— {eyebrow} —</p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-light">{title}</h2>
      {subtitle ? <p className="text-platinum mt-4 max-w-2xl mx-auto">{subtitle}</p> : null}
    </motion.div>
  )
}

export function BibliotecaALSHAM() {
  const [activeBring, setActiveBring] = useState<string | null>(null)
  const [activeModel, setActiveModel] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      {/* SEÇÃO 1 — Como a ALSHAM pensa */}
      <section id="como-pensamos" className="py-24 md:py-32 bg-onyx">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Como Pensamos"
            title="Não trabalhamos para você. Trabalhamos com você."
            subtitle="A diferença é estrutural."
          />

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group p-8 border border-gold/10 bg-obsidian hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
              >
                <AlshamIcon id={pillar.iconId} size={36} strokeWidth={1.5} className="mb-4" />
                <h3 className="font-display text-xl text-gold mb-3">{pillar.title}</h3>
                <p className="text-platinum text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — Como funciona uma parceria */}
      <section id="como-funciona" className="py-24 md:py-32 bg-obsidian">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader eyebrow="O Processo" title="Do diagnóstico ao sistema rodando." />

          <div className="relative">
            <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gold/20" />

            {PARTNERSHIP_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative pl-16 pb-10 last:pb-0"
              >
                <div className="absolute left-0 top-1 w-14 h-14 border border-gold/30 bg-onyx flex items-center justify-center text-gold font-display text-lg">
                  {step.step}
                </div>

                <div className="p-6 border border-transparent bg-onyx/30">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3 className="font-display text-xl text-light font-semibold">{step.name}</h3>
                    <span className="text-gold text-sm tracking-wide">— {step.duration}</span>
                  </div>
                  <p className="text-platinum text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — O que a ALSHAM traz */}
      <section id="o-que-trazemos" className="py-24 md:py-32 bg-navy">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Nossa Estrutura"
            title="A estrutura que você não tem tempo de construir."
          />

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {WHAT_WE_BRING.map((card, index) => {
              const isActive = activeBring === card.title
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setActiveBring(card.title)}
                  onMouseLeave={() => setActiveBring(null)}
                  className="p-8 border-t-2 bg-obsidian/50 transition-transform duration-300"
                  style={{
                    borderTopColor: card.acento,
                    transform: isActive ? 'translateY(-3px)' : 'translateY(0)',
                    boxShadow: isActive ? `0 12px 32px ${card.acento}33` : 'none',
                  }}
                >
                  <AlshamIcon
                    id={card.iconId}
                    size={32}
                    strokeWidth={1.5}
                    className="mb-4"
                    stroke={card.acento}
                  />
                  <h3 className="font-display text-xl text-light mb-3">{card.title}</h3>
                  <p className="text-platinum text-sm leading-relaxed">{card.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — O que o parceiro traz */}
      <section id="o-que-voce-traz" className="py-24 md:py-32 bg-obsidian">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            eyebrow="Contrapartida"
            title="A parceria funciona quando os dois lados estão comprometidos."
            subtitle="Não trabalhamos com qualquer empresa. Escolhemos parceiros."
          />

          <div className="space-y-6">
            {WHAT_PARTNER_BRINGS.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-2 border-gold pl-6 py-2"
              >
                <p className="text-light text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — Modelos de parceria */}
      <section id="modelos" className="py-24 md:py-32 bg-onyx">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader eyebrow="Modelos de Parceria" title="Cada negócio tem um modelo certo." />

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {PARTNERSHIP_MODELS.map((model, index) => {
              const isActive = activeModel === model.title
              return (
                <motion.div
                  key={model.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setActiveModel(model.title)}
                  onMouseLeave={() => setActiveModel(null)}
                  className="relative p-8 border bg-obsidian transition-transform duration-300"
                  style={{
                    borderColor: isActive ? model.acento : 'color-mix(in srgb, var(--color-gold) 15%, transparent)',
                    transform: isActive ? 'translateY(-3px)' : 'translateY(0)',
                    boxShadow: isActive ? `0 12px 32px ${model.acento}33` : 'none',
                  }}
                >
                  {model.badge ? (
                    <span
                      className="absolute -top-3 right-6 text-obsidian text-xs font-semibold tracking-wide uppercase px-3 py-1"
                      style={{ backgroundColor: model.acento }}
                    >
                      {model.badge}
                    </span>
                  ) : null}

                  <h3 className="font-display text-xl mb-3" style={{ color: model.acento }}>
                    {model.title}
                  </h3>
                  <p className="text-light text-sm leading-relaxed mb-4">{model.description}</p>
                  <p className="text-platinum text-xs leading-relaxed uppercase tracking-wide">{model.fit}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — Perguntas frequentes */}
      <section id="faq" className="py-24 md:py-32 bg-navy">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader eyebrow="Perguntas Frequentes" title="Antes de aplicar, tire suas dúvidas." />

          <div className="border border-gold/20 divide-y divide-gold/20">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-obsidian/40 transition-colors"
                  >
                    <span className="font-display text-lg text-light">{item.question}</span>
                    <span className="text-gold text-2xl leading-none shrink-0">{isOpen ? '−' : '+'}</span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="text-platinum text-sm leading-relaxed px-6 pb-6">{item.answer}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
