import { JOURNEY_ICON_MAP, VERTICAL_ICON_MAP } from '@/components/icons'
import type { IconId } from '@/components/icons'

export const JOURNEY_STEPS = [
  {
    id: '00',
    name: 'ALSHAM SELECT™',
    tagline: 'Curadoria Estratégica',
    description: 'Avaliação criteriosa do potencial de autoridade, reputação e alinhamento de legado.',
    iconId: JOURNEY_ICON_MAP['00'] as IconId,
  },
  {
    id: '01',
    name: 'ALSHAM GENESIS™',
    tagline: 'Engenharia de Identidade',
    description: 'Mapeamento do DNA intelectual, arquitetura de marca e implantação do Digital HQ™.',
    iconId: JOURNEY_ICON_MAP['01'] as IconId,
  },
  {
    id: '02',
    name: 'ALSHAM SENTINEL™',
    tagline: 'Operação de Autoridade',
    description: 'Expansão contínua do patrimônio digital através de conteúdo estratégico e SEO.',
    iconId: JOURNEY_ICON_MAP['02'] as IconId,
  },
  {
    id: '03',
    name: 'ALSHAM INTELLIGENCE™',
    tagline: 'Inteligência Operacional',
    description: 'Agentes Cognitivos treinados no seu DNA para escalabilidade operacional.',
    iconId: JOURNEY_ICON_MAP['03'] as IconId,
  },
  {
    id: '04',
    name: 'ALSHAM ACADEMIC™',
    tagline: 'Autoridade Acadêmica',
    description: 'Transformação em referência acadêmica e institucional documentada.',
    iconId: JOURNEY_ICON_MAP['04'] as IconId,
  },
  {
    id: '05',
    name: 'ALSHAM LEGACY™',
    tagline: 'Monetização do Conhecimento',
    description: 'Capitalização da autoridade em produtos que geram receita independente do tempo.',
    iconId: JOURNEY_ICON_MAP['05'] as IconId,
  },
  {
    id: '06',
    name: 'ALSHAM CAPITAL™',
    tagline: 'Gestão de Patrimônio Intelectual',
    description: 'Licenciamento, marcas e metodologias transformados em patrimônio mensurável.',
    iconId: JOURNEY_ICON_MAP['06'] as IconId,
  },
  {
    id: '07',
    name: 'ALSHAM VENTURES™',
    tagline: 'Joint Ventures Estratégicas',
    description: 'Parcerias em revenue share, equity e licenciamento para escala exponencial.',
    iconId: JOURNEY_ICON_MAP['07'] as IconId,
  },
  {
    id: '08',
    name: 'ALSHAM VAULT™',
    tagline: 'Knowledge Vault™',
    description: 'Preservação e multiplicação do patrimônio intelectual em banco proprietário.',
    iconId: JOURNEY_ICON_MAP['08'] as IconId,
  },
] as const

export const VERTICALS = [
  { iconId: VERTICAL_ICON_MAP['Saúde'] as IconId, title: 'Saúde', description: 'Médicos, Dentistas, Clínicas de Alto Padrão' },
  { iconId: VERTICAL_ICON_MAP['Jurídico'] as IconId, title: 'Jurídico', description: 'Advogados, Escritórios, Peritos' },
  { iconId: VERTICAL_ICON_MAP['Educação'] as IconId, title: 'Educação', description: 'Professores, Pesquisadores, Mentores' },
  { iconId: VERTICAL_ICON_MAP['Negócios'] as IconId, title: 'Negócios', description: 'Empresários, Executivos, Consultores' },
  { iconId: VERTICAL_ICON_MAP['Setor Público'] as IconId, title: 'Setor Público', description: 'Especialistas e Acadêmicos' },
  { iconId: VERTICAL_ICON_MAP['Mídia & Influência'] as IconId, title: 'Mídia & Influência', description: 'Autores, Palestrantes, Criadores' },
] as const

export const ILLUSION_ITEMS = [
  'Tráfego efêmero',
  'Métricas de vaidade',
  'Viralização passageira',
  'Achismo e ego',
  '"Bombar nas redes"',
] as const

export const LEGACY_ITEMS = [
  'Autoridade consolidada',
  'Patrimônio mensurável',
  'Reconhecimento perene',
  'Curadoria estratégica orientada por dados',
  'Engenharia de identidade',
] as const

export const NOT_ITEMS = [
  'Agência de marketing digital',
  'Vendedora de tráfego e cliques',
  'Desenvolvedora de sites isolados',
  'Consultoria baseada em achismo',
] as const

export const ARE_ITEMS = [
  'Holding de Engenharia de Autoridade',
  'Arquiteta de Capital Intelectual',
  'Construtora de Patrimônio Digital',
  'Curadoria orientada por dados e IA',
] as const

export const TICKER_ITEMS = [
  'ENGENHARIA DE AUTORIDADE',
  'CAPITAL INTELECTUAL',
  'PROPRIEDADE INTELECTUAL',
  'PATRIMÔNIO DIGITAL',
] as const

export const MARKET_OPTIONS = [
  'Saúde',
  'Jurídico',
  'Educação',
  'Negócios',
  'Setor Público',
  'Mídia & Influência',
] as const

export const TRUST_METRICS = [
  { value: 9, suffix: '', label: 'Etapas da Metodologia', iconId: 'ICO-017' as IconId },
  { value: 6, suffix: '', label: 'Verticais de Mercado', iconId: 'ICO-036' as IconId },
  { value: 100, suffix: '%', label: 'Foco em Legado', iconId: 'ICO-011' as IconId },
] as const

export const INSTITUTIONAL_BADGES = [
  { label: 'Universidades', iconId: 'ICO-026' as IconId },
  { label: 'Institutos', iconId: 'ICO-004' as IconId },
  { label: 'Associações', iconId: 'ICO-024' as IconId },
  { label: 'Certificadoras', iconId: 'ICO-010' as IconId },
] as const

export const FOOTER_COLUMN_ICONS = {
  Empresa: 'ICO-040' as IconId,
  Metodologia: 'ICO-017' as IconId,
  Verticais: 'ICO-036' as IconId,
  Legal: 'ICO-029' as IconId,
}
