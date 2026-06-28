# ALSHAM GLOBAL COMMERCE™
# 03A — CANONICAL VISUAL LANGUAGE
## Linguagem Visual Universal da ALSHAM

---

## METADADOS DO DOCUMENTO

| Campo | Valor |
|-------|-------|
| **ID** | `DOC-03A` |
| **Nome** | Canonical Visual Language |
| **Versão** | 1.0 |
| **Status** | Aprovado — canônico |
| **Proprietário** | ALSHAM Global Commerce™ |
| **Dependências** | DOC-00, DOC-01, DOC-02, DOC-03 |
| **Documentos relacionados** | DOC-04, DOC-05, DOC-06 |
| **Documento pai** | DOC-03 |
| **Última revisão** | 2026-06-28 |
| **Data** | 2026-06-28 |
| **Histórico** | v1.0 — Criação por parecer de direção criativa v3.0 |
| **Impacto** | Todo asset visual produzido |
| **Nível de autoridade** | **Canônico** — nenhum asset pode violar |

---

> **Regra suprema:** Nenhum asset poderá ser produzido fora das regras deste documento.

---

# PARTE I — GRAMÁTICA CANÔNICA

## 1. Composição

| Regra | Especificação |
|-------|---------------|
| Método primário | Regra dos terços ou simetria axial institucional |
| Peso visual | Um único ponto focal por composição |
| Hierarquia | Focal → Secundário → Contexto → Silêncio |
| Densidade máxima | 70% da área útil — mínimo 30% negativo space |
| Alinhamento | Grid 8pt — elementos snap ao grid |
| Agrupamento | Proximidade por significado, não por decoração |
| Proibido | Composição centrada genérica sem intenção narrativa |

## 2. Enquadramento

| Tipo | Ratio | Uso |
|------|-------|-----|
| Cinematográfico | 2.39:1 | Hero, vídeos, cenas épicas |
| Widescreen | 16:9 | Banners, apresentações |
| Editorial | 3:2 | Documentos, white papers |
| Retrato | 3:4 | Especialistas, verticais |
| Quadrado | 1:1 | Selos, ícones hero, social |
| Vertical mobile | 9:16 | Hero mobile, stories |

**Margem de respiro:** Mínimo 8% em cada borda para texto sobre imagem.

## 3. Comportamento da Câmera

| Movimento | Uso | Velocidade |
|-----------|-----|------------|
| **Push-in lento** | Revelar profundidade, aproximar do conhecimento | 0.3–0.5 units/s |
| **Pan horizontal** | Varredura de arquivo, biblioteca | 0.2 units/s |
| **Tilt up** | Elevação para monumento, legado | 0.15 units/s |
| **Estática** | Retratos, diagramas, selos | 0 |
| **Parallax 20%** | Hero — background move mais devagar que foreground | scroll-driven |

**Proibido:** Handheld shake, zoom digital agressivo, drone acrobático, whip pan.

## 4. Profundidade

| Plano | Conteúdo típico | Foco |
|-------|-----------------|------|
| Foreground | Partículas, filete, moldura, objeto parcial | Soft ou out of focus |
| Midground | Sujeito principal, mensagem | Sharp |
| Background | Ambiente, atmosfera, escala | Soft — bokeh ou haze |

Mínimo **3 planos** em cenas cinematográficas. Diagramas e selos: 1 plano (flat intencional).

## 5. Perspectiva

| Tipo | Uso |
|------|-----|
| **Um ponto** | Arquitetura monumental, bibliotecas, observatórios |
| **Dois pontos** | Cantos de ambientes, profundidade de corredor |
| **Isométrica 30°** | Diagramas, mapas de jornada, Digital HQ™ |
| **Ortográfica** | Ícones, selos, UI elements |

**Proibido:** Perspectiva distorcida (wide angle < 24mm em retratos), fish-eye.

## 6. Ritmo Visual

O ritmo segue a jornada **Conhecimento → Legado**:

| Fase | Ritmo | Densidade | Luz |
|------|-------|-----------|-----|
| Conhecimento | Lento, exploratório | Média | Quente, íntima |
| Autoridade | Pausado, deliberado | Baixa | Direcional, contrastada |
| Ativos | Preciso, estruturado | Média-alta | Fria, técnica |
| Patrimônio | Solene, fechado | Baixa | Interna volumétrica |
| Legado | Expansivo, horizontal | Mínima | Golden hour lateral |

