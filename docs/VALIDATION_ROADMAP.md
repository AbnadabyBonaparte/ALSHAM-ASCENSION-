# VALIDATION ROADMAP
## Fase de Ciência Aplicada — EIP / ALSHAM
## *(Operacionalização da Fase Empírica — DECL-EMP-1.0)*

---

## METADADOS

| Campo | Valor |
|-------|-------|
| **ID** | `VAL-RM-1.1` |
| **Versão** | 1.1 |
| **Status** | ATIVO |
| **Documento pai** | [MAD-1.0](./MASTER_ARCHITECTURE_DECISION_v1.0.md) |
| **Dependências** | [DECLARACAO_FASE_EMPIRICA_v1.0](./DECLARACAO_FASE_EMPIRICA_v1.0.md), [ARCHITECTURE_FREEZE_v1.0](./ARCHITECTURE_FREEZE_v1.0.md), KGR |
| **Última revisão** | 2026-06-28 |
| **Período** | 2026-06-28 → 2026-09-26 |

---

## NOTA DE VERSIONAMENTO (v1.0 → v1.1)

- Terminologia **Sprint** substituída por **Ciclo** (identidade EIP, não software)
- Prioridade invertida: **VER-0001 antes do Canon**
- Identidade visual **totalmente congelada** nos 90 dias
- Indicador cultural: [EIP_EVIDENCE_MATURITY.md](./EIP_EVIDENCE_MATURITY.md)

---

## OBJETIVO DA FASE

Produzir **conhecimento validado** por meio de aplicação real, evidências (VER) e estudos de caso — não novos documentos arquiteturais.

> *Implementation without architecture is chaos — a arquitetura já existe. Agora: implementação e evidência.*

---

## CICLO DE EVIDÊNCIAS 01 — VER-0001 (PRIORIDADE MÁXIMA)

| Item | Detalhe |
|------|---------|
| **Objetivo** | Primeiro estudo de caso documentado como paper aplicado |
| **Entregáveis** | `KGR/VER/VER-0001-*.md` preenchido com projeto real |
| **Critérios de conclusão** | Estrutura paper completa · dados reais · zero mock · aprovação Direção EIP |
| **Alimenta** | Canon (artigos derivados) · CER (se conceito evoluir) · maturidade em EIP_EVIDENCE_MATURITY |

**Template:** [VER-0001-TEMPLATE.md](./KGR/VER/VER-0001-TEMPLATE.md)

---

## CICLO DE VALIDAÇÃO 01 — Primeiro Projeto (paralelo ao VER)

| Item | Detalhe |
|------|---------|
| **Objetivo** | Aplicar modelo EIP/ALSHAM em **um** projeto real (cliente ou piloto) |
| **Entregáveis** | Projeto de Engenharia pós-SELECT · artefatos produzidos · métricas iniciais |
| **Critérios de conclusão** | Etapa documentada com escopo, responsável e data de início verificável |

---

## CICLO DE PESQUISA 01 — Revisão Conceitual Pós-Evidência

| Item | Detalhe |
|------|---------|
| **Objetivo** | Revisar conceitos **somente** quando sustentados por VER-0001 |
| **Entregáveis** | 0–N registros KGR (CER/GDR/ADR) **motivados por VER** |
| **Critérios de conclusão** | Nenhuma mudança conceitual sem link explícito a VER |

**Regra:** Canon expande-se **depois** do VER — nunca antes.

---

## CICLO DE EVIDÊNCIAS 02 — Segundo estudo (após VER-0001 aprovado)

| Item | Detalhe |
|------|---------|
| **Objetivo** | Confirmar reprodutibilidade do modelo em contexto distinto |
| **Entregáveis** | VER-0002 · atualização de EIP_EVIDENCE_MATURITY |
| **Critérios de conclusão** | ≥1 conceito com evidência em ≥2 projetos distintos |

---

## CICLO DE VALIDAÇÃO 02 — Métricas operacionais

| Item | Detalhe |
|------|---------|
| **Objetivo** | Substituir placeholders por métricas verificáveis de operação real |
| **Entregáveis** | Métricas SELECT · pipeline · resultados de projeto (não landing estética) |
| **Critérios de conclusão** | Dados auditáveis · fonte documentada · sem números inventados |

---

## CICLO DE PESQUISA 02 — Síntese e publicação técnica

| Item | Detalhe |
|------|---------|
| **Objetivo** | Externalizar evidências acumuladas em formato técnico (não marketing) |
| **Entregáveis** | White paper ou capítulo derivado de ≥2 VERs |
| **Critérios de conclusão** | Revisão por pares internos · alinhamento GLO · aprovação proprietário |

---

## CONGELADO (90 DIAS — SEM EXCEÇÃO ESTÉTICA)

| Item | Status |
|------|--------|
| Logo · símbolo · hero · landing visual | **Congelado** |
| DOC-03B → DOC-10 | Execução suspensa |
| Novos slogans · taxonomias visuais | **Proibido** |
| ADR-0001 (sigla EIP) | Paralelo — não bloqueia VER |

---

## RETROSPECTIVA FREEZE

**Data:** 2026-09-26

Pergunta central da retrospectiva:

> *Quantos conceitos do EIP possuem evidência de aplicação documentada?*

Não: *quantos documentos produzimos?*

---

## HORIZONTE (12–24 MESES)

| Marco | Alvo orientativo |
|-------|------------------|
| Projetos com VER | ~20 |
| VERs publicados | ~20 |
| ADRs motivados por evidência | ~20 |
| CERs derivados de VER | ~20 |
| **Saída** | Livro técnico — *Engineering of Intellectual Patrimony* |

---

**EIP / ALSHAM**
