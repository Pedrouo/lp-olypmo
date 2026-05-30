export interface Product {
  nome: string;
  preco: number;
  precoFmt: string;
  linha: string;
  dimensoes: string;
  peso: string;
  categoria: string;
}

export interface Category {
  id: string;
  nome: string;
  count: number;
  produtos: Product[];
}

export const MATERIAL = "Aço Carbono | Pintura Eletrostática";

export const categories: Category[] = [
  {
    id: "peitoral",
    nome: "Peitoral",
    count: 10,
    produtos: [
      { nome: "Banco Supino Reto Olímpico", preco: 5100, precoFmt: "R$ 5.100,00", linha: "Steel", dimensoes: "1,45m (C) x 1,25m (L) x 1,30m (A)", peso: "95 kg", categoria: "peitoral" },
      { nome: "Banco Supino Declinado Olímpico", preco: 5600, precoFmt: "R$ 5.600,00", linha: "Steel", dimensoes: "1,65m (C) x 1,25m (L) x 1,30m (A)", peso: "75 kg", categoria: "peitoral" },
      { nome: "Supino Inclinado Olímpico", preco: 6300, precoFmt: "R$ 6.300,00", linha: "Steel", dimensoes: "2,10m (C) x 1,50m (L) x 1,45m (A)", peso: "78 kg", categoria: "peitoral" },
      { nome: "Supino Reto Horizontal Articulado", preco: 10000, precoFmt: "R$ 10.000,00", linha: "Olympo", dimensoes: "1,90m (C) x 1,50m (L) x 1,05m (A)", peso: "155 kg", categoria: "peitoral" },
      { nome: "Supino Sentado Articulado", preco: 15800, precoFmt: "R$ 15.800,00", linha: "Steel", dimensoes: "1,95m (C) x 1,45m (L) x 1,20m (A)", peso: "165 kg", categoria: "peitoral" },
      { nome: "Supino Inclinado Articulado (Gaiola)", preco: 15800, precoFmt: "R$ 15.800,00", linha: "Zeus", dimensoes: "1,55m (C) x 1,80m (L) x 1,70m (A)", peso: "185 kg", categoria: "peitoral" },
      { nome: "Supino Declinado Articulado (Gaiola)", preco: 15800, precoFmt: "R$ 15.800,00", linha: "Zeus", dimensoes: "1,55m (C) x 1,80m (L) x 1,60m (A)", peso: "180 kg", categoria: "peitoral" },
      { nome: "Pull-Over Articulado (Gold Edition)", preco: 18800, precoFmt: "R$ 18.800,00", linha: "Zeus", dimensoes: "1,65m (C) x 1,35m (L) x 1,60m (A)", peso: "160 kg", categoria: "peitoral" },
      { nome: "Crucifixo Articulado", preco: 10900, precoFmt: "R$ 10.900,00", linha: "Steel", dimensoes: "1,45m (C) x 1,60m (L) x 1,10m (A)", peso: "108 kg", categoria: "peitoral" },
      { nome: "Fly Voador Peitoral", preco: 16800, precoFmt: "R$ 16.800,00", linha: "Zeus", dimensoes: "1,20m (C) x 1,10m (L) x 1,65m (A)", peso: "285 kg", categoria: "peitoral" },
    ],
  },
  {
    id: "costas",
    nome: "Costas",
    count: 15,
    produtos: [
      { nome: "Remada Deitada (Seal Row)", preco: 6600, precoFmt: "R$ 6.600,00", linha: "Steel", dimensoes: "1,85m (C) x 1,10m (L) x 1,00m (A)", peso: "85 kg", categoria: "costas" },
      { nome: "Remada Articulada Baixa", preco: 13500, precoFmt: "R$ 13.500,00", linha: "Zeus", dimensoes: "2,10m (C) x 1,20m (L) x 1,45m (A)", peso: "180 kg", categoria: "costas" },
      { nome: "Remada Articulada Cavalo (Low Row)", preco: 13500, precoFmt: "R$ 13.500,00", linha: "Zeus", dimensoes: "2,10m (C) x 1,20m (L) x 1,45m (A)", peso: "210 kg", categoria: "costas" },
      { nome: "Remada Guiada 45°", preco: 10500, precoFmt: "R$ 10.500,00", linha: "Steel", dimensoes: "2,15m (C) x 1,00m (L) x 1,25m (A)", peso: "120 kg", categoria: "costas" },
      { nome: "Remada Baixa (Torre)", preco: 13500, precoFmt: "R$ 13.500,00", linha: "BSC", dimensoes: "1,75m (C) x 1,10m (L) x 1,95m (A)", peso: "260 kg", categoria: "costas" },
      { nome: "Remada Baixa Torre Carenada", preco: 16200, precoFmt: "R$ 16.200,00", linha: "Zeus", dimensoes: "1,75m (C) x 1,10m (L) x 1,95m (A)", peso: "260 kg", categoria: "costas" },
      { nome: "Remada Frontal Articulada BSC", preco: 11400, precoFmt: "R$ 11.400,00", linha: "Basic", dimensoes: "1,40m (C) x 1,30m (L) x 1,20m (A)", peso: "110 kg", categoria: "costas" },
      { nome: "Remada Frontal Articulada Steel", preco: 14600, precoFmt: "R$ 14.600,00", linha: "Steel", dimensoes: "1,55m (C) x 1,35m (L) x 1,25m (A)", peso: "135 kg", categoria: "costas" },
      { nome: "Remada Frontal (Torre)", preco: 15900, precoFmt: "R$ 15.900,00", linha: "Zeus", dimensoes: "1,60m (C) x 1,10m (L) x 1,95m (A)", peso: "255 kg", categoria: "costas" },
      { nome: "Remada Pendular Articulada", preco: 15800, precoFmt: "R$ 15.800,00", linha: "Steel", dimensoes: "1,95m (C) x 1,15m (L) x 1,55m (A)", peso: "140 kg", categoria: "costas" },
      { nome: "Puxada Alta e Baixa (Conjugada)", preco: 16200, precoFmt: "R$ 16.200,00", linha: "Zeus", dimensoes: "1,90m (C) x 1,15m (L) x 2,30m (A)", peso: "285 kg", categoria: "costas" },
      { nome: "Puxada Baixa Articulada (Gaiola)", preco: 15800, precoFmt: "R$ 15.800,00", linha: "Zeus", dimensoes: "1,70m (C) x 1,55m (L) x 1,25m (A)", peso: "165 kg", categoria: "costas" },
      { nome: "Puxada Alta Frontal", preco: 15800, precoFmt: "R$ 15.800,00", linha: "Zeus", dimensoes: "1,40m (C) x 1,15m (L) x 2,30m (A)", peso: "275 kg", categoria: "costas" },
      { nome: "Pulley 2 em 1", preco: 16200, precoFmt: "R$ 16.200,00", linha: "Steel", dimensoes: "1,90m (C) x 1,10m (L) x 2,25m (A)", peso: "130 kg", categoria: "costas" },
      { nome: "Rosca Scott Articulada", preco: 10400, precoFmt: "R$ 10.400,00", linha: "Steel", dimensoes: "1,35m (C) x 1,15m (L) x 1,10m (A)", peso: "85 kg", categoria: "costas" },
      { nome: "Tríceps Dip Articulado", preco: 15000, precoFmt: "R$ 15.000,00", linha: "Steel", dimensoes: "1,65m (C) x 1,30m (L) x 1,15m (A)", peso: "145 kg", categoria: "costas" },
    ],
  },
  {
    id: "ombro-triceps",
    nome: "Ombro e Tríceps",
    count: 5,
    produtos: [
      { nome: "Cadeira Militar", preco: 6450, precoFmt: "R$ 6.450,00", linha: "Steel", dimensoes: "1,90m (C) x 1,40m (L) x 1,75m (A)", peso: "48 kg", categoria: "ombro-triceps" },
      { nome: "Desenvolvimento de Ombro (Torre)", preco: 16800, precoFmt: "R$ 16.800,00", linha: "Zeus", dimensoes: "1,40m (C) x 1,35m (L) x 1,65m (A)", peso: "245 kg", categoria: "ombro-triceps" },
      { nome: "Desenvolvimento de Ombro Gaiola (Militar)", preco: 15800, precoFmt: "R$ 15.800,00", linha: "Steel", dimensoes: "1,20m (C) x 1,15m (L) x 1,80m (A)", peso: "172 kg", categoria: "ombro-triceps" },
      { nome: "Tríceps Machine", preco: 17800, precoFmt: "R$ 17.800,00", linha: "Zeus", dimensoes: "1,50m (C) x 1,15m (L) x 1,60m (A)", peso: "245 kg", categoria: "ombro-triceps" },
    ],
  },
  {
    id: "pernas",
    nome: "Pernas",
    count: 14,
    produtos: [
      { nome: "Leg Press Articulado Titan", preco: 7999.99, precoFmt: "R$ 7.999,99", linha: "Steel", dimensoes: "2,25m (C) x 1,55m (L) x 1,50m (A)", peso: "285 kg", categoria: "pernas" },
      { nome: "Leg Press Horizontal (Torre)", preco: 15800, precoFmt: "R$ 15.800,00", linha: "Zeus", dimensoes: "1,95m (C) x 1,10m (L) x 1,85m (A)", peso: "280 kg", categoria: "pernas" },
      { nome: "Leg Press 45° Robust (Anilhas)", preco: 20900, precoFmt: "R$ 20.900,00", linha: "Steel Robust", dimensoes: "2,35m (C) x 1,45m (L) x 1,85m (A)", peso: "190 kg", categoria: "pernas" },
      { nome: "Leg Press 45° (Pro Series)", preco: 16500, precoFmt: "R$ 16.500,00", linha: "Steel Pro", dimensoes: "2,40m (C) x 1,85m (L) x 1,55m (A)", peso: "210 kg", categoria: "pernas" },
      { nome: "Hack Squat Vertical", preco: 13500, precoFmt: "R$ 13.500,00", linha: "Steel", dimensoes: "2,65m (C) x 1,60m (L) x 2,10m (A)", peso: "228 kg", categoria: "pernas" },
      { nome: "Hack Squat Linear (Sentado)", preco: 16200, precoFmt: "R$ 16.200,00", linha: "Steel", dimensoes: "2,70m (C) x 1,45m (L) x 1,85m (A)", peso: "170 kg", categoria: "pernas" },
      { nome: "Cadeira Extensora e Flexora (Olympo)", preco: 16500, precoFmt: "R$ 16.500,00", linha: "Olympo", dimensoes: "1,45m (C) x 1,15m (L) x 1,60m (A)", peso: "240 kg", categoria: "pernas" },
      { nome: "Cadeira Extensora Linha Zeus (Torre)", preco: 16500, precoFmt: "R$ 16.500,00", linha: "Zeus", dimensoes: "1,40m (C) x 1,15m (L) x 1,60m (A)", peso: "235 kg", categoria: "pernas" },
      { nome: "Cadeira Flexora Sentada (Torre)", preco: 15900, precoFmt: "R$ 15.900,00", linha: "Zeus", dimensoes: "1,45m (C) x 1,10m (L) x 1,60m (A)", peso: "245 kg", categoria: "pernas" },
      { nome: "Mesa Romana (Flexora Deitada)", preco: 18800, precoFmt: "R$ 18.800,00", linha: "Zeus", dimensoes: "1,65m (C) x 1,10m (L) x 1,60m (A)", peso: "245 kg", categoria: "pernas" },
      { nome: "Flexor Ajoelhado Unilateral", preco: 10900, precoFmt: "R$ 10.900,00", linha: "Steel", dimensoes: "1,20m (C) x 1,50m (L) x 1,55m (A)", peso: "135 kg", categoria: "pernas" },
      { nome: "Agachamento Pêndulo – Linha Steel", preco: 24500, precoFmt: "R$ 24.500,00", linha: "Steel", dimensoes: "2,80m (C) x 1,25m (L) x 1,90m (A)", peso: "165 kg", categoria: "pernas" },
      { nome: "Rack de Agachamento (Squat Rack)", preco: 4500, precoFmt: "R$ 4.500,00", linha: "Steel", dimensoes: "1,45m (C) x 1,25m (L) x 1,85m (A)", peso: "75 kg", categoria: "pernas" },
      { nome: "Agachamento Sissy – Linha Steel", preco: 1250, precoFmt: "R$ 1.250,00", linha: "Steel", dimensoes: "1,05m (C) x 0,60m (L) x 0,55m (A)", peso: "22 kg", categoria: "pernas" },
    ],
  },
  {
    id: "gluteo-core",
    nome: "Glúteo e Core",
    count: 8,
    produtos: [
      { nome: "Elevação Pélvica", preco: 4800, precoFmt: "R$ 4.800,00", linha: "Steel", dimensoes: "1,60m (C) x 1,40m (L) x 0,95m (A)", peso: "95 kg", categoria: "gluteo-core" },
      { nome: "Elevação Pélvica Linear (Guiada)", preco: 4399, precoFmt: "R$ 4.399,00", linha: "Steel", dimensoes: "1,65m (C) x 1,45m (L) x 1,15m (A)", peso: "115 kg", categoria: "gluteo-core" },
      { nome: "Elevação Pélvica Articulada", preco: 15400, precoFmt: "R$ 15.400,00", linha: "Steel", dimensoes: "1,55m (C) x 1,35m (L) x 0,90m (A)", peso: "85 kg", categoria: "gluteo-core" },
      { nome: "Glúteo Coice Articulado (Kickback)", preco: 9200, precoFmt: "R$ 9.200,00", linha: "Steel", dimensoes: "1,80m (C) x 1,15m (L) x 1,70m (A)", peso: "100 kg", categoria: "gluteo-core" },
      { nome: "GHD (Glute Ham Developer)", preco: 4800, precoFmt: "R$ 4.800,00", linha: "Steel", dimensoes: "1,90m (C) x 1,10m (L) x 1,25m (A)", peso: "85 kg", categoria: "gluteo-core" },
      { nome: "Mesa Abdominal Declinada", preco: 5000, precoFmt: "R$ 5.000,00", linha: "Steel", dimensoes: "1,55m (C) x 0,70m (L) x 1,10m (A)", peso: "42 kg", categoria: "gluteo-core" },
      { nome: "Mesa Romana", preco: 4500, precoFmt: "R$ 4.500,00", linha: "Zeus", dimensoes: "1,35m (C) x 0,83m (L) x 0,90m (A)", peso: "45 kg", categoria: "gluteo-core" },
      { nome: "Paralela com Abdominal", preco: 4500, precoFmt: "R$ 4.500,00", linha: "Steel", dimensoes: "1,20m (C) x 0,75m (L) x 1,65m (A)", peso: "65 kg", categoria: "gluteo-core" },
    ],
  },
  {
    id: "panturrilha-especiais",
    nome: "Panturrilha e Especiais",
    count: 4,
    produtos: [
      { nome: "Panturrilha Sentado (Cavalinho)", preco: 5200, precoFmt: "R$ 5.200,00", linha: "Steel", dimensoes: "1,30m (C) x 0,65m (L) x 0,95m (A)", peso: "55 kg", categoria: "panturrilha-especiais" },
      { nome: "Panturrilha Sentada – Linha Steel", preco: 3150, precoFmt: "R$ 3.150,00", linha: "Steel", dimensoes: "1,25m (C) x 0,65m (L) x 0,95m (A)", peso: "42 kg", categoria: "panturrilha-especiais" },
      { nome: "Panturrilha em Pé Articulada", preco: 12800, precoFmt: "R$ 12.800,00", linha: "Zeus", dimensoes: "1,25m (C) x 1,10m (L) x 1,75m (A)", peso: "95 kg", categoria: "panturrilha-especiais" },
      { nome: "Gravitron – Linha Zeus (Torre)", preco: 16800, precoFmt: "R$ 16.800,00", linha: "Zeus", dimensoes: "1,55m (C) x 1,25m (L) x 2,35m (A)", peso: "275 kg", categoria: "panturrilha-especiais" },
    ],
  },
  {
    id: "crossover-smith",
    nome: "Crossover e Smith",
    count: 3,
    produtos: [
      { nome: "Crossover Angular", preco: 19800, precoFmt: "R$ 19.800,00", linha: "Steel", dimensoes: "2,40m (L) x 1,10m (P) x 2,30m (A)", peso: "390 kg", categoria: "crossover-smith" },
      { nome: "Cross Smith com Barra Guiada (2 em 1)", preco: 20900, precoFmt: "R$ 20.900,00", linha: "Steel", dimensoes: "1,90m (L) x 1,45m (P) x 2,30m (A)", peso: "285 kg", categoria: "crossover-smith" },
      { nome: "Smith Machine (Barra Guiada)", preco: 16900, precoFmt: "R$ 16.900,00", linha: "Steel", dimensoes: "2,25m (A) x 2,10m (L) x 1,40m (P)", peso: "125 kg", categoria: "crossover-smith" },
    ],
  },
  {
    id: "bancos",
    nome: "Bancos",
    count: 4,
    produtos: [
      { nome: "Banco Regulável Profissional", preco: 3000, precoFmt: "R$ 3.000,00", linha: "Steel", dimensoes: "1,35m (C) x 0,60m (L) x 0,45m (A)", peso: "40 kg", categoria: "bancos" },
      { nome: "Banco de Remada Curvada (Seal Row)", preco: 2650, precoFmt: "R$ 2.650,00", linha: "Steel", dimensoes: "1,60m (C) x 0,80m (L) x 0,85m (A)", peso: "52 kg", categoria: "bancos" },
      { nome: "Banco Scott", preco: 5800, precoFmt: "R$ 5.800,00", linha: "Steel", dimensoes: "1,20m (C) x 0,95m (L) x 1,05m (A)", peso: "58 kg", categoria: "bancos" },
      { nome: "Banco Reto Horizontal", preco: 2250, precoFmt: "R$ 2.250,00", linha: "Steel", dimensoes: "1,20m (C) x 0,45m (L) x 0,45m (A)", peso: "22 kg", categoria: "bancos" },
    ],
  },
  {
    id: "suportes-expositores",
    nome: "Suportes e Expositores",
    count: 18,
    produtos: [
      { nome: "Suporte Dumbbell 3 Andares", preco: 3800, precoFmt: "R$ 3.800,00", linha: "Steel", dimensoes: "2,20m (L) x 0,75m (P) x 1,10m (A)", peso: "85 kg", categoria: "suportes-expositores" },
      { nome: "Suporte Dumbbell 3 Andares – Chapa Única", preco: 3100, precoFmt: "R$ 3.100,00", linha: "Steel", dimensoes: "2,20m (L) x 0,70m (P) x 1,15m (A)", peso: "98 kg", categoria: "suportes-expositores" },
      { nome: "Suporte Dumbbell Sextavado 3 Andares", preco: 2400, precoFmt: "R$ 2.400,00", linha: "Steel", dimensoes: "2,00m (L) x 0,65m (P) x 0,85m (A)", peso: "62 kg", categoria: "suportes-expositores" },
      { nome: "Expositor Dumbbell – 12 Pares", preco: 3100, precoFmt: "R$ 3.100,00", linha: "Steel", dimensoes: "2,65m (L) x 0,65m (P) x 0,85m (A)", peso: "75 kg", categoria: "suportes-expositores" },
      { nome: "Suporte Torre para Halteres Comum", preco: 1150, precoFmt: "R$ 1.150,00", linha: "Steel", dimensoes: "1,40m (A) x 0,50m (L) x 0,50m (P)", peso: "25 kg", categoria: "suportes-expositores" },
      { nome: "Torre de Halteres (Com Gravação Laser)", preco: 1650, precoFmt: "R$ 1.650,00", linha: "Steel", dimensoes: "1,40m (A) x 0,50m (L) x 0,50m (P)", peso: "28 kg", categoria: "suportes-expositores" },
      { nome: "Suporte Fogueteiro – Linha Steel", preco: 650, precoFmt: "R$ 650,00", linha: "Steel", dimensoes: "0,50m (L) x 0,50m (P) x 0,25m (A)", peso: "18 kg", categoria: "suportes-expositores" },
      { nome: "Suporte Barras Montadas", preco: 1250, precoFmt: "R$ 1.250,00", linha: "Steel", dimensoes: "0,85m (L) x 0,70m (P) x 1,60m (A)", peso: "35 kg", categoria: "suportes-expositores" },
      { nome: "Suporte para Puxadores Anatômicos", preco: 850, precoFmt: "R$ 850,00", linha: "Steel", dimensoes: "0,60m (L) x 0,50m (P) x 1,10m (A)", peso: "15 kg", categoria: "suportes-expositores" },
      { nome: "Suporte de Anilhas Vertical", preco: 290, precoFmt: "R$ 290,00", linha: "Steel", dimensoes: "0,65m (L) x 0,65m (P) x 1,20m (A)", peso: "22 kg", categoria: "suportes-expositores" },
      { nome: "Expositor Gaiola 700kg – Linha Steel", preco: 1750, precoFmt: "R$ 1.750,00", linha: "Steel", dimensoes: "1,20m (L) x 0,65m (P) x 1,35m (A)", peso: "38 kg", categoria: "suportes-expositores" },
      { nome: "Suporte Anilha 500kg – Linha Steel", preco: 950, precoFmt: "R$ 950,00", linha: "Steel", dimensoes: "0,70m (L) x 0,70m (P) x 1,15m (A)", peso: "26 kg", categoria: "suportes-expositores" },
      { nome: "Suporte Kettlebell – 2 Andares", preco: 1950, precoFmt: "R$ 1.950,00", linha: "Steel", dimensoes: "1,20m (L) x 0,60m (P) x 0,80m (A)", peso: "42 kg", categoria: "suportes-expositores" },
      { nome: "Suporte Kettlebell e Wall Ball", preco: 2100, precoFmt: "R$ 2.100,00", linha: "Steel", dimensoes: "1,50m (L) x 0,60m (P) x 0,80m (A)", peso: "45 kg", categoria: "suportes-expositores" },
      { nome: "Suporte Expositor Prateleira", preco: 1950, precoFmt: "R$ 1.950,00", linha: "Steel", dimensoes: "1,50m (L) x 0,45m (P) x 0,65m (A)", peso: "28 kg", categoria: "suportes-expositores" },
      { nome: "Suporte Cavalete para Barras", preco: 780, precoFmt: "R$ 780,00", linha: "Steel", dimensoes: "0,75m (L) x 0,60m (P) x 1,15m (A)", peso: "18 kg", categoria: "suportes-expositores" },
      { nome: "Espaldar de Parede – Linha Steel", preco: 1450, precoFmt: "R$ 1.450,00", linha: "Steel", dimensoes: "0,90m (L) x 2,30m (A) x 0,50m (P)", peso: "Cap. 150 kg", categoria: "suportes-expositores" },
      { nome: "Suporte para Rosca Direta", preco: 2250, precoFmt: "R$ 2.250,00", linha: "Steel", dimensoes: "0,85m (C) x 0,75m (L) x 1,10m (A)", peso: "35 kg", categoria: "suportes-expositores" },
    ],
  },
];

export const allProducts: Product[] = categories.flatMap((cat) => cat.produtos);

export const allLines = [...new Set(allProducts.map((p) => p.linha))].sort();
