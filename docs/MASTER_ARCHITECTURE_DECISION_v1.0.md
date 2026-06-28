# MASTER ARCHITECTURE DECISION v1.0
# ALSHAM GLOBAL COMMERCE™ / EIP
## Documento Canônico de Decisão Arquitetural

---

```
STATUS: CANONICAL | ARCHITECTURAL | FOUNDATIONAL | SSOT
```

**Single Source of Truth** para a arquitetura conceitual, organizacional, documental e de evolução do projeto ALSHAM / EIP.

---

## METADADOS DO DOCUMENTO

| Campo | Valor |
|-------|-------|
| **ID** | `MAD-1.0` |
| **Nome** | Master Architecture Decision v1.0 |
| **Versão** | 1.0 |
| **Status** | **CANONICAL · ARCHITECTURAL · FOUNDATIONAL · SSOT** |
| **Proprietário** | ALSHAM Global Commerce™ / EIP |
| **Documento pai** | Nenhum (raiz arquitetural) |
| **Dependências** | Nenhuma (documento raiz arquitetural) |
| **Documentos relacionados** | [KGR](./KGR/00_KGR_README.md), [GLO](./GLOSSARIO_OFICIAL_EIP.md), [CANON](./CANON_EIP.md), DOC-00 a DOC-13 |
| **Última revisão** | 2026-06-28 |
| **Data de congelamento** | 2026-06-28 |
| **Autor da consolidação** | Decisão arquitetural registrada nesta conversa |
| **Histórico** | v1.0 — Ordem de Congelamento Arquitetural |
| **Impacto** | Global — todo conceito, documento, asset, código, governança |
| **Nível de autoridade** | **Supremo Arquitetural** — precede interpretações operacionais |
| **Nível de maturidade** | Prática Consolidada (framework documental) |

---

## REGRA DE USO DESTE DOCUMENTO

1. Nenhuma decisão futura pode **contradizer** este documento sem registro explícito de mudança (Parte VI e VII).
2. Nenhum conteúdo desta conversa pode ser **perdido** — hipóteses abandonadas permanecem no histórico (Parte I).
3. Nenhum resumo substitui este documento para decisões de arquitetura.
4. Interpretações novas devem ser marcadas como **INTERPRETAÇÃO** — não como canônico.
5. Toda alteração em conceitos, taxonomia, arquitetura, governança, identidade ou organização **deve atualizar** este documento (versão minor ou major).

---

# PARTE I — HISTÓRICO DA EVOLUÇÃO DO PENSAMENTO

## I.1 Cronologia consolidada (esta conversa + fontes incorporadas)

| Fase | Data ref. | Estado do pensamento | Decisão / artefato |
|------|-----------|----------------------|-------------------|
| **F0** | Pré-conversa | Repositório GitHub com 4 arquivos markdown estratégicos (`alsham_dossie_final.md`, `alsham_manifesto_cliente.md`, `alsham_differentiation_thesis.md`, `landing page .md`) | Fonte institucional histórica — não depreciada, incorporada |
| **F1** | Início conversa | Sincronização GitHub + leitura dos 4 documentos | Repositório local = remoto (`main` limpo). Decisão: construir landing |
| **F2** | F1 implementação | Landing como **projeto principal** | Stack: Vite + React + TypeScript + Tailwind v4 + Framer Motion. 11 blocos do dossiê `landing page .md`. Paleta Sovereign Black Gold. Commit `358cf5c`, push `main` |
| **F3** | Pós-landing | Pedido de direção criativa global (Diretor Criativo) | Criado `ALSHAM_DIRECAO_ARTE_GLOBAL.md` — auditoria landing, ~104 assets, Intellectual Monumentalism, Observatório |
| **F4** | Elevação de escopo | Usuário: pensar como **universo visual**, não landing | Criado `ALSHAM_BIBLIA_VISUAL.md` — Cinco **Reinados**, IPU, ~226 assets, 15 capítulos |
| **F5** | Revisão conceitual v2 | Usuário: subir nível — Brand Visual System, não página | Quatro pilares: Manifesto, Strategy, Visual System, Production Manual. Conceito central ≠ estilo. **Reinados → Cinco Arquiteturas**. Família de 6 ambientes. Gramática Visual. Lista Negra. DNA Material (9 materiais). Octógono **não aprovado** |
| **F6** | Parecer v3.0 | Aprovação condicional fundação | Hierarquia DOC-00 a DOC-13. Metadados canônicos. Manual Coerência (8 perguntas). Evolução temporal (Imutável/Duradouro/Evolutivo/Experimental). Lei do símbolo |
| **F7** | Gate símbolo | Último gate pré-sketch | `03B_SYMBOL_SEMANTICS.md` — Convergência Patrimonial, Gates 01–04, SYM-01 a SYM-13. Sketches **bloqueados** até aprovação 03B |
| **F8** | **Congelamento** | Ordem de Congelamento Arquitetural | **Este documento (MAD-1.0)** — SSOT. Introdução formal EIP → ALSHAM → SELECT → cadeia operacional |

## I.2 Hipóteses abandonadas (preservadas — não apagar)

