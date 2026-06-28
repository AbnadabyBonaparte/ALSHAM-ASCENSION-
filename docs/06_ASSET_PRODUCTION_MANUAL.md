# ALSHAM GLOBAL COMMERCE™
# 06 — ASSET PRODUCTION MANUAL

---

## METADADOS DO DOCUMENTO

| Campo | Valor |
|-------|-------|
| **ID** | `DOC-06` |
| **Nome** | Asset Production Manual |
| **Versão** | 3.1 |
| **Status** | Aprovado — produção condicionada à DOC-03B |
| **Proprietário** | ALSHAM Global Commerce™ |
| **Dependências** | DOC-00, DOC-03, DOC-03A, DOC-03B, DOC-04, DOC-05 |
| **Documentos relacionados** | DOC-07, DOC-08 |
| **Documento pai** | DOC-05 |
| **Última revisão** | 2026-06-28 |
| **Data** | 2026-06-28 |
| **Histórico** | v2.0 Pilar 4 · v3.0 Hierarquia canônica + sequência símbolo |
| **Impacto** | Toda produção de assets |
| **Nível de autoridade** | Operacional |

**Regra:** Nenhum asset fora de DOC-03A. Manual de Coerência (DOC-00 §IV) obrigatório.

---

# ÍNDICE

1. Princípios de Produção
2. Inventário Completo (~226 assets)
3. Especificações Técnicas
4. Template de Prompt ALSHAM
5. Ordem de Produção
6. Padrões de Qualidade
7. Nomenclatura e Organização
8. Checklists (Produção, Dev, QA)
9. Roadmap por Fase

---

# 1. PRINCÍPIOS DE PRODUÇÃO

1. **Sistema antes de peça** — todo asset deriva de DOC-03 e DOC-03A
2. **Gramática antes de estética** — validar contra DOC-03A e Lista Negra
3. **Exploração antes de commit** — símbolo: 18 sketches → 6 conceitos → 3 finalistas → 1 oficial
4. **Assinatura obrigatória** — mínimo 1 assinatura visual (DOC-03A §II) por peça
5. **Coerência obrigatória** — 8 perguntas do DOC-00 §IV
4. **Prioridade antes de volume** — ordem definida, não produção paralela caótica
5. **Materialidade antes de abstração** — DNA Material em todo render/foto

---

# 2. INVENTÁRIO COMPLETO

## Resumo por domínio

| Domínio | Qtd | Fase |
|---------|-----|------|
| Identidade & Logo | 12 | 1 |
| Exploração de símbolo (sketches) | 18 | 1 |
| DNA Material (texturas) | 9 | 1 |
| Backgrounds & atmosfera | 9 | 1 |
| Ícones proprietários | 48 | 2 |
| Diagramas | 14 | 2 |
| Elementos premium (selos, filetes) | 20 | 2 |
| Cenas & Banners | 22 | 3 |
| 3D Renders | 16 | 3 |
| Fotografia editorial | 24 | 4 |
| Motion & Vídeo | 12 | 4 |
| Documentos & Print | 20 | 5 |
| Social & Thumbnails | 16 | 5 |
| UI & Dashboard | 24 | 5 |
| **TOTAL** | **~244** | — |

---

## 2.1 Fase 1 — Fundação (42 assets)

### Identidade (após exploração aprovada)

| ID | Asset | Formato | Resolução |
|----|-------|---------|-----------|
| ID-01 | Símbolo aprovado — isolado | SVG + PNG | 512px |
| ID-02 | Lockup horizontal | SVG + PNG | 2400—600 |
| ID-03 | Lockup vertical | SVG + PNG | 800—1200 |
| ID-04 | Wordmark isolado | SVG | vetor |
| ID-05 | Monocromático ouro | SVG + PNG | 512px |
| ID-06 | Monocromático light | SVG + PNG | 512px |
| ID-07 | Favicon | SVG + ICO | 32px |
| ID-08 | App icon | PNG | 1024—1024 |
| ID-09 | Golden Filament SVG animável | SVG | vetor |
| ID-10 | Golden Filament horizontal longo | SVG | 2400—1 |
| ID-11 | Submarca SELECT™ | SVG | vetor |
| ID-12 | Submarca VAULT™ | SVG | vetor |

