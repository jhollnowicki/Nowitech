import { Helmet } from "react-helmet-async";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        {/* === SEO PRINCIPAL DA HOME === */}
        <title>Criação de Sites Profissionais em Curitiba | NOWITECH</title>
        <meta
          name="description"
          content="Criação de sites rápidos, modernos e otimizados para conversão. A NOWITECH desenvolve sites profissionais com SEO técnico e performance em até 72h."
        />
        <meta
          name="keywords"
          content="criação de sites, sites profissionais, desenvolvimento web, landing page, sites em 72h, web design, Curitiba, Fazenda Rio Grande, NOWITECH"
        />
        <link rel="canonical" href="https://www.nowitech.com.br/" />

        {/* === Open Graph === */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="NOWITECH | Criação de Sites Profissionais em Curitiba"
        />
        <meta
          property="og:description"
          content="Sites modernos, rápidos e que convertem — criados em até 72h. Design futurista, SEO técnico e alta performance."
        />
        <meta property="og:url" content="https://www.nowitech.com.br/" />
        <meta
          property="og:image"
          content="https://www.nowitech.com.br/og-image.jpg"
        />
        <meta property="og:site_name" content="NOWITECH" />

        {/* === Twitter === */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="NOWITECH | Sites rápidos, modernos e que convertem"
        />
        <meta
          name="twitter:description"
          content="Criação de sites profissionais em Curitiba e todo o Brasil. Entregamos seu site completo em até 72h."
        />
        <meta
          name="twitter:image"
          content="https://www.nowitech.com.br/og-image.jpg"
        />

        {/* === Robots === */}
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Differentials />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