| Hipótese | Onde surgiu | Por que abandonada | Substituta |
|----------|-------------|-------------------|------------|
| Landing como ponto de partida | F2 | Landing é aplicação, não origem do sistema | Sistema visual → aplicações (DOC-11+) |
| "Cinco Reinados" | F4 Bíblia Visual | Conotação fantasia/RPG — enfraquece holding institucional | **Cinco Arquiteturas** |
| Observatório como único cenário visual | F3–F4 | Identidade não pode depender de um ambiente | **Família de 6 Ambientes** |
| Intellectual Monumentalism como conceito central | F3–F5 | É **estilo visual**, não conceito maior | Conceito: **Transformar conhecimento em patrimônio** |
| Octógono + Nó como símbolo aprovado | F4–F5 | Risco colisão fintech; forma antes de semântica | **DOC-03B** — semântica antes de forma; exploração 18 sketches |
| 104 assets só para landing | F3 | Escopo insuficiente para ecossistema | ~244 assets (DOC-06), expansível |
| Produção imediata de imagens/hero | F3 | Sem sistema = retrabalho e inconsistência | Gates sequenciais: 03B → 08 → 09 → 10 |
| Emojis nos cards de verticais | F2 código | Destroem percepção premium | Ícones SVG proprietários (pendente) |
| Partículas CSS como hero visual | F2 código | Genérico, não cinematográfico | Cena Observatório (DOC-10, pendente) |
| ⚜ Unicode como logo | F2 código | Não proprietário | Brand Mark pós-DOC-08/09 |
| `04_ASSET_PRODUCTION_MANUAL` como DOC-04 | F6 | Colisão numérica com Experience System | DOC-06 Production; DOC-04 Experience |
| Três pilares apenas | F5 inicial | Insuficiente para governança | Hierarquia 00–13 + MAD-1.0 |

## I.3 Decisões substituídas (versão anterior → versão substituta → justificativa)

| Anterior | Substituta | Justificativa |
|----------|------------|---------------|
| 4 pilares documentais | Hierarquia 00–13 + MAD-1.0 | Rastreabilidade, gates, separação conhecimento/aplicação |
| DOC-00 como único SSOT | MAD-1.0 (arquitetura) + DOC-00 (constituição operacional marca) | SSOT conceitual vs. operacional documental |
| Hero antes do símbolo | Símbolo → Identidade → Hero | Lei: forma nasce do significado |
| Design como decoração de copy | Experiência emocional projetada (DOC-04) | Marca = estados emocionais, não só UI |
| Métricas placeholder (9, 6, 100%) | Dados reais ou remoção | Regra: dados 100% reais (dossiê institucional) |
| Agência como frame mental | Holding de Engenharia de Autoridade | Tese de diferenciação (`alsham_differentiation_thesis.md`) |

## I.4 Paradigmas consolidados (mudanças de paradigma)

1. **De página para sistema** — A landing deixou de ser o projeto principal; tornou-se manifestação de um sistema maior.
2. **De estética para semântica** — O símbolo não nasce da forma; a forma nasce do significado (Convergência Patrimonial).
3. **De reinos para arquiteturas** — Linguagem institucional substitui linguagem fantástica.
4. **De observatório único para ecologia de ambientes** — Variedade com unidade.
5. **De produção para congelamento** — Documentar integralmente antes de pixels.
6. **De ALSHAM isolada para stack EIP → ALSHAM → SELECT** — Modelo de conhecimento precede organização e curadoria.
7. **De documentos soltos para SSOT arquitetural** — Este documento (MAD-1.0).

---

# PARTE II — ARQUITETURA DEFINITIVA

## II.1 Cadeia vertical oficial (congelada)

```
EIP
(Modelo de Conhecimento — framework epistemológico e metodológico)
    ↓
ALSHAM
(Organização que aplica, opera e escala o modelo EIP)
    ↓
ALSHAM SELECT™
(Processo oficial de curadoria, diagnóstico e admissão)
    ↓
Projeto
(Projeto de Engenharia de Patrimônio Intelectual — instância aplicada a um especialista/organização)
    ↓
Aplicação
(Expressões concretas: Genesis, Sentinel, landing, site, livros, dashboards, etc.)
    ↓
Resultados
(Autoridade mensurável, ativos estruturados, receita desacoplada do tempo, legado iniciado)
    ↓
Evidências
(Registros verificáveis de outcome — cases, métricas, artefatos, depoimentos documentados)
    ↓
Evolução do EIP
(Retroalimentação do modelo — refinamento de conceitos, standards, protocolos)
```

## II.2 Fluxo horizontal (jornada de transformação — imutável)

```
Conhecimento → Autoridade → Ativos → Patrimônio → Legado
```

Mapeamento às **Cinco Arquiteturas Visuais** (DOC-03):

| Estágio | Arquitetura Visual |
|---------|-------------------|
| Conhecimento | Arquitetura do Conhecimento |
| Autoridade | Arquitetura da Autoridade |
| Ativos | Arquitetura dos Ativos |
| Patrimônio | Arquitetura do Patrimônio |
| Legado | Arquitetura do Legado |

