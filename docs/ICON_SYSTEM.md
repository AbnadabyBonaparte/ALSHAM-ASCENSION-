# ALSHAM Icon System™
## Sistema Proprietário de Símbolos Institucionais

---

## METADADOS

| Campo | Valor |
|-------|-------|
| **ID** | `DOC-ICON-01` |
| **Nome** | ALSHAM Icon System™ |
| **Versão** | 1.0 |
| **Status** | Produção |
| **Proprietário** | ALSHAM Global Commerce™ |
| **Dependências** | DOC-03, DOC-03A, DOC-05 |
| **Última revisão** | 2026-06-28 |

---

# 1. FILOSOFIA

A ALSHAM não utiliza ícones de bibliotecas públicas. Utiliza **símbolos institucionais** — gravuras lineares derivadas de arquitetura clássica, observatórios, instrumentos científicos, cartografia e selos de autoridade.

**Referências obrigatórias:** arquitetura clássica · observatórios · instrumentos de medição · mapas náuticos · gravuras renascentistas · códices · geometria sagrada · engenharia · selos institucionais.

**Proibido:** emoji · flat SaaS · rounded cartoon · outline mobile · bibliotecas públicas (Lucide, Heroicons, Feather, Font Awesome, Tabler, Remix, Bootstrap, Material, Phosphor).

---

# 2. GRID GEOMÉTRICO

| Propriedade | Valor |
|-------------|-------|
| ViewBox | `0 0 48 48` |
| Módulo base | 4px |
| Origem | Centro do símbolo ALSHAM (ICO-040 Heritage) |
| Alinhamento | Pixel-perfect ao grid 4×4 |
| Raio | Quadrado / miter — sem cantos arredondados SaaS |
| Ângulo | 45° e 90° predominantes |

Todos os símbolos nascem do mesmo sistema geométrico do selo Heritage (ICO-040).

---

# 3. LINGUAGEM VISUAL

| Propriedade | Valor |
|-------------|-------|
| Estilo | Line art exclusivo |
| Stroke padrão | 1.5px |
| Stroke alternativo | 2px (ênfase, tamanhos ≥32px) |
| Preenchimento | Nenhum (`fill="none"`) |
| Sombra | Proibida nos símbolos |
| Gradiente | Proibido nos símbolos |
| Linecap | `square` |
| Linejoin | `miter` |

---

# 4. PALETA

| Estado | Hex | Uso |
|--------|-----|-----|
| Stroke principal | `#C6A45A` | Estado padrão |
| Hover | `#F2D18B` | Interação |
| Fundo | `transparent` | Sempre |

CSS: classe `.alsham-icon` em `src/index.css`.

---

# 5. ÁREA DE PROTEÇÃO

- Margem mínima ao redor do símbolo: **4px** (1 módulo do grid)
- Não sobrepor texto dentro da área de proteção
- Tamanho mínimo em UI: **16px**
- Tamanho recomendado: **24px** (corpo) · **32–40px** (destaque)

---

# 6. USO CORRETO

