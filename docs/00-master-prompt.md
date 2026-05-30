# MASTER PROMPT — Site Institucional Olympo Steel Ltda

> **Para o agente (Antigravity / Claude):** Este é o documento mestre do projeto. Antes de planejar ou escrever qualquer linha de código, leia este arquivo por completo e depois leia, nesta ordem, os arquivos complementares: `01-design-system.md`, `02-animacoes-interacoes.md` e `03-conteudo-catalogo.md`. Eles são a fonte da verdade. Em caso de conflito entre seu conhecimento prévio e estes documentos, **estes documentos vencem**.

---

## 1. O que vamos construir

Um **site institucional + catálogo** para a **Olympo Steel Ltda**, fábrica brasileira de equipamentos de musculação. Não é e-commerce: o objetivo é apresentar a marca, as três linhas de produto e o catálogo completo de forma sofisticada, levando o visitante a entrar em contato / pedir orçamento.

O resultado precisa parecer feito por um **estúdio de design premium** — não por uma IA. Isso é um critério de aprovação, não um detalhe (ver seção 7).

## 2. Referência visual (obrigatória)

Junto deste pacote há uma **imagem de referência** (um site chamado *Lefore*, de reformers de pilates). **A referência define a ARQUITETURA e o NÍVEL de acabamento, não a paleta.**

O que copiar fielmente da referência:
- A **estrutura de seções** e o ritmo da página (hero → manifesto → linhas → catálogo numerado → diferenciais → produto em destaque → personalização → footer).
- A **filosofia de espaço em branco** generoso, respiro entre blocos e composição editorial assimétrica.
- Os **padrões de componente**: nav transparente fixa, card de produto flutuante sobre o hero, rótulos de seção com bullet + caixa-alta espaçada (`• SOBRE NÓS`), listas numeradas (`01 / 02 / 03`), setas de carrossel, e o **wordmark gigante de marca-d'água no rodapé**.
- O tom de voz: títulos curtos, em caixa-baixa/sentence case, terminados em ponto final ("Força, projetada para durar.").

O que **NÃO** copiar:
- A paleta clara/bege/areia da Lefore. A Olympo é **preta com dourado**, pegada industrial. Você vai **traduzir** a linguagem editorial da Lefore para o universo escuro/industrial-luxo da Olympo (ver `01-design-system.md`).
- Textos, nomes e produtos da Lefore. Todo o conteúdo vem do catálogo da Olympo (`03-conteudo-catalogo.md`).

> **Resolvendo a tensão claro × escuro:** a Lefore é clara e arejada; a Olympo é escura e dourada. A síntese é **"editorial escuro / industrial-luxo"**: fundos quase pretos, tipografia clara, dourado como acento cirúrgico, e **cards de produto sobre fundo claro/off-white** (exatamente como as fotos do catálogo, que vêm em fundo branco). Esse contraste claro-sobre-escuro é o que dá o ar premium.

## 3. Identidade da marca

- **Nome:** Olympo Steel Ltda — *Fábrica de Equipamentos*.
- **Linhas:** **Steel** (profissional para academias), **Zeus** (premium, com torre de pesos integrada), **BSC** (básica, alto custo-benefício).
- **Material assinatura:** *Aço Carbono com Pintura Eletrostática* — repetir como selo de qualidade.
- **Diferencial:** produtos personalizados e sob medida.
- **Logo:** halterofilista + louros dourados + monograma; fundo preto. Use o arquivo de logo se fornecido; senão, deixe um placeholder semântico (`<Logo />`) e o wordmark tipográfico "OLYMPO".

## 4. Stack técnica

Salvo instrução contrária do Pedro, use:

- **Next.js (App Router) + TypeScript** — bom para SEO, performance e exportação estática.
- **Tailwind CSS** com os tokens de design definidos em `01-design-system.md` mapeados em `tailwind.config` e em CSS variables (`globals.css`).
- **Motion** (Framer Motion) para orquestração de animações em React.
- **Lenis** para smooth scroll (acabamento premium).
- **next/font** para carregar as fontes (ou `@fontsource` / Fontshare conforme `01-design-system.md`).
- **next/image** para todas as imagens de produto (lazy + responsivo).
- Ícones: **Lucide** (traço fino) — nunca emoji.