## II.3 Metodologia ALSHAM (9 etapas operacionais — fonte: `alsham_dossie_final.md`)

```
00 ALSHAM SELECT™      — Curadoria Estratégica
01 ALSHAM GENESIS™     — Engenharia de Identidade
02 ALSHAM SENTINEL™    — Operação de Autoridade
03 ALSHAM INTELLIGENCE™— Inteligência Operacional
04 ALSHAM ACADEMIC™    — Autoridade Acadêmica
05 ALSHAM LEGACY™      — Monetização do Conhecimento
06 ALSHAM CAPITAL™     — Gestão de Patrimônio Intelectual
07 ALSHAM VENTURES™    — Joint Ventures
08 ALSHAM VAULT™       — Knowledge Vault™
```

**Regra:** Nenhuma etapa substitui a anterior. Cada fase prepara a próxima.

## II.4 Relação EIP × ALSHAM × SELECT

| Entidade | Papel | Produz | Não é |
|----------|-------|--------|-------|
| **EIP** | Modelo de conhecimento, taxonomia, governança conceitual, evolução baseada em evidências | Conceitos, standards, protocolos, glossário, maturidade | Empresa, marca comercial, produto |
| **ALSHAM** | Holding/organização que **aplica** o EIP no mercado | Serviços, metodologia, operação, marca, ecossistema digital | Agência de marketing, vendedora de tráfego |
| **ALSHAM SELECT™** | **Processo** de admissão sob critérios EIP/ALSHAM | Diagnóstico, curadoria, APROVADO/NÃO APROVADO | Funil de vendas, formulário genérico |

## II.5 Sistema Operacional ALSHAM (definição arquitetural)

Infraestrutura interna composta por:

- Agentes cognitivos (treinados no ALSHAM DNA™)
- Automações e integrações (CRM, agenda, pagamentos — Digital HQ™, Sales Engine™)
- Bases de conhecimento (Knowledge Vault™, KNOWLEDGE™)
- Protocolos operacionais (derivados do EIP)
- Processos das 9 etapas

**Nota:** Implementação técnica (ALSHAM 360° Prima CRM) é **Aplicação** — não redefine EIP.

## II.6 Implementação técnica existente (registro factual — F2)

| Item | Estado |
|------|--------|
| Repositório | `ALSHAM-ASCENSION-` GitHub `main` |
| Landing v0 | React/Vite em `src/` — 11 blocos tipográficos |
| Assets visuais canônicos | **0 produzidos** (DOC-07) |
| Documentação | DOC-00 a DOC-13 + MAD-1.0 |
| Produção visual | **Bloqueada** até aprovação DOC-03B |

---

# PARTE III — DEFINIÇÕES OFICIAIS

> Definições canônicas. Texto literal onde indicado. Conflitos resolvem-se por MAD-1.0 > DOC-00 > documentos especializados.

## III.1 EIP

**EIP** — Framework metodológico e epistemológico que define **como** conhecimento humano é identificado, estruturado, validado, operado, mensurado e evoluído como patrimônio. É o **Modelo de Conhecimento** supremo do ecossistema. Não é marca comercial primária; é a camada de verdade conceitual que a ALSHAM aplica e que as Evidências retroalimentam.

> **Expansão da sigla:** ADR-0001 **ABERTO**. Usar apenas **EIP** ou, em contexto internacional interno, **Engineering of Intellectual Patrimony** — nunca congelar outra expansão até ratificação formal.

**Nível de maturidade atual:** Framework Validado (documental) — aguardando corpus de Evidências para Prática Consolidada plena.

## III.2 ALSHAM

**ALSHAM Global Commerce™** — Organização (holding) especializada na engenharia, estruturação, operação, valorização e monetização de ativos intelectuais humanos. Aplica o modelo EIP. Posicionamento oficial:

> *Holding de Engenharia de Autoridade, Capital Intelectual, Propriedade Intelectual e Patrimônio Digital.*

**Não vendemos:** marketing, seguidores, sites isolados, IA genérica.  
**Construímos:** Patrimônios Digitais de Autoridade.

## III.3 ALSHAM SELECT™

Processo oficial de **curadoria estratégica, diagnóstico de autoridade e admissão** de especialistas ao ecossistema ALSHAM. Critérios (fonte dossier): reputação, histórico, potencial de autoridade, potencial de monetização, alinhamento ético, potencial de legado. Resultado: **APROVADO** ou **NÃO APROVADO**. CTA institucional: candidatura, não compra.

## III.4 Projeto de Engenharia

Instância aplicada do modelo EIP/ALSHAM para um especialista ou organização específica — com início, escopo, etapas, entregas e evidências. Um Projeto percorre as etapas 00–08 conforme admissão e contrato. **Não confundir** com "projeto de software" isolado.

## III.5 Patrimônio Intelectual

Conjunto **estruturado, protegido, mensurável e escalável** de ativos intelectuais de um especialista ou organização — incluindo metodologias, marcas, conteúdos proprietários, reputação documentada, propriedade intelectual formal e Knowledge Vault™. Resultado da cadeia Conhecimento → … → Patrimônio.

## III.6 Ativo Intelectual

