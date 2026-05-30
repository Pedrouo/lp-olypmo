# Olympo Steel — Pacote de Prompts (Antigravity / Claude)

Pacote de briefing para construir o site institucional + catálogo da **Olympo Steel Ltda** com o agente do Google Antigravity (rodando Claude).

## Arquivos (leia nesta ordem)

1. **`00-master-prompt.md`** — briefing principal. É o que você cola/aponta como tarefa.
2. **`01-design-system.md`** — cores, tipografia, grid, componentes (fonte da verdade visual).
3. **`02-animacoes-interacoes.md`** — motion, micro-interações, performance, reduced-motion.
4. **`03-conteudo-catalogo.md`** — todos os produtos, preços e specs (dados reais) + tom de voz.

## Como usar no Antigravity

1. Crie o projeto/pasta e coloque os 4 `.md` em `/docs` na raiz do workspace.
2. **Anexe à tarefa** (multimodal): a **imagem de referência** (site Lefore) e o **PDF do catálogo**. Diga ao agente: *a imagem é só referência de layout/acabamento; a paleta e o conteúdo são da Olympo (preto+dourado), conforme os docs.*
3. Inicie a tarefa colando o conteúdo de `00-master-prompt.md` (ou apontando para ele) e instrua: **"Leia `/docs/00` a `/docs/03` antes de planejar. Gere o plano de implementação e aguarde minha validação."**
4. Opcional (recomendado): transforme `01-design-system.md` e `02-animacoes-interacoes.md` em **Skills** do Antigravity (pasta com `SKILL.md`) — assim entram no contexto sob demanda, sem inflar tudo de uma vez.
5. Use a **verificação no browser** do Antigravity após cada seção: screenshot + comparação com a referência e com o checklist anti-IA (seção 7 do master).

## Resumo da direção
- Arquitetura e polimento = site Lefore (referência).
- Identidade = Olympo: **preto + dourado, industrial-luxo**.
- Conteúdo = catálogo real (linhas Steel/Zeus/BSC, aço carbono, pintura eletrostática).
- Meta: parecer **estúdio premium**, não IA. Responsivo, acessível, Lighthouse ≥ 90.
