# ANIMAÇÕES & INTERAÇÕES — Olympo Steel

> **Para o agente:** Animação tem que ter **propósito** — guiar atenção, dar continuidade e reforçar o ar premium. Nada de "animar por animar". Prefira `transform` e `opacity` (compositor da GPU); evite animar `width`, `top`, `box-shadow` pesado. Em React, use **Motion (Framer Motion)**; para scroll suave, **Lenis**. **Sempre** respeite `prefers-reduced-motion`.

---

## 1. Princípios

1. **Um grande momento por tela.** Um load de hero bem orquestrado (stagger) vale mais que 20 micro-animações espalhadas.
2. **Rápido para a UI, calmo para o conteúdo.** Hovers ~150–250ms; revelações de seção ~600–900ms.
3. **Easing com personalidade.** Use curvas custom (abaixo); nada de `ease`/`linear` no conteúdo.
4. **Movimento curto.** Translates de 12–32px, scales de 1.02–1.06. Sutileza é luxo.
5. **Sem layout shift.** Animação nunca pode empurrar conteúdo nem piorar CLS.

## 2. Tokens de motion

```css
/* Durações */
--dur-instant: 120ms;
--dur-fast:    200ms;
--dur-base:    400ms;
--dur-slow:    700ms;
--dur-slower:  1000ms;

/* Easings */
--ease-out:      cubic-bezier(0.22, 1, 0.36, 1);   /* padrão de saída (expo-out) */
--ease-in-out:   cubic-bezier(0.65, 0, 0.35, 1);
--ease-emphasis: cubic-bezier(0.16, 1, 0.3, 1);    /* reveals de destaque */
```

Em Motion (JS):
```ts
const easeOut = [0.22, 1, 0.36, 1];
const emphasis = [0.16, 1, 0.3, 1];
```

## 3. Page load — hero (o momento principal)

Sequência em **stagger** ao montar (não no scroll, pois é topo da página):
1. Nav desce/fade (`y: -12 → 0`, `--dur-base`).
2. Rótulo de seção fade-up.
3. Título do hero: revela **por linha** (clip/mask + `y: 110% → 0`), `--dur-slow`, `--ease-emphasis`, stagger 80–120ms entre linhas.
4. Subtítulo + CTA fade-up (`y: 16 → 0`), delay após o título.
5. Card flutuante: fade + `y: 24 → 0` + leve `scale: 0.98 → 1`, por último.

Stagger global ~80–120ms entre grupos. Total da orquestra ≤ ~1.4s.

## 4. Scroll reveals (conteúdo abaixo da dobra)

- Padrão: `opacity 0→1` + `y: 24→0`, `--dur-slow`, `--ease-out`, disparado quando ~20% do elemento entra na viewport (`whileInView` / IntersectionObserver). **Dispare uma vez** (`once: true`).
- Em grupos (cards de linha, colunas de diferenciais, itens de catálogo): **stagger** de 60–100ms.
- Títulos de seção podem usar o mesmo reveal por linha do hero (mask + slide-up).
- **Não** anime tudo; blocos de texto corrido podem só fazer fade leve.

## 5. Micro-interações (hover / focus)

- **Botão primário**: `scale 1→1.03` + brilho (gold → gold-soft) em `--dur-fast`; seta interna desliza `x: 0→4px`.
- **Link de texto**: underline cresce da esquerda (`scaleX 0→1`, `transform-origin:left`).
- **Card de produto**: imagem `scale 1→1.04` (container `overflow:hidden`); meta-info sobe levemente; aparece "Ver detalhes".
- **Botão magnético** (opcional, só desktop com mouse fino): o botão segue levemente o cursor dentro de um raio (translate máx ~8px), voltando com spring suave. Desligar no touch e no reduced-motion.
- **Foco por teclado**: anel `--focus-ring` aparece sem animação chamativa.

## 6. Lista de categorias — hover-image (assinatura)

Desktop:
- Painel de imagem fixo à direita. Ao entrar numa linha (`onMouseEnter`), troca a imagem com **crossfade + leve scale/translate** (`--dur-base`, `--ease-out`).
- A linha ativa: número e nome ganham dourado; demais linhas levemente esmaecidas (`opacity .55`).
- Acompanhar a posição vertical do cursor com um leve parallax na imagem (opcional, sutil).

Mobile: sem hover — cada linha já tem thumbnail à esquerda; tap leva ao detalhe.

## 7. Carrossel / setas

- Carrosséis (linhas de produto, coleção em destaque) com **scroll-snap** + setas (Lucide `ArrowLeft/Right`).
- Arraste no touch; setas no desktop. Botão desabilitado ganha `opacity .4`.
- Transição de slide via `transform` com `--ease-out`; nunca `scrollLeft` animado na unha sem suavização.

## 8. Smooth scroll & âncoras

- **Lenis** para suavizar a rolagem global (lerp ~0.1). Integrar com o `whileInView` do Motion (usar o tempo do Lenis no rAF).
- Links da nav fazem scroll suave até a seção com offset da altura da nav.
- Desativar Lenis quando `prefers-reduced-motion: reduce`.

## 9. Detalhes de atmosfera (opcionais, com parcimônia)

- **Marquee** de marca: faixa com "AÇO CARBONO • PINTURA ELETROSTÁTICA • LINHA STEEL • ZEUS • BSC •" rolando devagar em loop (`--dur-slower`+), pausando no hover. Bom como divisória entre seções.
- **Contadores** que sobem ao entrar na viewport (ex.: nº de produtos, anos, modelos) — animar números com Motion, `once`.
- **Grain/noise** estático no fundo escuro (não animado, ou com flicker imperceptível) para profundidade.
- **Cursor custom** (opcional, desktop fino): ponto + anel que cresce sobre elementos interativos e vira label ("ver", "arraste"). Sempre com fallback para cursor nativo e desligado no touch/reduced-motion.

## 10. `prefers-reduced-motion` (obrigatório)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```
- Em JS/Motion: detectar `useReducedMotion()` e **substituir** slides/scales por fade simples (ou nada). Desligar Lenis, parallax, marquee infinito, cursor custom e botão magnético.

## 11. Performance
- Animar só `transform`/`opacity`. Usar `will-change` **apenas** durante a animação e remover depois.
- `IntersectionObserver` com `once: true` para não re-observar.
- Imagens com `next/image` + `priority` só no hero; resto lazy.
- Evitar animar muitos elementos simultâneos no scroll (limitar stagger a grupos visíveis).
- Conferir que CLS ≈ 0 e que o load do hero não trava a thread principal.