Unidade mensurável de valor intelectual humano — conhecimento, experiência, reputação, metodologia, narrativa, relacionamento, credibilidade — **após** engenharia e estruturação. Antes da engenharia: potencial, não ativo.

## III.7 Conhecimento

Totalidade do saber, experiência, história e competência de um sujeito — **disperso, invisível e subutilizado** até passar pelo EIP/ALSHAM. Estado inicial da jornada. Matéria-prima, não produto final.

## III.8 Engenharia

Aplicação **sistemática, intencional e baseada em evidências** de método sobre conhecimento — em oposição a achismo, improviso, viralização ou marketing reativo. Termo central da marca: Engenharia de Autoridade, Engenharia de Identidade, EIP.

## III.9 Domínio

**[INTERPRETAÇÃO CONSOLIDADA]** Campo semântico de aplicação do vocabulário visual e estratégico — ex.: verticais de mercado (Saúde, Jurídico, etc.) ou domínios documentais (Conhecimento, Aplicação, Governança). Não confundir com "domínio web". Em EIP: área delimitada de conceitos com regras próprias subordinadas ao modelo.

## III.10 Artefato

Qualquer produção tangível ou digital que **materializa** conhecimento ou patrimônio — documento, selo, símbolo, livro, curso, render, diagrama, agente treinado, entrada no Vault. O símbolo ALSHAM é **artefato de civilização**, não logotipo decorativo (DOC-03B).

## III.11 Evidência

Registro **verificável** de que uma aplicação do modelo produziu resultados declarados — métricas, cases, artefatos de cliente, depoimentos documentados, auditorias. Alimenta Evolução do EIP. **Proibido:** métricas fictícias, depoimentos sem base, placeholders em produção (`alsham_dossie_final` + regras workspace).

---

# PARTE IV — SEPARAÇÃO OFICIAL DE CAMADAS

| Camada | Contém | Documentos / locus | Não contém |
|--------|--------|-------------------|------------|
| **Conhecimento** | EIP, modelo, glossário, canon, taxonomia, filosofia | MAD-1.0, DOC-01, futuro Canon EIP | Código de landing, assets visuais |
| **Aplicação** | Projetos, landing, site, Genesis, entregas cliente | DOC-08–13, `src/`, produtos | Alteração de lei fundamental sem MAD |
| **Operação** | Agentes, automações, CRM, Sentinel, Intelligence | ALSHAM 360°, processos diários | Redefinição de conceitos EIP |
| **Governança** | Quem aprova, versiona, coerência, gates | MAD-1.0 Parte VI, DOC-00 | Execução comercial |
| **Pesquisa** | Hipóteses, experimental, EXP- | Marcados Experimental | Produção canônica sem elevação |
| **Comercial** | SELECT, propostas, contratos, pricing | Derivados DOC-02 | Identidade visual canônica |

**Regra:** Problemas de **Conhecimento** não se resolvem em **Aplicação** (ex.: símbolo indefinido não se compensa com hero bonito).

---

# PARTE V — HIERARQUIA DOCUMENTAL OFICIAL

## V.1 Stack documental (mapeamento solicitado → implementação)

| Camada solicitada | Implementação atual | ID |
|-------------------|---------------------|-----|
| **Constituição** | Constituição ALSHAM | DOC-00 |
| **Canon** | MAD-1.0 + DOC-01 + DOC-03A + DOC-03B | MAD-1.0, DOC-01, 03A, 03B |
| **Standards** | Design System, Canonical Visual Language | DOC-05, DOC-03A |
| **Protocolos** | Asset Production Manual, Manual Coerência, Gates | DOC-06, DOC-00 §IV, DOC-03B |
| **Evidências** | Asset Library + futuro repositório de cases | DOC-07 (+ a criar) |
| **Glossário** | Parte IX deste MAD + expansão futura | MAD-1.0 IX |
| **Asset Library** | DOC-07 | DOC-07 |
| **Design System** | DOC-05 | DOC-05 |
| **Brand System** | DOC-02 + DOC-03 + DOC-09 | DOC-02, 03, 09 |
| **Experience System** | DOC-04 | DOC-04 |
| **Production System** | DOC-06 | DOC-06 |

## V.2 Hierarquia numérica completa (DOC-00 v4.0 — congelada)

```
00 Constituição
01 Manifesto Filosófico
02 Brand Strategy
03 Brand Visual System
03A Canonical Visual Language
03B Symbol Semantics          ← GATE sketches
04 Experience System
05 Design System
06 Asset Production Manual
07 Asset Library
08 Exploração do Símbolo       ← BLOQUEADO
09 Sistema de Identidade      ← BLOQUEADO
10 Primeiro Hero              ← BLOQUEADO
11 Landing Page
12 Website
13 Ecossistema Digital
```

## V.3 Precedência em caso de conflito

```
MAD-1.0 (arquitetura conceitual)
    ↓
DOC-00 (constituição operacional)
    ↓
DOC-03A, DOC-03B (canônico visual/símbolo)
    ↓
DOC-01, 02, 04, 05, 06 (especializados)
    ↓
DOC-08–13 (aplicação)
    ↓
Código / assets (manifestação)
```

