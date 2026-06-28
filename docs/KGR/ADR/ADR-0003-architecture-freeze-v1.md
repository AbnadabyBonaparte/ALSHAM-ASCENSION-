# ADR-0003 — Architecture Freeze v1.0 (90 dias)

---

## METADADOS

| ID | ADR-0003 |
|----|----------|
| **Status** | APROVADO |
| **Responsável** | Direção EIP / Proprietário |
| **Data início** | 2026-06-28 |
| **Data término** | 2026-09-26 |

---

## CONTEXTO

Fase de Arquitetura declarada encerrada. Entrada na fase de **Validação**. Risco de refinamento arquitetural infinito sem evidências práticas.

---

## PROBLEMA

Continuar criando documentos arquiteturais sem aplicação real retarda maturidade EIP de Framework Validado para Prática Consolidada.

---

## DECISÃO

**Architecture Freeze v1.0** por **90 dias** (até 2026-09-26).

### Proibido durante o freeze

- Criar novos conceitos arquiteturais
- Alterar hierarquia MAD/DOC sem ADR + exceção aprovada
- Mudar nomenclatura canônica (exceto ADR-0001 EIP quando fechado)
- Produção visual de símbolo/hero **permanece** condicionada a DOC-03B — não é "nova arquitetura", é execução congelada

### Permitido durante o freeze

- KGR: VER, CER, GDR, STR dentro do escopo existente
- Glossário Oficial (expansão via GDR)
- ADR-0001 fechamento
- Aplicação em projetos reais
- Estudos de caso e métricas
- Correções factuais sem mudança conceitual

---

## CONSEQUÊNCIAS

- Energia da equipe: **evidências**, não arquitetura
- Revisão MAD-1.0 → 1.1 somente pós-freeze ou por ADR crítico
- Ao término: retrospectiva e decisão MAD-1.1 ou extensão freeze
