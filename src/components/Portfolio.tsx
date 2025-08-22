import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP_MESSAGES } from "@/lib/config";

// Import portfolio images
import piva from "@/assets/portfolio/paiva-estetica.png";
import handmade from "@/assets/portfolio/Handmade.png";
import Studio from "@/assets/portfolio/Studio.png";
import nowitech from "@/assets/portfolio/Nowitech.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Paiva Estética Automotiva - Demo",
      category: "Estética Automotiva",
      description: "Site institucional moderno e responsivo para clínica automotiva. Foco em apresentação de serviços e captação de clientes.",
      image: piva, // print real do projeto
      tags: ["Institucional", "Serviços", "Contato"],
      color: "neon-purple",
      url: "https://paivaestetica.netlify.app/"
    },
    {
      id: 2,
      title: "Handmade Martelinho - Demo",
      category: "Martelinho de ouro",
      description: "Landing page institucional moderna com design responsivo e foco em conversão de serviços.",
      image: handmade, // print real do projeto
      tags: ["Landing Page", "Institucional", "Conversão"],
      color: "neon-blue",
      url: "https://handmademartelinhodeouro.com.br/"
    },
    {
      id: 3,
      title: "Studio Beleza Feminina - Demo",
      category: "Estúdio de Beleza",
      description: "Site institucional completo (Home, Serviços, Sobre, Contato) com Google Maps integrado.",
      image: Studio, // mockup/print de demonstração
      tags: ["Institucional", "SEO", "Google Maps"],
      color: "neon-purple",
      url: "https://studiobelezafeminina.netlify.app/"
    },
    {
      id: 4,
      title: "Nowitech - Demo",
      category: "Tecnologia",
      description: "Exemplo de site institucional criado para demonstração da Nowitech. Ideal para empresas que querem se destacar online.",
      image: nowitech, // mockup/print bonito
      tags: ["Institucional", "Demonstração", "Portfólio"],
      color: "neon-cyan",
      url: "https://nowitech.netlify.app/"
    }
  ];


  const handleWhatsAppClick = () => {
    window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES.portfolio)}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-bg">
        <div className="absolute top-32 left-20 w-48 h-48 bg-neon-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Projetos que{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              transformaram
            </span>{" "}
            negócios
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Veja como nossos clientes aumentaram suas vendas com sites modernos e estratégicos
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-surface/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-surface-border hover:border-neon-blue/50 transition-all duration-500 hover:glow-soft transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver projeto
                    </a>
                  </Button>

                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Category Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-${project.color}/10 border border-${project.color}/20 mb-3`}>
                  <span className={`text-sm font-medium text-${project.color}`}>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-orbitron font-semibold mb-2 text-text-primary group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-surface-hover rounded-md text-text-muted border border-surface-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-surface-border glow-soft max-w-2xl mx-auto">
            <h3 className="text-2xl font-orbitron font-bold mb-4">
              Seu negócio pode ser o{" "}
              <span className="text-neon-green">próximo sucesso</span>
            </h3>
            <p className="text-text-secondary mb-6">
              Transforme sua presença digital e multiplique seus resultados com um site profissional
            </p>
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-accent text-white border-0 glow-blue hover:glow-purple transition-all duration-300 transform hover:scale-105"
            >
              Quero um site como esse
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;