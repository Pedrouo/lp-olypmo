# DESIGN SYSTEM — Olympo Steel

> **Para o agente:** Implemente estes tokens como **CSS variables** em `globals.css` e mapeie-os em `tailwind.config`. Toda cor, espaçamento, raio, sombra e tamanho de fonte no projeto deve sair daqui — nada de valores mágicos soltos no JSX. Direção estética: **editorial escuro / industrial-luxo**. Pense em catálogo de maquinário premium + revista de design.

---

## 1. Direção estética (resumo)

- Base **quase preta**, tipografia clara, **dourado como acento cirúrgico** (nunca como preenchimento de tela inteira).
- **Cards de produto sobre superfície clara/off-white** — o contraste claro-sobre-escuro é a assinatura.
- Régua fina dourada e divisórias sutis dão o ar de ficha técnica.
- Bloco de preço = caixa dourada sólida com texto **preto**.
- Specs em **fonte monoespaçada** (vibe de ficha de fábrica).

## 2. Cores (tokens)

```css
:root {
  /* Base escura */
  --color-bg:          #0B0B0C; /* fundo principal (quase preto) */
  --color-bg-elev:     #141416; /* seções elevadas / nav scrolled */
  --color-bg-soft:     #1B1B1E; /* cards escuros, hovers */

  /* Superfície clara (cards de produto, blocos invertidos) */
  --color-surface:     #F4F3EF; /* off-white quente (fundo de foto de produto) */
  --color-surface-2:   #E9E7E0; /* variação */

  /* Texto */
  --color-text:        #F5F4F1; /* texto sobre escuro */
  --color-text-dim:    #9A9A9F; /* texto secundário sobre escuro */
  --color-text-faint:  #5E5E63; /* labels, captions, disabled */
  --color-ink:         #0B0B0C; /* texto sobre superfície clara / dourado */

  /* Dourado (acento da marca) */
  --color-gold:        #E8C44C; /* dourado principal (≈ catálogo) */
  --color-gold-soft:   #F2D87A; /* hover/clarão */
  --color-gold-deep:   #C9A227; /* champagne escuro, bordas, pressed */

  /* Linhas / bordas */
  --color-line:        rgba(245,244,241,0.08);
  --color-line-strong: rgba(245,244,241,0.16);

  /* Feedback */
  --color-success:     #6FCF97;
  --color-danger:      #E06A5B;
}
```

Regras de uso:
- **Dourado**: rótulos de seção, numeração, bloco de preço, hover de link, 1 card de destaque, detalhes de borda. Cobertura na tela: ~5–10%, nunca dominante.
- **Texto sobre dourado** e **sobre superfície clara**: sempre `--color-ink` (preto), nunca branco.
- Badge de linha: Steel = borda dourada / texto claro; Zeus = preenchido dourado / texto preto; BSC = borda neutra / texto dim. (diferenciação visual das linhas).
- Contraste mínimo AA em todo texto.

## 3. Tipografia

**Não usar Inter/Roboto/Arial.** Pareamento (com fallback 100% gratuito):

| Papel | Fonte primária (Fontshare) | Fallback (Google Fonts) |
|---|---|---|
| **Display / Títulos** | **Clash Display** | Bricolage Grotesque |
| **Corpo / UI** | **General Sans** | Hanken Grotesk |
| **Specs / números / labels** | **JetBrains Mono** ou **Space Mono** | (idem, são Google Fonts) |

- Carregue via `next/font` (Google) e/ou Fontshare (`@fontsource` ou `<link>` da Fontshare). Garanta `font-display: swap` e subset latino.
- **Display**: peso 500–600, tracking levemente negativo (`-0.02em`), line-height apertado (1.0–1.05) nos tamanhos grandes. Títulos em **sentence case com ponto final**.
- **Corpo**: peso 400–500, line-height 1.5–1.6, `max-width` de leitura ~62ch.
- **Mono**: caixa-alta com `letter-spacing: 0.08em` para labels (`• SOBRE NÓS`); tamanho normal para dimensões/peso.

### Escala tipográfica (fluida, `clamp`)

```css
--font-display-xl: clamp(3.25rem, 7vw, 7.5rem);  /* hero */
--font-display-l:  clamp(2.5rem, 5vw, 4.75rem);  /* títulos de seção */
--font-display-m:  clamp(1.75rem, 3vw, 2.75rem); /* subtítulos grandes */
--font-h3:         clamp(1.25rem, 2vw, 1.625rem);
--font-body-l:     1.125rem;
--font-body:       1rem;
--font-small:      0.875rem;
--font-label:      0.75rem; /* mono, caixa-alta, tracking 0.08em */
```

## 4. Espaçamento, grid e medidas

```css
/* escala base 4px */
--space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem;
--space-4: 1rem;     --space-6: 1.5rem;  --space-8: 2rem;
--space-12: 3rem;    --space-16: 4rem;   --space-24: 6rem;
--space-32: 8rem;    --space-40: 10rem;  /* respiro entre seções */

--container-max: 1400px;
--gutter: clamp(1.25rem, 5vw, 5rem); /* margem lateral do container */
```

