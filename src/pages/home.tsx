import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Criação de Sites Profissionais | NOWITECH</title>
        <meta
          name="description"
          content="Criação de sites rápidos, modernos e otimizados para conversão em até 72h. Desenvolvido pela NOWITECH, especialista em web design e SEO."
        />
        <link rel="canonical" href="https://www.nowitech.com.br/" />
      </Helmet>

      <main style={{ padding: "2rem", color: "#00D4FF" }}>
        <h1>🚀 Teste de SEO NOWITECH</h1>
        <p>
          Se este texto aparecer e o título da aba mudar, o react-helmet-async está funcionando
          perfeitamente.
        </p>
      </main>
    </>
  );
}