- Símbolos como **marcação semântica** institucional
- Pares com tipografia Cormorant Garamond / Inter
- Stroke dourado sobre fundos obsidian, onyx, navy
- Hover sutil (#F2D18B) em elementos interativos
- `AlshamIcon` com `title` quando carrega significado acessível

---

# 7. USO INCORRETO

- Redimensionar fora de proporção (distorcer viewBox)
- Aplicar fill, sombra ou gradiente
- Usar em fundos claros sem contraste
- Misturar com ícones de bibliotecas públicas
- Usar emoji ou unicode decorativo (⚜ ▸ ❌ ✅)
- Rotacionar símbolos arbitrariamente

---

# 8. COMPONENTIZAÇÃO

```
src/components/icons/
  AlshamIcon.tsx      — Componente React reutilizável
  iconRegistry.ts     — 40 definições ICO-001…ICO-040
  types.ts            — IconId, AlshamIconProps
  IconSystemShowcase.tsx — Preview interno
  index.ts            — Exports públicos
```

### Props

| Prop | Tipo | Default |
|------|------|---------|
| `id` | `IconId` | obrigatório |
| `size` | `number` | `24` |
| `strokeWidth` | `1.5 \| 2` | `1.5` |
| `className` | `string` | `''` |
| `title` | `string` | — |
| `stroke` | `string` | `currentColor` |

### Exemplo

```tsx
import { AlshamIcon } from '@/components/icons'

<AlshamIcon id="ICO-040" size={24} strokeWidth={1.5} title="Heritage" />
```

---

# 9. BIBLIOTECA v1.0 — 40 SÍMBOLOS

| ID | Nome | Categoria | Arquivo |
|----|------|-----------|---------|
| ICO-001 | Foundation | Foundation | `ico-001-foundation.svg` |
| ICO-002 | Infrastructure | Infrastructure | `ico-002-infrastructure.svg` |
| ICO-003 | Expansion | Expansion | `ico-003-expansion.svg` |
| ICO-004 | Institutional | Institutional | `ico-004-institutional.svg` |
| ICO-005 | Assets | Assets | `ico-005-assets.svg` |
| ICO-006 | Management | Management | `ico-006-management.svg` |
| ICO-007 | Authority | Authority | `ico-007-authority.svg` |
| ICO-008 | Knowledge | Knowledge | `ico-008-knowledge.svg` |
| ICO-009 | Research | Research | `ico-009-research.svg` |
| ICO-010 | Governance | Governance | `ico-010-governance.svg` |
| ICO-011 | Legacy | Legacy | `ico-011-legacy.svg` |
| ICO-012 | Vault | Vault | `ico-012-vault.svg` |
| ICO-013 | Observatory | Observatory | `ico-013-observatory.svg` |
| ICO-014 | Select | Select | `ico-014-select.svg` |
| ICO-015 | Project | Project | `ico-015-project.svg` |
| ICO-016 | Architecture | Architecture | `ico-016-architecture.svg` |
| ICO-017 | Strategy | Strategy | `ico-017-strategy.svg` |
| ICO-018 | Evidence | Evidence | `ico-018-evidence.svg` |
| ICO-019 | Canon | Canon | `ico-019-canon.svg` |
| ICO-020 | Documentation | Documentation | `ico-020-documentation.svg` |
| ICO-021 | Automation | Automation | `ico-021-automation.svg` |
| ICO-022 | AI | AI | `ico-022-ai.svg` |
| ICO-023 | Security | Security | `ico-023-security.svg` |
| ICO-024 | Community | Community | `ico-024-community.svg` |
| ICO-025 | Publishing | Publishing | `ico-025-publishing.svg` |
| ICO-026 | Education | Education | `ico-026-education.svg` |
| ICO-027 | Finance | Finance | `ico-027-finance.svg` |
| ICO-028 | Health | Health | `ico-028-health.svg` |
| ICO-029 | Law | Law | `ico-029-law.svg` |
| ICO-030 | Technology | Technology | `ico-030-technology.svg` |
| ICO-031 | Culture | Culture | `ico-031-culture.svg` |
| ICO-032 | Innovation | Innovation | `ico-032-innovation.svg` |
| ICO-033 | Compass | Compass | `ico-033-compass.svg` |
| ICO-034 | Codex | Codex | `ico-034-codex.svg` |
| ICO-035 | Archive | Archive | `ico-035-archive.svg` |
| ICO-036 | Map | Map | `ico-036-map.svg` |
| ICO-037 | Constellation | Constellation | `ico-037-constellation.svg` |
| ICO-038 | Navigation | Navigation | `ico-038-navigation.svg` |
| ICO-039 | Engineering | Engineering | `ico-039-engineering.svg` |
| ICO-040 | Heritage | Heritage | `ico-040-heritage.svg` |

Assets: `public/assets/icons/`

---

# 10. PREVIEW

- **Rota dev:** `?preview=icons`
- **Screenshot:** `docs/previews/icon-system-v1.png`
- **Componente:** `IconSystemShowcase`

---

# 11. MAPEAMENTO LANDING

| Seção | Símbolos |
|-------|----------|
| TopBar / Loader / CTA / Footer | ICO-040 Heritage |
| Hero / CTAFinal (ação) | ICO-038 Navigation |
| Journey | ICO-014…ICO-012 por etapa |
| Verticais | ICO-028…ICO-025 |
| Paradox | ICO-033 / ICO-011 |
| Differentiators | ICO-009 / ICO-007 |
| TrustStack | ICO-017 / ICO-036 / ICO-011 + badges |

---

**ALSHAM GLOBAL COMMERCE™**  
*Knowledge Engineered Into Legacy.*