- **Grid de 12 colunas** dentro do container; use-o de verdade. Quebre o grid de propósito (títulos que sangram, imagens deslocadas).
- **Respiro entre seções**: `--space-32` a `--space-40` no desktop; reduza ~40% no mobile.
- Ritmo vertical consistente: dentro de um bloco, espaços múltiplos da escala.

## 5. Raio, borda e sombra

```css
--radius-xs: 2px;
--radius-sm: 4px;   /* cards, inputs (industrial = pouco arredondado) */
--radius-md: 8px;
--radius-pill: 999px; /* botões e badges em pílula */

--shadow-card: 0 1px 2px rgba(0,0,0,.4), 0 16px 40px rgba(0,0,0,.35);
--shadow-float: 0 8px 30px rgba(0,0,0,.45); /* card flutuante do hero */
--border-hair: 1px solid var(--color-line);
```

- Cards escuros: borda hairline em vez de sombra pesada.
- Cards claros sobre fundo escuro: sombra suave para "levantar".
- Régua dourada de seção: 1px, `--color-gold`, largura ~48–64px ao lado do label.

## 6. Componentes (especificação)

### 6.1 Rótulo de seção
`• CAIXA-ALTA` em mono, `--font-label`, cor `--color-gold`, tracking `0.08em`. Bullet redondo dourado de 6px. Aparece no topo de cada seção.

### 6.2 Botão
- **Primário**: pílula, fundo `--color-gold`, texto `--color-ink`, peso 600. Hover → `--color-gold-soft` + leve scale (ver animações) + ícone de seta que desliza.
- **Secundário/ghost**: pílula transparente, borda hairline, texto claro. Hover → fundo `--color-bg-soft`.
- **Texto/link**: sublinhado animado (underline que cresce da esquerda no hover) em dourado.
- Altura mínima 44px (toque). Ícone Lucide opcional à direita (`ArrowUpRight` / `ArrowRight`).

### 6.3 Nav
Fixa, transparente no topo. Ao rolar > 80px: fundo `--color-bg-elev` com `backdrop-filter: blur(12px)` + borda inferior hairline. Wordmark à esquerda, links centrais com underline animado, CTA primário à direita. Mobile: menu fullscreen escuro com itens em `--font-display-m`, transição em stagger.

### 6.4 Card de produto (catálogo)
- Topo: foto do equipamento sobre **superfície clara** (`--color-surface`), raio `--radius-sm`, padding interno.
- Abaixo: **badge da linha** (Steel/Zeus/BSC), **nome** em display peso 600, **bloco de preço** dourado (texto preto), e specs em mono (`Dimensões`, `Peso`, `Material`).
- Hover: imagem dá leve zoom (`scale(1.04)`) com `overflow:hidden`; surge link "Ver detalhes" com seta. Cursor pode trocar para label (ver animações).

### 6.5 Card flutuante do hero
Glassmorphism discreto sobre a imagem do hero: `background: rgba(20,20,22,.55)`, `backdrop-filter: blur(16px)`, borda hairline, raio `--radius-md`, sombra `--shadow-float`. Conteúdo: thumbnail do equipamento + nome + 1 linha + botão.

### 6.6 Lista numerada de categorias (bloco-assinatura)
Linhas separadas por borda hairline. Cada linha: número em mono dourado (`01`), nome da categoria em display, e à direita a contagem (`10 produtos`) + ícone seta. **Hover**: a linha clareia levemente e uma imagem do equipamento aparece (fade + leve translate) num painel fixo ao lado direito (desktop). No mobile: thumbnail fixa à esquerda de cada linha.

### 6.7 Bloco de diferenciais 01–04
Grid de 4 colunas (2x2 no tablet, 1 col no mobile). Cada item: número em mono, título display curto, parágrafo dim. **Um** dos itens é um card preenchido em dourado (texto preto) com a foto — destaque visual, igual ao card "Strength" da referência.

### 6.8 Footer
Frase de marca grande, colunas de links em `--font-small`, contato, e o **wordmark "OLYMPO"** ocupando a largura, em `--font-display-xl`+, cor `rgba(245,244,241,0.04)` (marca-d'água). Linha de copyright em mono `--font-label`.

### 6.9 Badge de linha
Pílula pequena: Steel (borda dourada, texto claro), Zeus (fundo dourado, texto preto), BSC (borda neutra, texto dim). Sempre visível no card e no detalhe.

## 7. Iconografia e imagens
- Ícones: **Lucide**, traço 1.5px, tamanho consistente (16–20px na UI).
- Fotos de produto: recortadas sobre `--color-surface`; manter proporção; `next/image` com `sizes` corretos; `alt` = nome do equipamento + linha.
- Atmosfera do hero/sections escuras: foto escura + overlay + **grain/noise sutil** (textura via SVG/`background` ou camada com `mix-blend-mode`) para dar profundidade — sem exageros.

## 8. Tema e modo
- O site é **dark por padrão** (a identidade é escura). Não precisa de light mode.
- Blocos claros (cards de produto, eventual seção invertida) são parte do design, não um "modo".

## 9. Acessibilidade (tokens de foco)
```css
--focus-ring: 0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-gold);
```
- `:focus-visible` usa `--focus-ring` em todo elemento interativo.
- Não comunicar informação só por cor (badge de linha tem texto).
- Respeitar `prefers-reduced-motion` (ver `02-animacoes-interacoes.md`).
