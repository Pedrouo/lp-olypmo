# Olympo Steel — Site Institucional + Catálogo

Site institucional da **Olympo Steel Ltda**, fábrica brasileira de equipamentos de musculação.  
Direção estética: **editorial escuro / industrial-luxo** (preto + dourado).

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** com tokens de design personalizados
- **Framer Motion** para animações e micro-interações
- **Lenis** para smooth scroll
- **Lucide** para ícones

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar build de produção
npm start
```

O site roda em `http://localhost:3000`.

## Estrutura

```
app/               → Páginas (home + /catalogo)
components/        → Componentes React
  sections/        → Seções da home (Hero, Manifesto, etc.)
  motion/          → Componentes de animação (ScrollReveal, SmoothScroll)
  ui/              → Componentes de UI (Button)
data/              → Dados dos produtos (81 equipamentos)
docs/              → Briefing e referência visual (prompts)
public/            → Assets estáticos
```

## Customização

### Logo
Substituir o wordmark "OLYMPO" no `Nav.tsx` e `Footer.tsx` por uma tag `<Image>` com o logo real.

### Imagens de produto
Os cards usam placeholders. Para adicionar fotos reais:
1. Coloque as imagens em `public/products/`
2. Atualize `data/products.ts` adicionando um campo `imagem` com o path
3. Substitua os placeholders SVG nos componentes por `<Image src={product.imagem}>` com `next/image`

### Contato
Atualize os dados de contato (e-mail, telefone, endereço) em:
- `components/Footer.tsx` (links de contato)
- `data/products.ts` ou crie um `data/contact.ts`

## Linhas de Produto

| Linha | Descrição |
|-------|-----------|
| **Steel** | Equipamentos profissionais para academias |
| **Zeus** | Linha premium com torre de pesos integrada |
| **BSC** | Alto custo-benefício |

## Licença

Projeto proprietário — Olympo Steel Ltda © 2026
