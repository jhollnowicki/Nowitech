import { Check, Star, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP_MESSAGES } from "@/lib/config";

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "479,99",
      description: "Perfeito para começar sua presença digital",
      icon: Zap,
      color: "neon-blue",
      features: [
        "1 página (landing page)",
        "Integração WhatsApp",
        "Design responsivo",
        "Deploy e hospedagem inclusos",
        "Domínio por 1 ano",
        "Suporte por 30 dias"
      ],
      highlighted: false
    },
    {
      name: "Intermediário",
      price: "799,99",
      description: "Mais vendido - solução completa",
      icon: Star,
      color: "neon-green",
      features: [
        "Até 4 páginas completas",
        "Home + Serviços + Sobre + Contato",
        "Google Maps integrado",
        "SEO otimizado",
        "Formulários de contato",
        "1 semana de ajustes grátis",
        "Analytics configurado",
        "Deploy e hospedagem inclusos",
        "Domínio por 1 ano",
        "Indexação no Google"
      ],
      highlighted: true,
      badge: "Mais vendido"
    },
    {
      name: "Premium",
      price: "1.399,99",
      description: "Para quem quer o máximo impacto",
      icon: Crown,
      color: "neon-purple",
      features: [
        "Até 4 páginas completas",
        "Home + Serviços + Sobre + Contato",
        "Google Maps integrado",
        "SEO Performático",
        "Sites multi-idioma",
        "Blog integrado",
        "Otimização avançada de SEO",
        "Efeitos e animações premium",
        "Dashboard administrativo",
        "2 semanas de ajustes grátis",
        "Suporte prioritário por 90 dias",
        "Deploy e hospedagem inclusos",
        "Domínio por 1 ano gratuito",
        "Indexação no Google"
      ],
      highlighted: false
    }
  ];

  const handleWhatsAppClick = (planName: string) => {
    const message = `Oi, quero contratar o plano ${planName}!`;
    window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="planos" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-green/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-neon-purple/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-neon-blue/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Planos que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              cabem no seu bolso
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Escolha o plano ideal para seu negócio e comece a vender mais hoje mesmo
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 transform hover:-translate-y-2 ${
                  plan.highlighted
                    ? 'border-neon-green/50 glow-green scale-105'
                    : 'border-surface-border hover:border-neon-blue/50 hover:glow-soft'
                }`}
              >
                {/* Badge for highlighted plan */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-accent text-white px-4 py-2 rounded-full text-sm font-semibold glow-green">
                      <Star className="w-4 h-4 inline mr-1" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-xl bg-${plan.color}/10 border border-${plan.color}/20 mb-4`}>
                    <IconComponent className={`w-8 h-8 text-${plan.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-2">
                    {plan.name}
                  </h3>
                  
                  <p className="text-text-secondary mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-orbitron font-bold text-text-primary">
                      R$ {plan.price}
                    </span>
                    <span className="text-text-muted ml-2">
                      /projeto
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-${plan.color}/20 flex items-center justify-center mt-0.5`}>
                        <Check className={`w-3 h-3 text-${plan.color}`} />
                      </div>
                      <span className="text-text-secondary text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  onClick={() => handleWhatsAppClick(plan.name)}
                  className={`w-full transition-all duration-300 transform hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-gradient-accent hover:bg-gradient-primary text-white border-0 glow-green hover:glow-purple'
                      : 'bg-gradient-primary hover:bg-gradient-accent text-white border-0 glow-blue hover:glow-purple'
                  }`}
                >
                  <Rocket className="w-4 h-4 mr-2" />
                  Escolher {plan.name}
                </Button>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Payment Info */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-surface/30 backdrop-blur-sm rounded-full px-6 py-3 border border-surface-border glow-soft">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-text-secondary text-sm">
                Pagamento em até 2x sem juros
              </span>
            </div>
            <div className="w-px h-4 bg-surface-border"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse"></div>
              <span className="text-text-secondary text-sm">
                Contrato do acordo incluso
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;