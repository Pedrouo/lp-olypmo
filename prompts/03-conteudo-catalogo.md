# CONTEÚDO DO CATÁLOGO — Olympo Steel

> **Para o agente:** Use **exclusivamente** estes dados para popular o site (home + /catalogo). Não invente produtos, preços ou medidas. Preços em `R$ #.###,##`. Material de todos: *Aço Carbono | Pintura Eletrostática*. Onde houver descrição de copy a escrever (linhas, diferenciais, manifesto), siga o tom de voz da seção 4.

---

## 1. Marca

- **Nome:** Olympo Steel Ltda — *Fábrica de Equipamentos*
- **Tagline:** Linha Steel · Linha Zeus · Linha BSC
- **Material assinatura:** Aço Carbono com Pintura Eletrostática
- **Promessa:** alta qualidade, durabilidade profissional, produtos sob medida.

## 2. Linhas de produto

- **Steel** — Equipamentos profissionais para academias. Carro-chefe do catálogo.
- **Zeus** — Linha premium, com torre de pesos integrada (carenagem, acabamento superior).
- **BSC** — Linha básica de alto custo-benefício.
- *Observação:* alguns itens aparecem rotulados como **Olympo**, **Steel Pro**, **Steel Robust** ou **Basic** no catálogo — preserve o rótulo exato no badge.

## 3. Categorias (para o índice / lista numerada)

| # | Categoria | Produtos |
|---|---|---|
| 01 | Peitoral | 10 |
| 02 | Costas | 15 |
| 03 | Ombro e Tríceps | 5 |
| 04 | Pernas | 14 |
| 05 | Glúteo e Core | 8 |
| 06 | Panturrilha e Especiais | 4 |
| 07 | Crossover e Smith | 3 |
| 08 | Bancos | 4 |
| 09 | Suportes e Expositores | 18 |

*(As contagens acima são as do índice oficial do catálogo; use-as nos rótulos. A lista de itens abaixo reflete o que está detalhado nas páginas — em pouquíssimos casos o nº de itens listados difere em 1 do índice; priorize os itens listados para montar os cards.)*

## 4. Tom de voz para copy a escrever

Seco, técnico, editorial. Frases curtas. Sem "revolucionário/incrível/o melhor". Pense em ficha técnica + manifesto industrial.

- **Manifesto (exemplo):** "A Olympo Steel projeta e fabrica equipamentos de musculação em aço carbono, com acabamento de fábrica e durabilidade de uso profissional."
- **Steel:** "Equipamentos profissionais para academias. Construção sólida, geometria precisa."
- **Zeus:** "Linha premium com torre de pesos integrada. Carenagem e acabamento de alto padrão."
- **BSC:** "Alto custo-benefício, sem abrir mão da resistência do aço carbono."
- **Diferenciais:** 01 Aço Carbono · 02 Pintura Eletrostática · 03 Sob Medida · 04 Durabilidade Profissional.

## 5. Dados dos produtos (JSON)

> Estrutura por produto: `nome`, `preco` (number, em reais), `precoFmt` (string formatada), `linha`, `dimensoes` (string como no catálogo), `peso`, `categoria`. Material é constante.

