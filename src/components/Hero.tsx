import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP_MESSAGES } from "@/lib/config";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES.hero)}`, '_blank');
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="pt-[80px] sm:pt-[96px] min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-96px)] flex items-center justify-center relative overflow-hidden bg-gradient-hero circuit-bg
  "
    >

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-neon-green/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo Badge */}


            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold leading-tight">
              Crie seu site em até{" "}
              <span className="text-neon-blue animate-pulse-glow">72 horas</span>{" "}
              com a{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient">
                NOWITECH
              </span>
              <Zap className="inline-block w-8 h-8 md:w-12 md:h-12 text-neon-green ml-2 animate-bounce" />
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
              Modernidade, performance e impacto visual para o seu negócio{" "}
              <span className="text-neon-purple font-semibold">vender mais</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-white border-0 glow-blue hover:glow-purple transition-all duration-300 transform hover:scale-105 text-lg px-8 py-4 h-auto"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Solicite já seu orçamento!
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                onClick={scrollToPortfolio}
                variant="outline"
                size="lg"
                className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:border-neon-purple hover:text-neon-purple transition-all duration-300 text-lg px-8 py-4 h-auto"
              >
                Ver exemplos
              </Button>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-text-muted">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                <span>Entrega em 72h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                <span>Design impactante</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
                <span>SEO otimizado</span>
              </div>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Laptop Mockup */}
              <div className="relative bg-surface rounded-lg p-4 glow-blue border border-surface-border transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-background rounded-md p-6 min-h-[300px] flex flex-col">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-neon-green rounded-full"></div>
                    <div className="w-3 h-3 bg-neon-blue rounded-full"></div>
                    <div className="w-3 h-3 bg-neon-purple rounded-full"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-8 bg-gradient-primary rounded animate-gradient"></div>
                    <div className="h-4 bg-surface-hover rounded w-3/4"></div>
                    <div className="h-4 bg-surface-hover rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <div className="h-16 bg-neon-blue/20 rounded glow-blue"></div>
                      <div className="h-16 bg-neon-purple/20 rounded glow-purple"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="absolute -bottom-8 -right-8 w-32 h-56 bg-surface rounded-xl p-2 glow-purple border border-surface-border transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="bg-background rounded-lg p-3 h-full flex flex-col">
                  <div className="w-8 h-1 bg-surface-hover rounded-full mx-auto mb-2"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-6 bg-gradient-accent rounded animate-gradient"></div>
                    <div className="h-2 bg-surface-hover rounded w-2/3"></div>
                    <div className="h-2 bg-surface-hover rounded w-1/2"></div>
                    <div className="grid grid-cols-2 gap-1 mt-3">
                      <div className="h-8 bg-neon-green/20 rounded"></div>
                      <div className="h-8 bg-neon-blue/20 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-neon-green/20 rounded-full glow-green animate-float"></div>
              <div className="absolute -bottom-6 left-12 w-8 h-8 bg-neon-purple/20 rounded-full glow-purple animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;