### DNA Material — texturas tile

| ID | Material | Formato | Resolução |
|----|----------|---------|-----------|
| MAT-T01 | Bronze escovado | WebP + PNG | 2048—2048 |
| MAT-T02 | Ouro envelhecido | WebP + PNG | 2048—2048 |
| MAT-T03 | Nero Marquina | WebP + PNG | 2048—2048 |
| MAT-T04 | Carvalho escuro | WebP + PNG | 2048—2048 |
| MAT-T05 | Vidro fumê overlay | PNG alpha | 2048—2048 |
| MAT-T06 | Papel algodão | WebP + PNG | 2048—2048 |
| MAT-T07 | Couro vegetal | WebP + PNG | 2048—2048 |
| MAT-T08 | Latão oxidado | WebP + PNG | 2048—2048 |
| MAT-T09 | Aço escurecido | WebP + PNG | 2048—2048 |

### Backgrounds atmosféricos

| ID | Asset | Uso |
|----|-------|-----|
| BG-01 | Granulação universal 3% | Overlay global |
| BG-02 | Vinheta radial escura | Hero, CTA |
| BG-03 | Gradiente radial ouro sutil | Hero |
| BG-04 | Blueprint grid 8px navy | Laboratório |
| BG-05 | Obsidiana profunda | Base escura |
| BG-06 | Noise cinematográfico | Vídeo/imagem |
| BG-07 | Poeira dourada (particles sprite) | Hero |
| BG-08 | Transição navy → obsidian | Entre seções |
| BG-09 | Papel técnico warm | Documentos |

---

## 2.2 Fase 2 — Sistema (82 assets)

### Ícones (48)

- 9 ícones jornada (SELECT → VAULT)
- 6 ícones verticais
- 9 ícones sistema (autoridade, patrimônio, legado...)
- 24 ícones ecossistema (dashboard, docs, social)

**Spec:** SVG 48×48, stroke 1.5px, cor #C9A55C, grid 8px, export @1x @2x @3x

### Diagramas (14)

| ID | Diagrama |
|----|----------|
| D-01 | Paradoxo: Ilusão — Engenharia |
| D-02 | Fluxo Conhecimento → Legado |
| D-03 | Mapa 9 etapas |
| D-04 | Digital HQ™ arquitetura |
| D-05 | Ecossistema ALSHAM |
| D-06 a D-14 | Um diagrama por etapa da jornada |

### Elementos premium (20)

- Selo ALSHAM SELECT™ (após símbolo aprovado)
- 4 filetes ornamentais
- 2 molduras certificado
- 2 aspas decorativas
- 3 divisores
- 1 watermark tipográfico
- 7 variações de selo/badge por submarca

---

## 2.3 Fase 3 — Cenas (38 assets)

### Hero — Observatório do Patrimônio

| ID | Asset | Resolução |
|----|-------|-----------|
| SC-01 | Cena Hero desktop | 3840—2160 |
| SC-02 | Cena Hero mobile | 1080—1920 |
| SC-03 | Vídeo loop hero (10s) | 3840—2160 MP4 |
| SC-04 | Poster frame fallback | 1920—1080 |

### Banners por ambiente (7)

| ID | Ambiente | Arquitetura |
|----|----------|-------------|
| BN-01 | Observatório | Autoridade |
| BN-02 | Biblioteca | Conhecimento |
| BN-03 | Arquivo | Conhecimento→Ativos |
| BN-04 | Câmara | Patrimônio |
| BN-05 | Galeria | Legado |
| BN-06 | Laboratório | Autoridade |
| BN-07 | Manifesto editorial | Patrimônio |

### 3D Renders (16)

| ID | Objeto | Ambiente |
|----|--------|----------|
| R3D-01 | Knowledge Vault™ | Câmara |
| R3D-02 | Selo SELECT™ | Câmara |
| R3D-03 | Gêmeo Digital | Laboratório |
| R3D-04 | Patrimônio em camadas | Câmara |
| R3D-05 a 08 | 4 Objetos Sagrados | Variados |
| R3D-09 a 16 | 8 variações de produto | Genesis/Legacy |

---

## 2.4 Fases 4–5 — Expansão (82 assets)