```json
{
  "material": "Aço Carbono | Pintura Eletrostática",
  "categorias": [
    {
      "id": "peitoral",
      "nome": "Peitoral",
      "produtos": [
        { "nome": "Banco Supino Reto Olímpico", "preco": 5100, "precoFmt": "R$ 5.100,00", "linha": "Steel", "dimensoes": "1,45m (C) x 1,25m (L) x 1,30m (A)", "peso": "95 kg" },
        { "nome": "Banco Supino Declinado Olímpico", "preco": 5600, "precoFmt": "R$ 5.600,00", "linha": "Steel", "dimensoes": "1,65m (C) x 1,25m (L) x 1,30m (A)", "peso": "75 kg" },
        { "nome": "Supino Inclinado Olímpico", "preco": 6300, "precoFmt": "R$ 6.300,00", "linha": "Steel", "dimensoes": "2,10m (C) x 1,50m (L) x 1,45m (A)", "peso": "78 kg" },
        { "nome": "Supino Reto Horizontal Articulado", "preco": 10000, "precoFmt": "R$ 10.000,00", "linha": "Olympo", "dimensoes": "1,90m (C) x 1,50m (L) x 1,05m (A)", "peso": "155 kg" },
        { "nome": "Supino Sentado Articulado", "preco": 15800, "precoFmt": "R$ 15.800,00", "linha": "Steel", "dimensoes": "1,95m (C) x 1,45m (L) x 1,20m (A)", "peso": "165 kg" },
        { "nome": "Supino Inclinado Articulado (Gaiola)", "preco": 15800, "precoFmt": "R$ 15.800,00", "linha": "Zeus", "dimensoes": "1,55m (C) x 1,80m (L) x 1,70m (A)", "peso": "185 kg" },
        { "nome": "Supino Declinado Articulado (Gaiola)", "preco": 15800, "precoFmt": "R$ 15.800,00", "linha": "Zeus", "dimensoes": "1,55m (C) x 1,80m (L) x 1,60m (A)", "peso": "180 kg" },
        { "nome": "Pull-Over Articulado (Gold Edition)", "preco": 18800, "precoFmt": "R$ 18.800,00", "linha": "Zeus", "dimensoes": "1,65m (C) x 1,35m (L) x 1,60m (A)", "peso": "160 kg" },
        { "nome": "Crucifixo Articulado", "preco": 10900, "precoFmt": "R$ 10.900,00", "linha": "Steel", "dimensoes": "1,45m (C) x 1,60m (L) x 1,10m (A)", "peso": "108 kg" },
        { "nome": "Fly Voador Peitoral", "preco": 16800, "precoFmt": "R$ 16.800,00", "linha": "Zeus", "dimensoes": "1,20m (C) x 1,10m (L) x 1,65m (A)", "peso": "285 kg" }
      ]
    },
    {
      "id": "costas",
      "nome": "Costas",
      "produtos": [
        { "nome": "Remada Deitada (Seal Row)", "preco": 6600, "precoFmt": "R$ 6.600,00", "linha": "Steel", "dimensoes": "1,85m (C) x 1,10m (L) x 1,00m (A)", "peso": "85 kg" },
        { "nome": "Remada Articulada Baixa", "preco": 13500, "precoFmt": "R$ 13.500,00", "linha": "Zeus", "dimensoes": "2,10m (C) x 1,20m (L) x 1,45m (A)", "peso": "180 kg" },
        { "nome": "Remada Articulada Cavalo (Low Row)", "preco": 13500, "precoFmt": "R$ 13.500,00", "linha": "Zeus", "dimensoes": "2,10m (C) x 1,20m (L) x 1,45m (A)", "peso": "210 kg" },
        { "nome": "Remada Guiada 45°", "preco": 10500, "precoFmt": "R$ 10.500,00", "linha": "Steel", "dimensoes": "2,15m (C) x 1,00m (L) x 1,25m (A)", "peso": "120 kg" },
        { "nome": "Remada Baixa (Torre)", "preco": 13500, "precoFmt": "R$ 13.500,00", "linha": "BSC", "dimensoes": "1,75m (C) x 1,10m (L) x 1,95m (A)", "peso": "260 kg" },
        { "nome": "Remada Baixa Torre Carenada", "preco": 16200, "precoFmt": "R$ 16.200,00", "linha": "Zeus", "dimensoes": "1,75m (C) x 1,10m (L) x 1,95m (A)", "peso": "260 kg" },
        { "nome": "Remada Frontal Articulada BSC", "preco": 11400, "precoFmt": "R$ 11.400,00", "linha": "Basic", "dimensoes": "1,40m (C) x 1,30m (L) x 1,20m (A)", "peso": "110 kg" },
        { "nome": "Remada Frontal Articulada Steel", "preco": 14600, "precoFmt": "R$ 14.600,00", "linha": "Steel", "dimensoes": "1,55m (C) x 1,35m (L) x 1,25m (A)", "peso": "135 kg" },
        { "nome": "Remada Frontal (Torre)", "preco": 15900, "precoFmt": "R$ 15.900,00", "linha": "Zeus", "dimensoes": "1,60m (C) x 1,10m (L) x 1,95m (A)", "peso": "255 kg" },
        { "nome": "Remada Pendular Articulada", "preco": 15800, "precoFmt": "R$ 15.800,00", "linha": "Steel", "dimensoes": "1,95m (C) x 1,15m (L) x 1,55m (A)", "peso": "140 kg" },
        { "nome": "Puxada Alta e Baixa (Conjugada)", "preco": 16200, "precoFmt": "R$ 16.200,00", "linha": "Zeus", "dimensoes": "1,90m (C) x 1,15m (L) x 2,30m (A)", "peso": "285 kg" },
        { "nome": "Puxada Baixa Articulada (Gaiola)", "preco": 15800, "precoFmt": "R$ 15.800,00", "linha": "Zeus", "dimensoes": "1,70m (C) x 1,55m (L) x 1,25m (A)", "peso": "165 kg" },
        { "nome": "Puxada Alta Frontal", "preco": 15800, "precoFmt": "R$ 15.800,00", "linha": "Zeus", "dimensoes": "1,40m (C) x 1,15m (L) x 2,30m (A)", "peso": "275 kg" },
        { "nome": "Pulley 2 em 1", "preco": 16200, "precoFmt": "R$ 16.200,00", "linha": "Steel", "dimensoes": "1,90m (C) x 1,10m (L) x 2,25m (A)", "peso": "130 kg" },
        { "nome": "Rosca Scott Articulada", "preco": 10400, "precoFmt": "R$ 10.400,00", "linha": "Steel", "dimensoes": "1,35m (C) x 1,15m (L) x 1,10m (A)", "peso": "85 kg" },
        { "nome": "Tríceps Dip Articulado", "preco": 15000, "precoFmt": "R$ 15.000,00", "linha": "Steel", "dimensoes": "1,65m (C) x 1,30m (L) x 1,15m (A)", "peso": "145 kg" }
      ]
    },
    {
      "id": "ombro-triceps",
      "nome": "Ombro e Tríceps",
      "produtos": [
        { "nome": "Cadeira Militar", "preco": 6450, "precoFmt": "R$ 6.450,00", "linha": "Steel", "dimensoes": "1,90m (C) x 1,40m (L) x 1,75m (A)", "peso": "48 kg" },
        { "nome": "Desenvolvimento de Ombro (Torre)", "preco": 16800, "precoFmt": "R$ 16.800,00", "linha": "Zeus", "dimensoes": "1,40m (C) x 1,35m (L) x 1,65m (A)", "peso": "245 kg" },
        { "nome": "Desenvolvimento de Ombro Gaiola (Militar)", "preco": 15800, "precoFmt": "R$ 15.800,00", "linha": "Steel", "dimensoes": "1,20m (C) x 1,15m (L) x 1,80m (A)", "peso": "172 kg" },
        { "nome": "Tríceps Machine", "preco": 17800, "precoFmt": "R$ 17.800,00", "linha": "Zeus", "dimensoes": "1,50m (C) x 1,15m (L) x 1,60m (A)", "peso": "245 kg" }
      ]
    },
    {
      "id": "pernas",
      "nome": "Pernas",
      "produtos": [
        { "nome": "Leg Press Articulado Titan", "preco": 7999.99, "precoFmt": "R$ 7.999,99", "linha": "Steel", "dimensoes": "2,25m (C) x 1,55m (L) x 1,50m (A)", "peso": "285 kg" },
        { "nome": "Leg Press Horizontal (Torre)", "preco": 15800, "precoFmt": "R$ 15.800,00", "linha": "Zeus", "dimensoes": "1,95m (C) x 1,10m (L) x 1,85m (A)", "peso": "280 kg" },
        { "nome": "Leg Press 45° Robust (Anilhas)", "preco": 20900, "precoFmt": "R$ 20.900,00", "linha": "Steel Robust", "dimensoes": "2,35m (C) x 1,45m (L) x 1,85m (A)", "peso": "190 kg" },
        { "nome": "Leg Press 45° (Pro Series)", "preco": 16500, "precoFmt": "R$ 16.500,00", "linha": "Steel Pro", "dimensoes": "2,40m (C) x 1,85m (L) x 1,55m (A)", "peso": "210 kg" },
        { "nome": "Hack Squat Vertical", "preco": 13500, "precoFmt": "R$ 13.500,00", "linha": "Steel", "dimensoes": "2,65m (C) x 1,60m (L) x 2,10m (A)", "peso": "228 kg" },
        { "nome": "Hack Squat Linear (Sentado)", "preco": 16200, "precoFmt": "R$ 16.200,00", "linha": "Steel", "dimensoes": "2,70m (C) x 1,45m (L) x 1,85m (A)", "peso": "170 kg" },
        { "nome": "Cadeira Extensora e Flexora (Olympo)", "preco": 16500, "precoFmt": "R$ 16.500,00", "linha": "Olympo", "dimensoes": "1,45m (C) x 1,15m (L) x 1,60m (A)", "peso": "240 kg" },
        { "nome": "Cadeira Extensora Linha Zeus (Torre)", "preco": 16500, "precoFmt": "R$ 16.500,00", "linha": "Zeus", "dimensoes": "1,40m (C) x 1,15m (L) x 1,60m (A)", "peso": "235 kg" },
        { "nome": "Cadeira Flexora Sentada (Torre)", "preco": 15900, "precoFmt": "R$ 15.900,00", "linha": "Zeus", "dimensoes": "1,45m (C) x 1,10m (L) x 1,60m (A)", "peso": "245 kg" },
        { "nome": "Mesa Romana (Flexora Deitada)", "preco": 18800, "precoFmt": "R$ 18.800,00", "linha": "Zeus", "dimensoes": "1,65m (C) x 1,10m (L) x 1,60m (A)", "peso": "245 kg" },
        { "nome": "Flexor Ajoelhado Unilateral", "preco": 10900, "precoFmt": "R$ 10.900,00", "linha": "Steel", "dimensoes": "1,20m (C) x 1,50m (L) x 1,55m (A)", "peso": "135 kg" },
        { "nome": "Agachamento Pêndulo – Linha Steel", "preco": 24500, "precoFmt": "R$ 24.500,00", "linha": "Steel", "dimensoes": "2,80m (C) x 1,25m (L) x 1,90m (A)", "peso": "165 kg" },
        { "nome": "Rack de Agachamento (Squat Rack)", "preco": 4500, "precoFmt": "R$ 4.500,00", "linha": "Steel", "dimensoes": "1,45m (C) x 1,25m (L) x 1,85m (A)", "peso": "75 kg" },
        { "nome": "Agachamento Sissy – Linha Steel", "preco": 1250, "precoFmt": "R$ 1.250,00", "linha": "Steel", "dimensoes": "1,05m (C) x 0,60m (L) x 0,55m (A)", "peso": "22 kg" }
      ]
    },
    {
      "id": "gluteo-core",
      "nome": "Glúteo e Core",
      "produtos": [
        { "nome": "Elevação Pélvica", "preco": 4800, "precoFmt": "R$ 4.800,00", "linha": "Steel", "dimensoes": "1,60m (C) x 1,40m (L) x 0,95m (A)", "peso": "95 kg" },
        { "nome": "Elevação Pélvica Linear (Guiada)", "preco": 4399, "precoFmt": "R$ 4.399,00", "linha": "Steel", "dimensoes": "1,65m (C) x 1,45m (L) x 1,15m (A)", "peso": "115 kg" },
        { "nome": "Elevação Pélvica Articulada", "preco": 15400, "precoFmt": "R$ 15.400,00", "linha": "Steel", "dimensoes": "1,55m (C) x 1,35m (L) x 0,90m (A)", "peso": "85 kg" },
        { "nome": "Glúteo Coice Articulado (Kickback)", "preco": 9200, "precoFmt": "R$ 9.200,00", "linha": "Steel", "dimensoes": "1,80m (C) x 1,15m (L) x 1,70m (A)", "peso": "100 kg" },
        { "nome": "GHD (Glute Ham Developer)", "preco": 4800, "precoFmt": "R$ 4.800,00", "linha": "Steel", "dimensoes": "1,90m (C) x 1,10m (L) x 1,25m (A)", "peso": "85 kg" },
        { "nome": "Mesa Abdominal Declinada", "preco": 5000, "precoFmt": "R$ 5.000,00", "linha": "Steel", "dimensoes": "1,55m (C) x 0,70m (L) x 1,10m (A)", "peso": "42 kg" },
        { "nome": "Mesa Romana", "preco": 4500, "precoFmt": "R$ 4.500,00", "linha": "Zeus", "dimensoes": "1,35m (C) x 0,83m (L) x 0,90m (A)", "peso": "45 kg" },
        { "nome": "Paralela com Abdominal", "preco": 4500, "precoFmt": "R$ 4.500,00", "linha": "Steel", "dimensoes": "1,20m (C) x 0,75m (L) x 1,65m (A)", "peso": "65 kg" }
      ]
    },
    {
      "id": "panturrilha-especiais",
      "nome": "Panturrilha e Especiais",
      "produtos": [
        { "nome": "Panturrilha Sentado (Cavalinho)", "preco": 5200, "precoFmt": "R$ 5.200,00", "linha": "Steel", "dimensoes": "1,30m (C) x 0,65m (L) x 0,95m (A)", "peso": "55 kg" },
        { "nome": "Panturrilha Sentada – Linha Steel", "preco": 3150, "precoFmt": "R$ 3.150,00", "linha": "Steel", "dimensoes": "1,25m (C) x 0,65m (L) x 0,95m (A)", "peso": "42 kg" },
        { "nome": "Panturrilha em Pé Articulada", "preco": 12800, "precoFmt": "R$ 12.800,00", "linha": "Zeus", "dimensoes": "1,25m (C) x 1,10m (L) x 1,75m (A)", "peso": "95 kg" },
        { "nome": "Gravitron – Linha Zeus (Torre)", "preco": 16800, "precoFmt": "R$ 16.800,00", "linha": "Zeus", "dimensoes": "1,55m (C) x 1,25m (L) x 2,35m (A)", "peso": "275 kg" }
      ]
    },
    {
      "id": "crossover-smith",
      "nome": "Crossover e Smith",
      "produtos": [
        { "nome": "Crossover Angular", "preco": 19800, "precoFmt": "R$ 19.800,00", "linha": "Steel", "dimensoes": "2,40m (L) x 1,10m (P) x 2,30m (A)", "peso": "390 kg" },
        { "nome": "Cross Smith com Barra Guiada (2 em 1)", "preco": 20900, "precoFmt": "R$ 20.900,00", "linha": "Steel", "dimensoes": "1,90m (L) x 1,45m (P) x 2,30m (A)", "peso": "285 kg" },
        { "nome": "Smith Machine (Barra Guiada)", "preco": 16900, "precoFmt": "R$ 16.900,00", "linha": "Steel", "dimensoes": "2,25m (A) x 2,10m (L) x 1,40m (P)", "peso": "125 kg" }
      ]
    },
    {
      "id": "bancos",
      "nome": "Bancos",
      "produtos": [
        { "nome": "Banco Regulável Profissional", "preco": 3000, "precoFmt": "R$ 3.000,00", "linha": "Steel", "dimensoes": "1,35m (C) x 0,60m (L) x 0,45m (A)", "peso": "40 kg" },
        { "nome": "Banco de Remada Curvada (Seal Row)", "preco": 2650, "precoFmt": "R$ 2.650,00", "linha": "Steel", "dimensoes": "1,60m (C) x 0,80m (L) x 0,85m (A)", "peso": "52 kg" },
        { "nome": "Banco Scott", "preco": 5800, "precoFmt": "R$ 5.800,00", "linha": "Steel", "dimensoes": "1,20m (C) x 0,95m (L) x 1,05m (A)", "peso": "58 kg" },
        { "nome": "Banco Reto Horizontal", "preco": 2250, "precoFmt": "R$ 2.250,00", "linha": "Steel", "dimensoes": "1,20m (C) x 0,45m (L) x 0,45m (A)", "peso": "22 kg" }
      ]
    },
    {
      "id": "suportes-expositores",
      "nome": "Suportes e Expositores",
      "produtos": [
        { "nome": "Suporte Dumbbell 3 Andares", "preco": 3800, "precoFmt": "R$ 3.800,00", "linha": "Steel", "dimensoes": "2,20m (L) x 0,75m (P) x 1,10m (A)", "peso": "85 kg" },
        { "nome": "Suporte Dumbbell 3 Andares – Chapa Única", "preco": 3100, "precoFmt": "R$ 3.100,00", "linha": "Steel", "dimensoes": "2,20m (L) x 0,70m (P) x 1,15m (A)", "peso": "98 kg" },
        { "nome": "Suporte Dumbbell Sextavado 3 Andares", "preco": 2400, "precoFmt": "R$ 2.400,00", "linha": "Steel", "dimensoes": "2,00m (L) x 0,65m (P) x 0,85m (A)", "peso": "62 kg" },
        { "nome": "Expositor Dumbbell – 12 Pares", "preco": 3100, "precoFmt": "R$ 3.100,00", "linha": "Steel", "dimensoes": "2,65m (L) x 0,65m (P) x 0,85m (A)", "peso": "75 kg" },
        { "nome": "Suporte Torre para Halteres Comum", "preco": 1150, "precoFmt": "R$ 1.150,00", "linha": "Steel", "dimensoes": "1,40m (A) x 0,50m (L) x 0,50m (P)", "peso": "25 kg" },
        { "nome": "Torre de Halteres (Com Gravação Laser)", "preco": 1650, "precoFmt": "R$ 1.650,00", "linha": "Steel", "dimensoes": "1,40m (A) x 0,50m (L) x 0,50m (P)", "peso": "28 kg" },
        { "nome": "Suporte Fogueteiro – Linha Steel", "preco": 650, "precoFmt": "R$ 650,00", "linha": "Steel", "dimensoes": "0,50m (L) x 0,50m (P) x 0,25m (A)", "peso": "18 kg" },
        { "nome": "Suporte Barras Montadas", "preco": 1250, "precoFmt": "R$ 1.250,00", "linha": "Steel", "dimensoes": "0,85m (L) x 0,70m (P) x 1,60m (A)", "peso": "35 kg" },
        { "nome": "Suporte para Puxadores Anatômicos", "preco": 850, "precoFmt": "R$ 850,00", "linha": "Steel", "dimensoes": "0,60m (L) x 0,50m (P) x 1,10m (A)", "peso": "15 kg" },
        { "nome": "Suporte de Anilhas Vertical", "preco": 290, "precoFmt": "R$ 290,00", "linha": "Steel", "dimensoes": "0,65m (L) x 0,65m (P) x 1,20m (A)", "peso": "22 kg" },
        { "nome": "Expositor Gaiola 700kg – Linha Steel", "preco": 1750, "precoFmt": "R$ 1.750,00", "linha": "Steel", "dimensoes": "1,20m (L) x 0,65m (P) x 1,35m (A)", "peso": "38 kg" },
        { "nome": "Suporte Anilha 500kg – Linha Steel", "preco": 950, "precoFmt": "R$ 950,00", "linha": "Steel", "dimensoes": "0,70m (L) x 0,70m (P) x 1,15m (A)", "peso": "26 kg" },
        { "nome": "Suporte Kettlebell – 2 Andares", "preco": 1950, "precoFmt": "R$ 1.950,00", "linha": "Steel", "dimensoes": "1,20m (L) x 0,60m (P) x 0,80m (A)", "peso": "42 kg" },
        { "nome": "Suporte Kettlebell e Wall Ball", "preco": 2100, "precoFmt": "R$ 2.100,00", "linha": "Steel", "dimensoes": "1,50m (L) x 0,60m (P) x 0,80m (A)", "peso": "45 kg" },
        { "nome": "Suporte Expositor Prateleira", "preco": 1950, "precoFmt": "R$ 1.950,00", "linha": "Steel", "dimensoes": "1,50m (L) x 0,45m (P) x 0,65m (A)", "peso": "28 kg" },
        { "nome": "Suporte Cavalete para Barras", "preco": 780, "precoFmt": "R$ 780,00", "linha": "Steel", "dimensoes": "0,75m (L) x 0,60m (P) x 1,15m (A)", "peso": "18 kg" },
        { "nome": "Espaldar de Parede – Linha Steel", "preco": 1450, "precoFmt": "R$ 1.450,00", "linha": "Steel", "dimensoes": "0,90m (L) x 2,30m (A) x 0,50m (P)", "peso": "Cap. 150 kg" },
        { "nome": "Suporte para Rosca Direta", "preco": 2250, "precoFmt": "R$ 2.250,00", "linha": "Steel", "dimensoes": "0,85m (C) x 0,75m (L) x 1,10m (A)", "peso": "35 kg" }
      ]
    }
  ]
}
```

## 6. Sugestões de flagship (para seções de destaque da home)

- **Hero / card flutuante:** Pull-Over Articulado (Gold Edition) ou Gravitron Zeus — itens premium da Linha Zeus.
- **Produto em destaque (imagem grande):** Crossover Angular ou Leg Press 45° Robust — peças de maior porte/impacto visual.
- **Linhas:** Steel → Supino Sentado Articulado; Zeus → Fly Voador Peitoral; BSC → Remada Baixa (Torre).

## 7. Contato (placeholder — Pedro confirma depois)
- E-mail: `contato@olympsteel.com.br` *(placeholder)*
- Telefone/WhatsApp: `(00) 00000-0000` *(placeholder)*
- Localização: a definir.
- CTA do site: **"Pedir orçamento"** / **"Falar com a fábrica"** (link para WhatsApp/e-mail quando o dado real existir).
