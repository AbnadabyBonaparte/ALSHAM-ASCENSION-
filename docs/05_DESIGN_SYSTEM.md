# ALSHAM GLOBAL COMMERCE™
# 05 — DESIGN SYSTEM
## Tokens Técnicos e Semânticos

---

## METADADOS DO DOCUMENTO

| Campo | Valor |
|-------|-------|
| **ID** | `DOC-05` |
| **Nome** | Design System |
| **Versão** | 1.0 |
| **Status** | Aprovado |
| **Proprietário** | ALSHAM Global Commerce™ |
| **Dependências** | DOC-03, DOC-03A, DOC-04 |
| **Documentos relacionados** | DOC-06, DOC-07, DOC-11 |
| **Documento pai** | DOC-03A |
| **Última revisão** | 2026-06-28 |
| **Data** | 2026-06-28 |
| **Histórico** | v1.0 — Tokens semânticos + técnicos unificados |
| **Impacto** | Código, design, prompts de IA |
| **Nível de autoridade** | Operacional |

---

# I. DESIGN TOKENS CONCEITUAIS (SEMÂNTICOS)

> Orientam design, código e prompts. Cada token carrega significado da jornada Conhecimento → Legado.

## Conhecimento

```css
--knowledge-primary: #141518;      /* Onyx — organização do bruto */
--knowledge-surface: #1A1A1F;      /* Superfície de arquivo */
--knowledge-texture: url('/assets/textures/mat-papel-algodao.webp');
--knowledge-accent: #8A8A8A;       /* Platinum — dados secundários */
```

## Autoridade

```css
--authority-primary: #0B1B2E;     /* Royal Navy — instituição */
--authority-surface: #0A0A0B;       /* Obsidian — gravidade */
--authority-light: #C9A55C;         /* Gold rim — legitimidade */
--presence-light: rgba(201, 165, 92, 0.3); /* Consciência, revelação */
```

## Ativos

```css
--assets-primary: #1A1A1F;
--assets-structure: #2A2A2E;       /* Aço escurecido */
--assets-line: #C9A55C;            /* Diagrama gold */
```

## Patrimônio

```css
--patrimony-primary: #0A0A0B;
--patrimony-gold: #C9A55C;         /* Valor protegido */
--patrimony-surface: #141518;
--heritage-shadow: rgba(10, 10, 11, 0.85);
```

## Legado

```css
--legacy-primary: #0B1B2E;
--legacy-highlight: #E8D5A3;        /* Champagne — transcendência */
--legacy-horizon: linear-gradient(180deg, transparent, #0B1B2E);
```

## Memória e transparência

```css
--memory-texture: url('/assets/textures/mat-carvalho-escuro.webp');
--memory-paper: #F5F2EC;
--transparency-glass: rgba(26, 26, 31, 0.4);
--transparency-border: rgba(201, 165, 92, 0.15);
```

## Mapeamento semântico → Arquitetura

| Token prefix | Arquitetura |
|--------------|-------------|
| `knowledge.*` | Arquitetura do Conhecimento |
| `authority.*` | Arquitetura da Autoridade |
| `assets.*` | Arquitetura dos Ativos |
| `patrimony.*` | Arquitetura do Patrimônio |
| `legacy.*` | Arquitetura do Legado |
| `memory.*` | Conhecimento + Patrimônio |
| `presence.*` | Autoridade |
| `heritage.*` | Legado |
| `transparency.*` | Autoridade (vidro) |

---

# II. DESIGN TOKENS TÉCNICOS

## Cores (implementação `src/index.css`)

```css
@theme {
  --color-obsidian: #0a0a0b;
  --color-onyx: #141518;
  --color-gold: #c9a55c;
  --color-champagne: #e8d5a3;
  --color-light: #f5f2ec;
  --color-bordeaux: #5c1a1b;
  --color-navy: #0b1b2e;
  --color-platinum: #8a8a8a;
}
```

## Espaçamento (grid 8pt)

```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 48px;
--space-xl: 64px;
--space-2xl: 96px;
--space-3xl: 128px;
```

## Tipografia fluida

```css
--text-hero: clamp(48px, 8vw, 88px);
--text-h2: clamp(36px, 5vw, 56px);
--text-h3: clamp(24px, 3vw, 32px);
--text-body: clamp(16px, 1.5vw, 18px);
--text-eyebrow: 13px;
```

## Sombras

```css
--shadow-card: 0 4px 24px rgba(0, 0, 0, 0.4);
--shadow-card-hover: 0 8px 32px rgba(201, 165, 92, 0.15);
--shadow-gold-glow: 0 0 20px rgba(201, 165, 92, 0.2);
--heritage-shadow: 0 12px 48px rgba(10, 10, 11, 0.85);
```

## Bordas

```css
--border-subtle: rgba(201, 165, 92, 0.15);
--border-active: rgba(201, 165, 92, 0.4);
--radius-institutional: 4px;
--radius-max: 8px;
```

## Motion

```css
--duration-instant: 200ms;
--duration-standard: 600ms;
--duration-draw: 800ms;
--duration-counter: 2000ms;
--duration-loader: 1500ms;
--easing-standard: ease-out;
--easing-draw: cubic-bezier(0.22, 1, 0.36, 1);
```

## Glass

```css
--surface-glass: rgba(10, 10, 11, 0.8);
--blur-glass: 20px;
```

---

# III. COMPONENTES CANÔNICOS

| Componente | Token dominante | Assinatura |
|------------|-----------------|------------|
| TopBar scrolled | `authority-surface` + glass | SIG-01 |
| CTA Primary | `patrimony-gold` | SIG-01 |
| CTA Outlined | `patrimony-gold` border | SIG-04 |
| Card | `knowledge-surface` | SIG-10 |
| Form underline | `patrimony-gold` | SIG-04 |
| Section eyebrow | `authority-light` | — |
| Metric counter | `legacy-highlight` | — |
| Diagram | `authority-primary` | SIG-03 |

---

# IV. USO EM PROMPTS DE IA

Todo prompt (DOC-06) deve mapear tokens semânticos:

```
knowledge.primary → fundo de arquivo/biblioteca
authority.light → rim light dourado
patrimony.gold → filetes, selos, CTAs
legacy.highlight → destaques tipográficos champagne
memory.texture → superfície de madeira/papel
heritage.shadow → sombras profundas obsidian
presence.light → volumetric god rays
```

---

# V. CLASSIFICAÇÃO TEMPORAL DOS TOKENS

| Token | Classe |
|-------|--------|
| Conceitos semânticos (knowledge, legacy...) | Imutável |
| Paleta hex oficial | Duradouro |
| Componentes UI | Evolutivo |
| Tokens experimentais `exp-*` | Experimental |

---

**ALSHAM GLOBAL COMMERCEâ"¢**  
*Knowledge Engineered Into Legacy.*