**Na landing:** alternar ritmo lento (hero, tese) com ritmo estruturado (jornada, diferenciais).

## 7. Iluminação

| Tipo | Kelvin | Direção | Uso |
|------|--------|---------|-----|
| Arquivo | 3200K | 45° superior lateral | Biblioteca, manuscritos |
| Observatório | 5600K | Back + rim gold | Hero, cúpulas |
| Câmara | 2800K point | Inferior interna + rim | Vault, cofres |
| Laboratório | 5000K | Superior difusa + spot | Diagramas, análise |
| Legado | 3500K golden hour | Lateral 15° | Galeria, encerramentos |

**Rim light dourado:** Sempre `#C9A55C`, intensidade 30–50% da key.  
**Sombras:** `#0A0A0B` — sem lift acima de 5% em áreas de sombra profunda.

## 8. Contraste

| Contexto | Ratio mínimo |
|----------|--------------|
| Texto UI | WCAG AA 4.5:1 |
| Texto hero | 7:1 preferido |
| Imagem tonal | Highlights / shadows ≥ 4 stops |
| Diagrama | Linha/fundo ≥ 3:1 |

## 9. Espaço Negativo

| Contexto | Mínimo |
|----------|--------|
| Hero / Cena | 40% |
| Retrato editorial | 60% |
| Card / UI | 25% |
| Selo / Símbolo | 35% zona de proteção |

Negativo space **não é vazio** — é silêncio institucional.

## 10. Comportamento do Dourado

| Permitido | Proibido |
|-----------|----------|
| Rim light, filete, selo, acento tipográfico | Background dominante |
| Reflexo em metal MAT-02 | Gradiente flat em área > 5% |
| Máximo 10% da composição | #FFD700 saturado, neon gold |
| Hot stamp, foil em print | Ouro competindo com conteúdo |

## 11. Comportamento das Sombras

- Sempre com direção coerente com key light
- Hard shadow em luz direcional; soft em ambiente difuso
- Nunca drop-shadow genérico em UI (usar `shadow-card` tokens DOC-05)
- Profundidade por sombra real na imagem, não por filtro CSS em fotografia

## 12. Densidade de Elementos

| Nível | Elementos por viewport | Uso |
|-------|------------------------|-----|
| Mínima | 1–3 | Hero, CTA, Tese |
| Média | 4–8 | Jornada, verticais |
| Alta | 9–15 | Diagramas, dashboard |
| Máxima | 16 | Nunca em landing — apenas dashboards operacionais |

## 13. Escala Humana

- Figura humana: silhueta ou perfil — escala **subordinada** à arquitetura (≤ 15% da altura do frame em cenas monumentais)
- Mãos em macro: podem ocupar até 40% — humanização sem rosto
- Escala transmite: o conhecimento é maior que o indivíduo

## 14. Linguagem Editorial

- Headlines: Cormorant Garamond, peso 600–700
- Corpo: Inter 400, 18px desktop / 16px mobile
- Eyebrows: Inter 300 CAPS, tracking +0.12em
- Aspas decorativas: Cormorant 4xl, gold 40% opacity
- Pull quotes: Cormorant italic, champagne
- Nunca: mais de 3 níveis hierárquicos visíveis simultaneamente

## 15. Direção Fotográfica

Aplicar em toda fotografia ALSHAM:

1. Rembrandt ou split lighting
2. Rim gold obrigatório em retratos
3. P&B alto contraste OU color grade obsidian/gold
4. Grão analógico 2–4%
5. Lentes: 85mm retrato · 35mm ambiente · 100mm macro

## 16. Direção Cinematográfica

1. Ratio 2.39:1 para cenas principais
2. 24fps — nunca 60fps em cenas institucionais
3. Color grade: shadows `#0A0A0B`, mids `#141518`, highlights `#E8D5A3`
4. Duração de plano: mínimo 3s antes de corte
5. Som ambiente: silêncio ou room tone de biblioteca — nunca música épica genérica

---

# PARTE II — SISTEMA DE ASSINATURAS VISUAIS

> Toda peça ALSHAM deve conter **ao menos uma** assinatura visual.

