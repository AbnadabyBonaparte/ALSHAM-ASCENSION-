# KGR — KNOWLEDGE GOVERNANCE REGISTRY
## Registro Oficial de Evolução Conceitual do EIP

---

## METADADOS

| Campo | Valor |
|-------|-------|
| **ID** | `KGR-00` |
| **Nome** | Knowledge Governance Registry |
| **Versão** | 1.0 |
| **Status** | CANONICAL — ativo |
| **Proprietário** | EIP / ALSHAM Global Commerce™ |
| **Documento pai** | [MAD-1.0](../MASTER_ARCHITECTURE_DECISION_v1.0.md) |
| **Dependências** | MAD-1.0, [GLO](../GLOSSARIO_OFICIAL_EIP.md), [CANON](../CANON_EIP.md) |
| **Documentos relacionados** | [DOCUMENT_AUTHORITY_MATRIX](../DOCUMENT_AUTHORITY_MATRIX.md), [VALIDATION_ROADMAP](../VALIDATION_ROADMAP.md) |
| **Última revisão** | 2026-06-28 |
| **Data** | 2026-06-28 |
| **Nível de autoridade** | Governança conceitual |

---

## I. PROPÓSITO

O KGR amplia o conceito de ADR (Architecture Decision Records).

**Não registra apenas decisões.** Registra **todo o ciclo de vida do conhecimento** no ecossistema EIP/ALSHAM.

> A partir deste momento, **nenhuma mudança conceitual** pode ocorrer sem registro correspondente no KGR.

---

## II. CINCO TIPOS DE REGISTRO

| Tipo | Sigla | Função | Pasta |
|------|-------|--------|-------|
| Architecture Decision Record | **ADR** | Decisões estruturais | `KGR/ADR/` |
| Concept Evolution Record | **CER** | Evolução de conceitos (versões) | `KGR/CER/` |
| Validation Evidence Record | **VER** | Evidências, cases, métricas | `KGR/VER/` |
| Glossary Decision Record | **GDR** | Alterações no Glossário Oficial | `KGR/GDR/` |
| Standard Revision Record | **STR** | Mudanças em Standards e Protocolos | `KGR/STR/` |

---

## III. FORMATO ADR (padrão)

Todo ADR deve conter:

1. **Contexto**
2. **Problema**
3. **Alternativas**
4. **Decisão**
5. **Consequências**
6. **Responsável**
7. **Data**
8. Metadados KGR (ID, status, dependências)

---

## IV. FORMATO CER (padrão)

1. Conceito afetado
2. Versão anterior → Versão nova
3. Mudança (diff semântico)
4. Justificativa
5. Impacto (documentos, aplicações)
6. Evidências que motivaram (links VER)
7. Responsável · Data

---

## V. FORMATO VER (padrão)

1. Hipótese ou conceito validado
2. Projeto / aplicação
3. Resultados observados
4. Métricas (quando aplicável)
5. Lições aprendidas
6. Estudo de caso (narrativa)
7. Responsável · Data · Nível de maturidade alcançado

---

## VI. FORMATO GDR (padrão)

1. Termo afetado
2. Tipo: Novo · Alteração · Remoção · Sinônimo
3. Definição proposta
4. Justificativa
5. Documentos dependentes a atualizar
6. Responsável · Data

---

## VII. FORMATO STR (padrão)

1. Standard / Protocolo afetado (DOC-03A, DOC-05, DOC-06…)
2. Seção alterada
3. Mudança
4. Justificativa
5. Impacto em assets e código
6. Responsável · Data

---

## VIII. NUMERAÇÃO

```
ADR-NNNN-slug
CER-NNNN-slug
VER-NNNN-slug
GDR-NNNN-slug
STR-NNNN-slug
```

Sequencial independente por tipo.

---

## IX. RELAÇÃO COM MAD

- **MAD-1.0** = snapshot arquitetural congelado (SSOT estrutural)
- **KGR** = mecanismo vivo de evolução pós-congelamento
- Alterações ao MAD exigem ADR + entrada KGR + revisão MAD minor/major

---

## X. REGISTROS ATIVOS (índice)

| ID | Tipo | Título | Status |
|----|------|--------|--------|
| [ADR-0001](./ADR/ADR-0001-definicao-sigla-eip.md) | ADR | Definição oficial da sigla EIP | **ABERTO** |
| [GDR-0001](./GDR/GDR-0001-principio-fundamental.md) | GDR | Lei Imutável → Princípio Fundamental | APROVADO |
| [ADR-0002](./ADR/ADR-0002-instituicao-kgr.md) | ADR | Instituição do KGR | APROVADO |
| [ADR-0003](./ADR/ADR-0003-architecture-freeze-v1.md) | ADR | Architecture Freeze v1.0 (90 dias) | APROVADO |

---

**EIP / ALSHAM** — *Knowledge Engineered Into Legacy.*