## V.4 Documentos depreciados (histórico preservado)

- `ALSHAM_BIBLIA_VISUAL.md` → DOC-03
- `ALSHAM_DIRECAO_ARTE_GLOBAL.md` → DOC-06
- `00_INDICE_DOCUMENTACAO_BASE.md` → DOC-00
- `04_ASSET_PRODUCTION_MANUAL.md` (duplicata) → DOC-06

---

# PARTE VI — MODELO DE GOVERNANÇA

## VI.1 Papéis

| Papel | Responsabilidade |
|-------|------------------|
| **Arquiteto / Proprietário EIP** | Define mudanças em MAD-1.0, EIP, taxonomia |
| **Direção ALSHAM** | Aprova marca, SELECT, posicionamento (DOC-02) |
| **Direção Criativa** | Garante DOC-03, 03A, 03B, 04 — coerência visual/experiência |
| **Produção** | Executa DOC-06 sob gates — não altera canôn |
| **Desenvolvimento** | Implementa DOC-05, 08–13 — não hardcode fora de tokens |
| **Revisor de Coerência** | Aplica Manual 8 perguntas (DOC-00 §IV) |
| **Aprovador final cliente** | Gates: 03B, símbolo, hero, deploy produção |

## VI.2 Quem cria / revisa / aprova / altera

| Artefato | Cria | Revisa | Aprova | Pode alterar |
|----------|------|--------|--------|--------------|
| MAD-1.0 | Arquiteto | Direção EIP+ALSHAM | Proprietário | Só com versão MAD + justificativa |
| DOC-00 | Arquiteto | Coerência | Proprietário | Revisão constitucional |
| DOC-03B | Direção Criativa | Arquiteto | Cliente | Pré-sketch only |
| Símbolo (08–09) | Design | DOC-03B + Gate 04 | Cliente | Pós-aprovação = Imutável |
| Assets | Produção | DOC-03A + Coerência | Direção Criativa | Evolutivo conforme classe |
| Código landing | Dev | Design System | QA + Coerência | Evolutivo |
| Conceitos EIP Imutáveis | — | — | — | **Proibido** sem MAD major |

## VI.3 Versionamento

- **Documentos:** semver `major.minor` — major = breaking conceptual change
- **MAD:** `MAD-x.y` — este é `1.0`
- **Assets:** `AST-[domínio]-[nome]-vN`
- **Changelog:** obrigatório em metadados de todo documento

## VI.4 Registro de decisões

Toda decisão arquitetural nova = entrada em **Parte I** deste MAD (ou MAD minor update) com: data, autor, versão anterior, versão nova, justificativa, impacto.

---

# PARTE VII — MODELO DE EVOLUÇÃO

Todo conceito no ecossistema EIP/ALSHAM **deve** possuir:

| Campo | Obrigatório |
|-------|-------------|
| Status | Hipótese · Rascunho · Aprovado · Depreciado · Experimental |
| Versão | semver ou MAD ref |
| Data | ISO 8601 |
| Autor | Papel + identidade |
| Justificativa | Texto livre |
| Nível de maturidade | Parte VIII |
| Dependências | Conceitos/documentos pré-requisito |
| Impacto | Escopo afetado se mudar |

**Ciclo de evolução EIP:**

```
Hipótese → Documentação → Aplicação piloto → Evidências → Validação → Canon/Standard → Prática Consolidada → (opcional) Refinamento via MAD minor
```

---

# PARTE VIII — NÍVEIS DE MATURIDADE

| Nível | Definição | Requisito para subir |
|-------|-----------|-------------------|
| **1. Hipótese** | Ideia não documentada ou exploratória | — |
| **2. Protótipo Conceitual** | Documentado sem evidência | DOC ou MAD rascunho |
| **3. Modelo Estruturado** | Definições, relações, governança | Aprovação + dependências claras |
| **4. Framework Validado** | Aplicação repetível com checklist | DOC canônico + coerência |
| **5. Prática Consolidada** | Evidências, uso em produção, retroalimentação EIP | Evidências verificáveis |

**Regra:** Nenhum conceito sobe de nível sem documentação **e** evidências (quando aplicável).

**Maturidade atual (snapshot v1.0):**

| Conceito | Nível |
|----------|-------|
| Lei fundamental (conhecimento → patrimônio) | 5 — Prática Consolidada (documental) |
| Cinco Arquiteturas | 4 — Framework Validado |
| Intellectual Monumentalism | 4 — Framework Validado |
| Convergência Patrimonial (semântica símbolo) | 3 — Modelo Estruturado (aguarda aprovação 03B) |
| Símbolo visual ALSHAM | 1 — Hipótese (sketches bloqueados) |
| Landing v0 código | 2 — Protótipo Conceitual |
| EIP como framework formal | 4 — Framework Validado (MAD-1.0) |

---

# PARTE IX — GLOSSÁRIO FUNDAMENTAL

