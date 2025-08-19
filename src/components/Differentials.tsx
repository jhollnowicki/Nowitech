import { Zap, Palette, Smartphone, Rocket } from "lucide-react";
import { SITE } from "@/lib/config";

const Differentials = () => {
  const differentials = [
    {
      icon: Zap,
      title: "Entrega Rápida",
      description: "Seu site no ar em até 72h",
      color: "neon-green",
      delay: "0s"
    },
    {
      icon: Palette,
      title: "Design Impactante",
      description: "Interfaces modernas que convertem",
      color: "neon-blue",
      delay: "0.2s"
    },
    {
      icon: Smartphone,
      title: "100% Responsivo",
      description: "Perfeito no celular e no desktop",
      color: "neon-purple",
      delay: "0.4s"
    },
    {
      icon: Rocket,
      title: "SEO & Velocidade",
      description: "Otimizado para Google e performance",
      color: "neon-cyan",
      delay: "0.6s"
    }
  ];

  return (
    <section id="diferenciais" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-neon-purple/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-neon-blue/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Por que escolher a{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              NOWITECH
            </span>?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Transformamos sua presença digital com tecnologia de ponta e design que converte
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-surface-border hover:border-neon-blue/50 transition-all duration-500 hover:glow-soft transform hover:-translate-y-2"
                style={{ animationDelay: item.delay }}
              >
                {/* Icon Container */}
                <div className={`relative mb-4 inline-flex p-3 rounded-xl bg-${item.color}/10 border border-${item.color}/20 group-hover:glow-${item.color.split('-')[1]} transition-all duration-300`}>
                  <IconComponent className={`w-6 h-6 text-${item.color} group-hover:scale-110 transition-transform duration-300`} />
                  
                  {/* Floating particles around icon */}
                  <div className={`absolute -top-1 -right-1 w-2 h-2 bg-${item.color} rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className={`absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-${item.color} rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-orbitron font-semibold mb-2 text-text-primary group-hover:text-neon-blue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {item.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Location Badge */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-surface/30 backdrop-blur-sm rounded-full px-6 py-3 border border-surface-border glow-soft">
            <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
            <span className="text-text-secondary">
              Atendemos <span className="text-neon-blue font-semibold">{SITE.cidade}</span> e projetos online em todo Brasil
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;