# HERO VISUAL GUIDELINES
## HERO-001 — The Observatory

---

## METADADOS

| Campo | Valor |
|-------|-------|
| **ID** | `HERO-GUIDE-1.0` |
| **Asset** | HERO-001 |
| **Versão** | 1.0 |
| **Status** | Produção |
| **Documento pai** | DOC-03 |
| **Última revisão** | 2026-06-28 |

---

## HERO-001 — THE OBSERVATORY

| Campo | Valor |
|-------|-------|
| **ID** | HERO-001 |
| **Nome** | The Observatory |
| **Arquivo** | `public/images/hero/hero-observatory-4k.webp` |
| **Mobile** | `public/images/hero/hero-observatory-mobile.webp` |
| **Categoria** | Hero |
| **Função** | Cena institucional principal da ALSHAM |

---

## OBJETIVO

Estabelecer a primeira dobra como **entrada institucional** — o visitante deve sentir que entrou em uma holding de patrimônio intelectual, não em uma landing genérica.

---

## COMPOSIÇÃO

- Observatório monumental fundido à biblioteca clássica
- Escala arquitetônica dominante; ausência de figuras humanas em destaque
- Domo celeste + estantes + geometria dourada no teto
- Enquadramento wide (desktop) · crop vertical 9:16 (mobile)
- Copy centralizada sobre overlay — imagem nunca compete com texto

---

## PALETA

| Token | Uso |
|-------|-----|
| Obsidian `#0a0a0b` | Overlay, vignette, sombras tipográficas |
| Gold `#c9a55c` | Luz preservada, glow superior, acentos |
| Champagne `#e8d5a3` | Subtítulos e ênfase tipográfica |
| Light `#f5f2ec` | Headlines |

---

## ILUMINAÇÃO

- Key light dourada superior (rim light preservada na imagem fonte)
- Overlay preto translúcido 35–72% conforme zona
- Vignette radial suave nas bordas
- Glow institucional no terço superior (12% gold max)

---

## ELEMENTOS OBRIGATÓRIOS

- Arquitetura monumental
- Patrimônio / conhecimento como escala
- Mármore negro · bronze · ouro
- Biblioteca ou observatório
- Geometria dourada sutil

---

## ELEMENTOS PROIBIDOS

- Apertos de mão · laptops · escritórios genéricos
- Stock photos · coworkings · salas modernas
- Gráficos flutuando · ícones 3D genéricos
- Neon · urgência visual · plastic/chrome

---

## USO EM CÓDIGO

```tsx
// Desktop: /images/hero/hero-observatory-4k.webp
// Mobile:  /images/hero/hero-observatory-mobile.webp
// CSS: cover · center · no-repeat
// Overlays: .hero-observatory__overlay | __vignette | __glow
```

---

## APLICAÇÕES

| Superfície | Asset | Notas |
|------------|-------|-------|
| Landing Hero | HERO-001 | Implementado `Hero.tsx` |
| Website institucional | HERO-001 | Reutilizar com mesmo overlay |
| Investor deck capa | Derivado | Crop 16:9 do master |
| Motion poster | Futuro | Loop 6s parallax mínimo |

---

**ALSHAM GLOBAL COMMERCE™** — *Knowledge Engineered Into Legacy.*