| Termo | Definição canônica única |
|-------|-------------------------|
| **Conhecimento** | Saber, experiência e competência humana no estado disperso — matéria-prima da transformação. |
| **Capital Intelectual** | Conhecimento **estruturado como valor econômico e estratégico** — intermediário entre autoridade e patrimônio. |
| **Ativo Intelectual** | Unidade mensurável e operável de capital intelectual — passível de gestão, licenciamento e escala. |
| **Patrimônio Intelectual** | Sistema integrado de ativos intelectuais protegidos, mensuráveis e perenes — objeto de LEGACY™, CAPITAL™, VAULT™. |
| **Engenharia** | Método sistemático sobre conhecimento — oposto a achismo e viralização. |
| **Projeto** | Instância aplicada do modelo para um sujeito — percorre etapas 00–08. |
| **Artefato** | Materialização tangível/digital de conhecimento ou patrimônio. |
| **Domínio** | Campo delimitado de conceitos ou mercado subordinado ao EIP. |
| **Governança** | Regras de criação, revisão, aprovação e versionamento — Parte VI. |
| **Evidência** | Prova verificável de resultado — alimenta Evolução do EIP. |
| **Legado** | Permanência transcendente do impacto intelectual — estágio terminal da jornada. |
| **Autoridade** | Reconhecimento consolidado de expertise — ponte entre conhecimento e ativos. |
| **Convergência Patrimonial** | Ato semântico central do símbolo — dispersão → estrutura → permanência. |
| **Curadoria** | Seleção estratégica com critério — ALSHAM SELECT™. |
| **Arquitetura (visual)** | Estágio da jornada manifestado visualmente — não "arquitetura de software" salvo contexto técnico explícito. |

---

# PARTE X — PRINCÍPIOS CANÔNICOS

Todos aprovados/consolidados nesta conversa:

| # | Princípio | Enunciado |
|---|-----------|-----------|
| P1 | **Integração Sistêmica** | Nenhuma peça existe isolada — landing, símbolo, método e EIP formam um sistema. |
| P2 | **Evolução Contínua** | O EIP evolui por evidências — não por moda ou redesign impulsivo. |
| P3 | **Separação Conhecimento / Aplicação** | Modelo precede pixels, código e campanhas. |
| P4 | **Governança Conceitual** | Mudanças conceituais exigem documento, versão e aprovação. |
| P5 | **Evidência** | Afirmações de resultado exigem prova verificável. |
| P6 | **Humildade Epistêmica** | Hipóteses abandonadas permanecem no histórico; incerteza é registrada, não ocultada. |
| P7 | **Forma nasce do Significado** | Elementos visuais derivam do símbolo e semântica — nunca o contrário. |
| P8 | **Patrimônio antes de Promoção** | Visual e copy instalam confiança estrutural, não hype. |
| P9 | **Materialidade** | Ouro, papel, metal, pedra — não flat genérico. |
| P10 | **Silêncio Institucional** | Negativo space = respeito; holdings premium não gritam. |
| P11 | **Narrativa antes de Decoração** | Cada frame ocupa um estágio Conhecimento→Legado. |
| P12 | **Propriedade antes de Referência** | Deve parecer ALSHAM — não Apple/Bloomberg pastiche. |
| P13 | **Curadoria como Valor** | Nem todo profissional entra — SELECT é feature, não bug. |
| P14 | **Permanência Horizonte 20–100 anos** | Decisões devem envelhecer com dignidade. |
| P15 | **Lista Negra Inviolável** | Clichês stock/corporativos = rejeição automática (DOC-03A). |
| P16 | **Assinatura Visual Obrigatória** | Toda peça ≥1 assinatura SIG (DOC-03A). |
| P17 | **Coerência 8/8** | Manual DOC-00 §IV sem exceções. |
| P18 | **Autoridade → Ativos → Legado** | Ordem da construção — nunca invertida por viralização. |
| P19 | **Candidatura, não Compra** | CTA SELECT inverte relação de poder. |
| P20 | **Memória Institucional** | MAD-1.0 é atualizado — nunca contradito silenciosamente. |

---

# PARTE XI — ARQUITETURA ORGANIZACIONAL

```
┌─────────────────────────────────────────────────────────┐
│  EIP — Modelo de Conhecimento supremo                   │
│  (MAD-1.0, KGR, CANON-1.0, GLO-1.0, Standards)          │
└─────────────────────────┬───────────────────────────────┘
                          │ aplica
┌─────────────────────────▼───────────────────────────────┐
│  ALSHAM GLOBAL COMMERCE™                                │
│  Holding · Marca · Operação · Ecossistema               │
│  (DOC-01 a 07, 11–13, ALSHAM 360°)                      │
└─────────────────────────┬───────────────────────────────┘
                          │ admite via
┌─────────────────────────▼───────────────────────────────┐
│  ALSHAM SELECT™                                         │
│  Curadoria · Diagnóstico · APROVADO / NÃO APROVADO      │
└─────────────────────────┬───────────────────────────────┘
                          │ inicia
┌─────────────────────────▼───────────────────────────────┐
│  Projeto de Engenharia (instância cliente)              │
│  GENESIS → … → VAULT                                    │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│  Sistema Operacional ALSHAM                             │
│  Agentes · Automações · Vault · Protocolos · CRM        │
└─────────────────────────────────────────────────────────┘
```

---

