import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP_MESSAGES } from "@/lib/config";

// Import portfolio images
import restaurantImage from "@/assets/portfolio/restaurant-mockup.jpg";
import automotiveImage from "@/assets/portfolio/automotive-mockup.jpg";
import erpImage from "@/assets/portfolio/erp-mockup.jpg";
import ecommerceImage from "@/assets/portfolio/ecommerce-mockup.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Marmitex Premium",
      category: "Restaurante",
      description: "Landing page focada em pedidos pelo WhatsApp. Aumento de 300% nas vendas em 30 dias.",
      image: restaurantImage,
      tags: ["Landing Page", "WhatsApp", "Conversão"],
      color: "neon-green"
    },
    {
      id: 2,
      title: "AutoShine Detailing",
      category: "Estética Automotiva",
      description: "Portfólio visual impactante + sistema de agendamento. 50+ novos clientes mensais.",
      image: automotiveImage,
      tags: ["Portfólio", "Agendamento", "Galeria"],
      color: "neon-blue"
    },
    {
      id: 3,
      title: "TechSolutions ERP",
      category: "Serviços B2B",
      description: "Site institucional + geração de leads qualificados. ROI de 400% em captação.",
      image: erpImage,
      tags: ["Institucional", "Lead Gen", "B2B"],
      color: "neon-purple"
    },
    {
      id: 4,
      title: "Loja Moderna",
      category: "E-commerce Local",
      description: "Vitrine digital com catálogo completo. Vendas online cresceram 250%.",
      image: ecommerceImage,
      tags: ["E-commerce", "Catálogo", "Vendas"],
      color: "neon-cyan"
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
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver projeto
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