| ID | Assinatura | Descrição | Classe temporal |
|----|------------|-----------|-----------------|
| SIG-01 | **Golden Filament** | Linha 1px gold gradient, animação draw | Imutável |
| SIG-02 | **Grid 8pt** | Sistema de alinhamento universal | Duradouro |
| SIG-03 | **Diagrama Blueprint** | Grid navy 8px, linhas 1px platinum | Duradouro |
| SIG-04 | **Linha Estrutural** | Divisor vertical ou horizontal 1px | Duradouro |
| SIG-05 | **Moldura Institucional** | Borda 1px gold/15% ou filete duplo | Evolutivo |
| SIG-06 | **Selo ALSHAM** | Brasão aprovado pós-Fase 2 | Duradouro |
| SIG-07 | **Padrão Granulação** | Noise 3% overlay universal | Duradouro |
| SIG-08 | **Watermark Tipográfico** | LEGADO·AUTORIDADE·PATRIMÔNIO em 5% opacity | Evolutivo |
| SIG-09 | **Octógono Container** | Enquadramento de ícones (se aprovado no símbolo) | Evolutivo |
| SIG-10 | **Microdetalhe de Canto** | Filete de 8px no canto superior de cards premium | Evolutivo |
| SIG-11 | **Ornamento de Transição** | â—† ou — em gold entre blocos de ticker | Evolutivo |
| SIG-12 | **Vinheta ALSHAM** | Escurecimento radial 8% bordas | Duradouro |

### Matriz de aplicação mínima

| Peça | Assinatura obrigatória | Assinatura recomendada |
|------|------------------------|------------------------|
| Hero | SIG-01 + SIG-12 | SIG-07 |
| Card | SIG-04 ou SIG-10 | SIG-02 |
| Diagrama | SIG-03 | SIG-04 |
| Documento | SIG-06 ou SIG-01 | SIG-07 |
| Ícone | SIG-02 | SIG-09 |
| Vídeo | SIG-01 (abertura/fechamento) | SIG-12 |

---

# PARTE III — VOCABULÁRIO VISUAL OFICIAL

> Nada existe apenas por estética. Todo elemento carrega significado.

| Elemento | Significado | Arquitetura |
|----------|-------------|-------------|
| **Biblioteca** | Conhecimento organizado | Conhecimento |
| **Mesa** | Pertencimento, trabalho intelectual | Conhecimento |
| **Luz** | Consciência, clareza, revelação | Autoridade |
| **Bronze escovado** | Permanência, valor acumulado | Patrimônio |
| **Pedra / Mármore** | Fundação inabalável | Legado |
| **Vidro fumê** | Transparência seletiva, camadas | Autoridade |
| **Arquivo** | Memória, registro, preservação | Conhecimento |
| **Atlas / Mapa** | Expansão, território de expertise | Ativos |
| **Observatório** | Perspectiva, visão estratégica | Autoridade |
| **Cofre / Vault** | Patrimônio protegido | Patrimônio |
| **Selo** | Curadoria, aprovação, mérito | Patrimônio |
| **Manuscrito** | Conhecimento bruto, autenticidade | Conhecimento |
| **Encadernação** | Legado materializado | Legado |
| **Constelação** | Conexões de conhecimento | Ativos |
| **Filete dourado** | Transição, valor, hierarquia | Transversal |
| **Silhueta humana** | O especialista subordinado ao legado | Transversal |
| **Diagrama** | Engenharia, processo, método | Ativos |
| **Partícula dourada** | Ideia em suspensão, potencial | Conhecimento |
| **Horizonte** | Futuro, legado, transcendência | Legado |
| **Lente / Óptica** | Foco estratégico, análise | Autoridade |

**Regra:** Ao incluir um elemento visual, documentar qual significado ele carrega no brief do asset.

---

# PARTE IV — LISTA NEGRA (CANÔNICA)

*Reforço de DOC-03 — violação = rejeição automática.*

Skyline · apertos de mão · laptops · sorrisos stock · escritório moderno · emojis · ícones de biblioteca · gráficos genéricos · neon · cérebro com circuitos · urgência visual · gradientes rainbow · plastic/chrome · poses corporativas

---

# DECLARAÇÃO

Este documento é a **gramática canônica visual** da ALSHAM. Produção de assets (DOC-06) só inicia após sua aprovação formal.

---

**ALSHAM GLOBAL COMMERCE™**  
*Knowledge Engineered Into Legacy.*