# PARTE XII — PRÓXIMOS PROJETOS (ORDEM OFICIAL CONGELADA)

| # | Projeto | Status v1.0 | Documento / gate |
|---|---------|-------------|------------------|
| 1 | Consolidar Modelo de Conhecimento EIP | **Em curso** | MAD-1.0 (este) |
| 2 | Produzir Glossário Oficial expandido | Pendente | Derivado MAD IX |
| 3 | Estruturar Canon EIP | Pendente | Acima DOC-01 |
| 4 | Estruturar Standards | Parcial | DOC-03A, DOC-05 |
| 5 | Estruturar Protocolos | Parcial | DOC-06, DOC-03B |
| 6 | Produzir Evidências | Pendente | DOC-07 + cases |
| 7 | Validar conceitos | Pendente | Maturidade nível 4→5 |
| 8 | Produzir Brand System | Bloqueado pós-03B | DOC-09 |
| 9 | Produzir Visual System | Parcial aprovado | DOC-03, 03A |
| 10 | Produzir Design System | Aprovado base | DOC-05 |
| 11 | Produzir Asset Library | Estrutura viva | DOC-07 |
| 12 | Construir Landing v1 canônica | v0 existe | DOC-11 após DOC-10 |
| 13 | Construir Website | Pendente | DOC-12 |
| 14 | Expandir Ecossistema | Pendente | DOC-13 |

**Sequência visual inviolável (sub-ordem 8–12):**

```
Aprovar DOC-03B → 08 Sketches → 09 Identidade → 10 Hero → 11 Landing v1
```

---

# ANEXO A — CONTEÚDO INSTITUCIONAL PRESERVADO (fontes históricas)

## A.1 Lei e tese (de `alsham_dossie_final.md`)

- Missão: Transformar conhecimento humano em patrimônio intelectual, autoridade reconhecida e legado duradouro.
- Visão: Principal holding latino-americana de engenharia de autoridade, PI e patrimônio digital.
- Cadeia: Especialista → Autoridade → Marca → Ativo → PI → Patrimônio Digital → Legado.

## A.2 Paradoxo (de `alsham_differentiation_thesis.md` + manifesto)

- Tráfego ≠ Autoridade. Viralização ≠ Legado.
- Ordem correta: Autoridade → Ativos → Legado.
- ALSHAM não vende tráfego — constrói destino para tráfego qualificado.

## A.3 Landing blueprint original (de `landing page .md`)

- 11 blocos: TopBar, Hero, Ticker, Paradoxo, Tese, Jornada 9 etapas, Verticais, Diferenciais, Trust, CTA Select, Footer.
- Paleta Sovereign Black Gold — **mantida** como Duradouro.
- CTA mestre: REQUISITAR DIAGNÓSTICO DE AUTORIDADE™ / APLICAR AO ALSHAM SELECT™.

## A.4 Estilo visual congelado

- **Conceito central:** Transformar conhecimento em patrimônio / Knowledge Engineered Into Legacy.
- **Estilo:** Intellectual Monumentalism.
- **Metáfora-mestra:** Observatório do Patrimônio Intelectual (um dos 6 ambientes).
- **Assinatura:** The Golden Filament.
- **Semântica símbolo (proposta):** Convergência Patrimonial — **aguarda aprovação DOC-03B**.

## A.5 Verticais de mercado (imutável — dossier)

Saúde · Jurídico · Educação · Negócios · Setor Público · Mídia & Influência.

## A.6 DNA Material oficial (9 materiais — DOC-03)

Bronze escovado · Ouro envelhecido · Nero Marquina · Carvalho escuro · Vidro fumê · Papel algodão · Couro vegetal · Latão oxidado · Aço escurecido.

## A.7 Seis ambientes oficiais (DOC-03)

Observatório do Patrimônio · Biblioteca do Conhecimento · Arquivo das Ideias · Câmara dos Ativos · Galeria do Legado · Laboratório da Autoridade.

---

# ANEXO B — AUDITORIA INTERNA PRÉ-FINALIZAÇÃO

## B.1 Decisões desta conversa — checklist de inclusão

| Decisão | Registrada em |
|---------|---------------|
| Sync GitHub + landing v0 React | Parte I F1–F2, II.6 |
| Direção arte 104 assets | I.2 hipótese, Anexo evolução |
| Bíblia Visual / Reinados | I.2 abandonada, I.3 |
| 4 pilares → hierarquia 00–13 | I.3, V.2 |
| Cinco Arquiteturas | II.2, I.3 |
| 6 ambientes | Anexo A.7 |
| Gramática, Lista Negra, DNA | Parte X, Anexo A.6, DOC-03A ref |
| Tokens semânticos | DOC-05 ref, Parte V |
| Experience System | DOC-04 ref, Parte V |
| Manual Coerência 8 perguntas | DOC-00 ref, P17 |
| Metadados canônicos | DOC-00 ref, VII |
| Evolução Imutável/Duradouro/Evolutivo/Experimental | DOC-00 ref, VIII |
| Lei forma/significado | P7, DOC-00 |
| DOC-03B gates 01–04 | Parte XII, Anexo A.4 |
| SYM-01 a SYM-13 | DOC-03B ref |
| 18→6→3→1 sketches | Parte XII sequência |
| Aprovações fundação DOC-00–06 | I.6, DOC-00 VII |
| DOC-03B pendente aprovação | Parte XII, B.3 |
| EIP introdução arquitetural | Parte II, III.1, XI |
| Ordem projetos 1–14 | Parte XII |
| Depreciações documentos | V.4, I.2 |
| Implementação `src/` factual | II.6 |
| Regra dados reais / no mock | III.11, A.1 contexto |

