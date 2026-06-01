import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { ProductLines } from "@/components/sections/ProductLines";
import { CatalogList } from "@/components/sections/CatalogList";
import { Differentials } from "@/components/sections/Differentials";
import { AboutUs } from "@/components/sections/AboutUs";
import { Customization } from "@/components/sections/Customization";
import { Marquee } from "@/components/sections/Marquee";

export default function Home() {
  return (
    <>
      {/* 1. Hero — Full-bleed escuro */}
      <Hero />

      {/* 2. Manifesto / Sobre */}
      <Manifesto />

      {/* Marquee divider */}
      <Marquee />

      {/* 3. Linhas de produto */}
      <ProductLines />

      {/* 4. Catálogo por categorias — bloco-assinatura */}
      <CatalogList />

      {/* 5. Diferenciais 01–04 */}
      <Differentials />

      {/* 6. Sobre Nós */}
      <AboutUs />

      {/* 7. Personalização / Sob medida */}
      <Customization />
    </>
  );
}
