import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: non-existent route:", location.pathname);

    // GA opcional (se gtag está carregado no index.html)
    // @ts-ignore
    if (typeof window !== "undefined" && window.gtag) {
      // @ts-ignore
      window.gtag("event", "page_view", {
        page_title: "404 Not Found",
        page_location: window.location.href,
        page_path: location.pathname,
        non_interaction: true,
      });
      // @ts-ignore
      window.gtag("event", "exception", {
        description: `404: ${location.pathname}`,
        fatal: false,
      });
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 px-6">
      <Helmet>
        <title>Página não encontrada | NOWITECH</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://www.nowitech.com.br/404" />
      </Helmet>

      <main className="text-center" role="main" aria-labelledby="nf-title">
        <h1 id="nf-title" className="text-5xl font-extrabold mb-3">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! A página que você tentou acessar não existe.
        </p>
        <Link
          to="/"
          className="inline-block rounded-xl px-5 py-3 bg-black text-white hover:opacity-90 transition"
          aria-label="Voltar para a página inicial"
        >
          Voltar para a Home
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
