# ALSHAM GLOBAL COMMERCE™
# 07 — ASSET LIBRARY
## Inventário Vivo de Assets Proprietários

---

## METADADOS DO DOCUMENTO

| Campo | Valor |
|-------|-------|
| **ID** | `DOC-07` |
| **Nome** | Asset Library |
| **Versão** | 1.0 |
| **Status** | Ativo — registro contínuo |
| **Proprietário** | ALSHAM Global Commerce™ |
| **Dependências** | DOC-05, DOC-06 |
| **Documentos relacionados** | DOC-08, DOC-09, DOC-11 |
| **Documento pai** | DOC-06 |
| **Última revisão** | 2026-06-28 |
| **Data** | 2026-06-28 |
| **Histórico** | v1.0 — Estrutura inicial · v1.1 — HERO-001 produção Fase 1 Direção de Arte |
| **Impacto** | Rastreabilidade de todo asset |
| **Nível de autoridade** | Registro |

---

# STATUS ATUAL

| Métrica | Valor |
|---------|-------|
| Assets produzidos | **1** |
| Assets aprovados | **1** |
| Inventário planejado | ~244 (DOC-06) |
| Fase | **Direção de Arte Fase 1** — HERO-001 em produção |

---

# ESTRUTURA `public/assets/`

```
public/assets/
  hero/           ← HERO-001
  scenes/
  backgrounds/
  textures/
  patterns/
  diagrams/
  icons/
  symbols/
  logos/
  motion/
  illustrations/
  ASSET_MANIFEST.json
```

Espelho de entrega: `public/images/hero/` (paths de implementação web).

---

# REGISTRO — HERO-001

| Campo | Valor |
|-------|-------|
| **ID** | HERO-001 |
| **Nome** | The Observatory |
| **Categoria** | Hero |
| **Versão** | 1.0 |
| **Status** | Produção |
| **Origem** | Direção de Arte ALSHAM — Fase 1 |
| **Descrição** | Cena institucional principal — Observatório do Patrimônio |
| **Data** | 2026-06-28 |
| **Arquivo** | `public/images/hero/hero-observatory-4k.webp` |
| **Mobile** | `public/images/hero/hero-observatory-mobile.webp` |
| **Library** | `public/assets/hero/hero-observatory-4k.webp` |
| **Guidelines** | [HERO_VISUAL_GUIDELINES.md](./HERO_VISUAL_GUIDELINES.md) |

---

# ESTRUTURA DE REGISTRO

Cada asset aprovado será registrado neste formato:

| Campo | Exemplo |
|-------|---------|
| Asset ID | `AST-hero-observatorio-desktop-v1` |
| Nome | Hero Observatório Desktop |
| Versão | 1.0 |
| Status | Rascunho · Aprovado · Depreciado |
| Domínio | scenes / icons / textures / 3d / ... |
| Arquitetura | Autoridade + Patrimônio |
| Ambiente | Observatório do Patrimônio |
| Assinatura(s) | SIG-01, SIG-12 |
| Classificação temporal | Duradouro |
| Tokens semânticos | authority.primary, patrimony.gold |
| Arquivo | `public/assets/scenes/alsham-hero-observatorio-desktop-3840.webp` |
| Prompt ref | DOC-06 §4 SC-01 |
| Data aprovação | — |
| Aprovador | — |

---

# REGISTRO POR DOMÍNIO

## Identity (0/12)
*Aguardando Fase 2 — exploração do símbolo*

## Textures / DNA Material (0/9)
*Aguardando pós-símbolo*

## Icons (0/48)
*Aguardando DOC-03A ícones*

## Scenes / Hero (1/4)

| ID | Nome | Arquivo | Status |
|----|------|---------|--------|
| **HERO-001** | The Observatory | `public/images/hero/hero-observatory-4k.webp` | **Produção** |

## 3D Renders (0/16)
*Aguardando Hero*

## Photography (0/24)
*Fase 4*

## Motion (0/12)
*Fase 4–5*

---

# REGRAS DE MANUTENÇÃO

1. Nenhum asset entra em produção sem registro planejado em DOC-06
2. Nenhum asset entra em código sem registro aprovado neste documento
3. Assets depreciados permanecem no histórico — nunca deletados sem rastreio
4. Versão semver: major = mudança visual significativa, minor = refinamento

---

**ALSHAM GLOBAL COMMERCE™**  
*Knowledge Engineered Into Legacy.*