- 24 fotografias editoriais (4 macros + 6 verticais — 2 + 8 ambientes)
- 12 motion (loader, filament draw, parallax, counter, transitions)
- 20 print (cartão, papel timbrado, capa livro, certificado)
- 16 social (thumbnails, covers)
- 24 UI (dashboard ALSHAM 360°, componentes)

---

# 3. ESPECIFICAÇÕES TÉCNICAS

## Imagem

| Uso | Formato primário | Fallback | Qualidade |
|-----|------------------|----------|-----------|
| Web hero | WebP | JPEG 85% | 90+ Lighthouse |
| Texturas | WebP lossless | PNG | Tile seamless |
| Ícones | SVG | PNG @2x | Vetor limpo |
| Print | TIFF / PDF | 300dpi | CMYK profile |

## Vídeo

| Spec | Valor |
|------|-------|
| Codec | H.264 / H.265 |
| Hero loop | 10s, 24fps, muted |
| Manifesto | 90s, 24fps |
| Ratio | 2.39:1 (hero) / 16:9 (demais) |

## 3D

| Spec | Valor |
|------|-------|
| Engine | Blender 4.x Cycles |
| Samples | 1024+ |
| Output | PNG 16-bit / EXR |
| Materiais | PBR albedo-roughness-metallic |

---

# 4. TEMPLATE DE PROMPT ALSHAM

Todo prompt de IA deve conter estes 12 campos:

```
1. CONCEITO CENTRAL: Transformar conhecimento em patrimônio
2. ARQUITETURA: [qual das 5]
3. AMBIENTE: [qual dos 6]
4. DNA MATERIAL: [IDs MAT-01 a 09]
5. COMPOSIÇÃO: [enquadramento, planos, negativo space %]
6. LUZ: [key + rim, temperatura, direção]
7. LENTE: [mm, abertura, distância]
8. ATMOSFERA: [haze, grão, partículas]
9. PALETA: [tokens hex]
10. MOOD: [3 adjetivos]
11. NEGATIVOS: [Lista Negra aplicável]
12. OUTPUT: [formato, resolução, ratio]
```

### Exemplo — SC-01 Hero Desktop

```
CONCEITO: Knowledge engineered into legacy
ARQUITETURA: Autoridade + Patrimônio
AMBIENTE: Observatório do Patrimônio
MATERIAIS: MAT-03 mármore, MAT-04 carvalho, MAT-02 ouro envelhecido
COMPOSIÇÃO: Wide 2.39:1, biblioteca monumental abrindo para cúpula,
  objetos orbitando (livros, patentes, mapas), silhueta perfil terço esquerdo,
  negativo space 40%
LUZ: Key 5600K moonlight + rim gold 3200K 40%, sombras #0A0A0B
LENTE: 35mm anamorphic, f/2.8, 3 planos
ATMOSFERA: Haze 10%, grão 35mm 3%, poeira dourada máx 30 partículas
PALETA: #0A0A0B #141518 #C9A55C #E8D5A3 #F5F2EC
MOOD: Solene, permanente, silencioso
NEGATIVOS: skyline, laptop, sorriso, escritório moderno, neon, stock
OUTPUT: 3840—2160 WebP + JPEG fallback
```

---

# 5. ORDEM DE PRODUÇÃO (obrigatória)

```
BLOCO A — Estratégia visual (Fase 2 — sequência inviolável)
  A1. Aprovar DOC-03B Symbol Semantics
  A2. 18 sketches
  A3. 6 conceitos
  A4. 3 finalistas
  A5. 1 símbolo oficial
  A6. Brand Mark
  A7. Sistema de aplicações
  A8. Vetorizar identidade ID-01 a ID-12

BLOCO B — Materiais base
  B1. DNA Material MAT-T01 a MAT-T09
  B2. Backgrounds BG-01 a BG-09
  B3. Golden Filament ID-09

BLOCO C — Sistema
  C1. 48 ícones SVG
  C2. 14 diagramas
  C3. 20 elementos premium

BLOCO D — Cenas principais
  D1. SC-01 Hero desktop
  D2. SC-02 Hero mobile
  D3. SC-03 Vídeo loop
  D4. BN-01 a BN-07 banners

BLOCO E — 3D
  E1. R3D-01 Vault
  E2. R3D-02 Selo SELECT
  E3. R3D-03 a R3D-16

BLOCO F — Fotografia
  F1. Macros objetos sagrados
  F2. Retratos editoriais
  F3. Ambientes

BLOCO G — Expansão
  G1. Motion
  G2. Print
  G3. Social
  G4. UI/Dashboard
```