## B.2 Justificativas não registradas?

**Nenhuma identificada** — toda mudança de paradigma da conversa possui entrada em Parte I ou Parte X.

## B.3 Mudanças de paradigma não documentadas?

**Nenhuma** — Parte I.4 cobre os 7 paradigmas.

## B.4 Inconsistências entre conceitos?

| Potencial inconsistência | Resolução registrada |
|--------------------------|---------------------|
| EIP acronym não ratificado | ADR-0001 **ABERTO** — usar apenas **EIP** ou **Engineering of Intellectual Patrimony** (contexto internacional interno) até decisão formal |
| DOC-03B status "aguardando" vs fundação "aprovada" | Consistente: fundação DOC-00–06 aprovada; **gate 03B** separado antes sketches |
| MAD SSOT vs DOC-00 Supremo | Precedência explicitada V.3: MAD arquitetural > DOC-00 operacional |
| CRM ALSHAM 360° em regras workspace vs este repo | Repo = ASCENSION landing; CRM é ecossistema separado — registrado II.5, IV |
| Métricas/depoimentos placeholder na landing v0 | Registrado como débito técnico — viola P5 até substituição |

## B.5 Resultado da auditoria

```
AUDITORIA: APROVADA PARA CONGELAMENTO v1.0
Pendências externas ao MAD (não bloqueiam SSOT):
  - Aprovação formal cliente DOC-03B
  - Ratificação opcional expansão literal sigla EIP
  - Produção visual Fase 2
```

---

# DECLARAÇÃO DE CONGELAMENTO

A partir de **2026-06-28**, a arquitetura descrita neste documento está **congelada** na versão **MAD-1.0**.

Alterações requerem:

1. Registro em Parte I (histórico)
2. Incremento de versão MAD
3. Justificativa e impacto
4. Aprovação do papel competente (Parte VI)

---

**ALSHAM GLOBAL COMMERCE™ / EIP**  
*Knowledge Engineered Into Legacy.*  
*Transformar conhecimento em patrimônio.*

```
MAD-1.0 | CANONICAL | ARCHITECTURAL | FOUNDATIONAL | SSOT
```

---

# COMPLEMENTO OFICIAL — GOVERNANÇA KGR (v1.0)

**Data de integração:** 2026-06-28  
**Status:** CANONICAL — complemento de governança ao MAD-1.0

## Decisão registrada

O projeto passa de arquitetura documental isolada para **sistema formal de governança do conhecimento**:

| Sistema | Função |
|---------|--------|
| **MAD-1.0** | SSOT estrutural congelado |
| **KGR** | Registro vivo: ADR, CER, VER, GDR, STR |
| **GLOSSARIO_OFICIAL_EIP** | 15 termos v1.0 — prioridade máxima |
| **ARCHITECTURE_FREEZE_v1.0** | 90 dias — até 2026-09-26 |

## Mudanças epistemológicas

1. **"Lei Imutável" → Princípio Fundamental** (GDR-0001) — revisão possível com evidências
2. **EIP sigla** — ADR-0001 ABERTO; usar apenas "EIP" até decisão
3. **Fase Arquitetura → Fase Validação** — objetivo = conhecimento validado, não documentos
4. **Ciclo permanente:** Hipótese → Protótipo → Aplicação → Evidência → Revisão → Canon → Framework Validado

## Regra

Nenhuma mudança conceitual sem registro KGR.

## Reunião final de arquitetura (4 itens)

| # | Item | Status |
|---|------|--------|
| 1 | Expansão sigla EIP | ADR-0001 ABERTO |
| 2 | Glossário 15 termos | ✅ GLO-1.0 |
| 3 | Nomenclatura KGR | ✅ Aprovado |
| 4 | Princípio Fundamental | ✅ GDR-0001 |

**Após fechamento ADR-0001:** Architecture Freeze pleno — zero nova arquitetura por 90 dias.

---

# COMPLEMENTO — DIREÇÃO DE ARTE FASE 1 (2026-06-28)

**Status:** Execução visual — não altera arquitetura conceitual (MAD estrutural intacto).

| Registro | Valor |
|----------|-------|
| **HERO-001** | The Observatory — primeira cena oficial do universo visual ALSHAM |
| **Arquivo** | `public/images/hero/hero-observatory-4k.webp` |
| **Guidelines** | `docs/HERO_VISUAL_GUIDELINES.md` |
| **Asset Library** | `docs/07_ASSET_LIBRARY.md` · `public/assets/ASSET_MANIFEST.json` |

HERO-001 define o padrão visual institucional para todas as cenas subsequentes do ecossistema ALSHAM.