Princípios não negociáveis:
- **Mobile-first** e 100% responsivo (testar 360px, 768px, 1024px, 1440px).
- **Acessibilidade**: contraste AA, navegação por teclado, `:focus-visible`, `prefers-reduced-motion`, `alt` descritivo em toda imagem, landmarks semânticos.
- **Performance**: meta Lighthouse ≥ 90 em Performance/Best Practices/SEO/Acessibilidade. Sem libs pesadas desnecessárias.
- Código **componentizado, tipado e comentado** onde a lógica não for óbvia.

## 5. Arquitetura da informação (seções da home)

Construa a home como uma página de rolagem única, na ordem abaixo. Os números em `01/02/...` da referência devem aparecer nos blocos indicados.

1. **Nav fixa transparente** — wordmark à esquerda; links: Equipamentos, Linhas, Diferenciais, Catálogo, Contato; CTA à direita: **"Pedir orçamento"**. Ao rolar, ganha fundo escuro com blur e leve borda inferior.

2. **Hero (full-bleed escuro)** — título de impacto (ex.: *"Força projetada para durar."*), subtítulo curto sobre a fábrica, CTA primário **"Explorar equipamentos"**. Um **card de produto flutuante** no canto (destaque de um equipamento da Linha Zeus, com nome, mini-descrição e botão). Imagem/atmosfera de fundo escura com leve textura/grain. Reveal em stagger no load.

3. **Manifesto / Sobre** — bloco centralizado, rótulo `• SOBRE NÓS`, uma frase-manifesto grande (ex.: *"A Olympo Steel projeta e fabrica equipamentos de musculação que unem engenharia em aço carbono e acabamento de fábrica."*) e um botão "Sobre nós".

4. **Linhas de produto** — rótulo `• NOSSAS LINHAS`, título curto, e **3 cards editoriais** (Steel, Zeus, BSC) com imagem, nome, frase e link "Explorar". Equivale ao bloco "Train with purpose" da referência.

5. **Catálogo por categorias (lista numerada com hover-image)** — este é o bloco-assinatura. Rótulo `• CATÁLOGO`, título tipo *"Nossos sistemas para cada grupo muscular."*, e uma **lista numerada** das 9 categorias (Peitoral, Costas, Ombro e Tríceps, Pernas, Glúteo e Core, Panturrilha e Especiais, Crossover e Smith, Bancos, Suportes e Expositores), cada linha mostrando a contagem de produtos. Ao passar o mouse numa linha, uma imagem do equipamento aparece/transiciona ao lado (padrão "Our most popular systems" da referência). No mobile, vira lista com thumbnail.

6. **Diferenciais (grid 01–04)** — rótulo `• POR QUE OLYMPO`, e 4 colunas numeradas: **01 Aço Carbono**, **02 Pintura Eletrostática**, **03 Sob Medida**, **04 Durabilidade Profissional**. Uma das colunas pode virar um card destacado em dourado (como o card "Strength" da referência).

7. **Produto em destaque (imagem grande)** — seção full-bleed com um flagship (ex.: Leg Press 45° Robust ou Crossover Angular), com um card sobreposto "Linha Steel / Zeus" + CTA. Equivale a "Built for the full package".

8. **Personalização / Sob medida** — rótulo `• SOB MEDIDA`, título *"Configure equipamentos sob medida para o seu espaço."*, texto curto e CTA **"Falar com a fábrica"**. Card "Vamos conversar" com efeito glass sobre imagem.

9. **Footer** — frase de marca, links agrupados (Equipamentos / Linhas / Suporte / Contato), contato (placeholder de e-mail/telefone), e o **wordmark "OLYMPO" gigante como marca-d'água** na base. Aviso de copyright "© 2026 Olympo Steel Ltda".