**Regra:** Não iniciar Bloco D antes de Bloco A completo.

---

# 6. PADRÕES DE QUALIDADE

## Aprovação de asset — 8 critérios

| # | Critério | Passa? |
|---|----------|--------|
| 1 | Alinhado ao conceito central | ☐ |
| 2 | Arquitetura e ambiente identificáveis | ☐ |
| 3 | Usa apenas DNA Material oficial | ☐ |
| 4 | Passa Gramática Visual (Pilar 03 §8) | ☐ |
| 5 | Zero itens da Lista Negra | ☐ |
| 6 | Teste ALSHAM: reconhecível sem logo | ☐ |
| 7 | Specs técnicas atendidas | ☐ |
| 8 | Nomenclatura correta | ☐ |

**8/8 = aprovado. Qualquer falha = revisão.**

## Níveis de revisão

| Nível | Quem | Quando |
|-------|------|--------|
| R1 | Produtor | Auto-check checklist |
| R2 | Diretor de Arte | Antes de integrar |
| R3 | Cliente ALSHAM | Símbolo, hero, selo SELECT |
| R4 | QA final | Pré-deploy |

---

# 7. NOMENCLATURA

```
alsham-[domínio]-[nome]-[variante]-[resolução].[ext]

Exemplos:
alsham-hero-observatorio-desktop-3840.webp
alsham-icon-jornada-vault-48.svg
alsham-texture-mat-ouro-envelhecido-2048.webp
alsham-3d-vault-camara-2400.png
alsham-banner-manifesto-arquivo-2400.webp
```

### Estrutura de pastas

```
public/assets/
├── identity/
├── textures/
├── backgrounds/
├── icons/
├── diagrams/
├── scenes/
├── 3d/
├── photography/
├── motion/
├── print/
└── social/
```

---

# 8. CHECKLISTS

## Produção

- [ ] Pilar 03 consultado antes de cada asset
- [ ] Template de prompt 12 campos preenchido
- [ ] Lista Negra verificada
- [ ] DNA Material aplicado
- [ ] Export nos formatos corretos
- [ ] Nomenclatura padrão
- [ ] Checklist 8 critérios aprovado

## Desenvolvimento (integração)

- [ ] `<picture>` com srcset responsivo
- [ ] Lazy load (exceto hero)
- [ ] Alt text descritivo
- [ ] WebP + fallback
- [ ] SVG inline para ícones críticos
- [ ] LCP hero < 2.5s
- [ ] Emojis removidos do código

## QA Visual

- [ ] Paleta 60-30-10
- [ ] Gramática Visual respeitada
- [ ] Mobile crop correto
- [ ] Lighthouse ≥ 95
- [ ] WCAG AA
- [ ] Safari + Chrome + Firefox
- [ ] iOS + Android

---

# 9. ROADMAP

| Fase | Semanas | Entrega | Gate |
|------|---------|---------|------|
| **0** | Atual | 4 Pilares documentados | Aprovação pilares |
| **1** | 1–3 | Símbolo + identidade + texturas | Aprovação símbolo |
| **2** | 4–5 | Ícones + diagramas + premium | Integração parcial |
| **3** | 6–7 | Hero + banners + 3D core | Aprovação hero |
| **4** | 8–9 | Fotografia + motion | — |
| **5** | 10–12 | Landing integrada + QA + deploy | Lighthouse 95 |
| **6** | 13–20 | Print, social, dashboard, livros | Expansão |

---

# DECLARAÇÃO DE APROVAÇÃO — PILAR 04

| Item | Status |
|------|--------|
| Inventário ~244 assets | ☐ |
| Ordem de produção (Blocos A–G) | ☐ |
| Template prompt 12 campos | ☐ |
| Padrões de qualidade 8 critérios | ☐ |
| Zero produção antes dos Pilares 01–03 | ☐ |

---

**ALSHAM GLOBAL COMMERCE™**  
*Knowledge Engineered Into Legacy.*