### Página secundária (recomendada)
- **/catalogo** — grid de todos os produtos com **filtros por categoria e por linha** (Steel/Zeus/BSC), busca por nome, e cada card mostrando foto, nome, linha (badge), preço (em bloco dourado com texto preto, como no catálogo) e specs (dimensões/peso). Dados em `03-conteudo-catalogo.md`. Clicar abre um modal/drawer ou página de detalhe com as specs completas.

## 6. Regras de conteúdo

- **Idioma:** Português do Brasil. Formato de preço: `R$ 15.800,00`.
- Use **somente** os produtos, preços e specs de `03-conteudo-catalogo.md`. Não invente dados.
- Onde faltar texto (manifesto, descrições de linha, diferenciais), **escreva você** um copy curto, técnico e seco, no tom industrial-premium — frases curtas, sem floreio, sem jargão de marketing batido ("revolucionário", "incrível", "o melhor do mercado"). Pense em linguagem de ficha técnica + editorial.
- Bloco de preço: caixa dourada sólida com o valor em **preto**, e o nome da linha em itálico ao lado (replicando o catálogo).
- As specs (Dimensões / Peso / Material) devem usar a fonte **monoespaçada** definida no design system — reforça o ar de ficha técnica de fábrica.

## 7. Anti-"cara de IA" (checklist de aprovação)

O site **reprova** se cair em qualquer um destes vícios. Verifique ativamente:

- [ ] Nada de fonte genérica (Inter, Roboto, Arial, system-ui como display). Use o pareamento de `01-design-system.md`.
- [ ] Nada de gradiente roxo/azul "SaaS genérico". A cor é preto + dourado.
- [ ] Nada de tudo centralizado e simétrico. Use **assimetria, grid de 12 colunas, sobreposição e quebras de grid** intencionais.
- [ ] Nada de cards iguais com sombra padrão e cantos muito arredondados. Raio sutil (ver tokens), sombras discretas, hierarquia real.
- [ ] Sem emoji, sem ilustrações "corporate Memphis", sem stock genérico.
- [ ] Espaçamento e tipografia **impecáveis** — alinhamentos em grade, escala tipográfica consistente, ritmo vertical correto.
- [ ] Micro-interações com propósito (ver `02-animacoes-interacoes.md`), não animação por animação.
- [ ] Detalhe editorial presente: rótulos de seção, numeração, linhas/réguas finas, wordmark de rodapé, hover-reveal de imagem na lista de categorias.

## 8. Fluxo de trabalho dentro do Antigravity

1. **Planeje primeiro.** Gere um plano de implementação (Planning) com: scaffold do projeto, sistema de design (tokens + globals + tailwind config), layout/nav/footer, cada seção como componente, página /catalogo com dados, animações e por fim QA. Aguarde validação do plano antes de codar tudo.
2. **Trate `01`, `02` e `03` como conhecimento de referência.** Se o Antigravity suportar *Skills*, transforme `01-design-system.md` e `02-animacoes-interacoes.md` em skills (pasta `SKILL.md`) para serem carregadas sob demanda. Caso contrário, deixe os quatro `.md` em `/docs` na raiz e referencie-os.
3. **Imagem de referência + catálogo (PDF)** entram como anexos multimodais da tarefa: use a imagem só para calibrar layout/acabamento; use o PDF para extrair as fotos dos produtos (se for fazer download/recorte) e conferir specs.
4. **Verifique no browser embutido.** Após cada seção, abra `localhost`, tire screenshot e confira contra este briefing e contra a referência (espaçamento, hierarquia, hover states, responsividade). Corrija antes de seguir.
5. **Entregue incrementos revisáveis** — não despeje o site inteiro de uma vez sem checkpoints.

## 9. Definition of Done

- Home com as 9 seções + /catalogo funcional com filtros.
- Design fiel ao `01-design-system.md` e animações conforme `02-animacoes-interacoes.md`.
- 100% responsivo, acessível (AA, teclado, reduced-motion) e Lighthouse ≥ 90.
- Zero placeholder de "lorem ipsum" em produção; dados reais do catálogo.
- Passou no checklist anti-IA da seção 7.
- README com instruções de `dev`, `build` e onde trocar logo/imagens/contato.
