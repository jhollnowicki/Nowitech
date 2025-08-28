import { ArrowRight, Sparkles, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP_MESSAGES } from "@/lib/config";
import { trackWhatsAppClick } from "@/lib/analytics";


const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick({ label: "final_cta_main", page: "Home" });
    window.open(
      `${SITE.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES.contact)}`,
      "_blank"
    );
  };

  return (
    <section id="contato" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-neon-blue/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-neon-green/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 circuit-bg opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="bg-surface/30 backdrop-blur-md rounded-3xl p-12 border border-surface-border glow-soft">
            {/* Logo */}
            <div className="mb-8">
              <img
                src={SITE.logo}
                alt="NOWITECH"
                className="h-16 w-auto mx-auto animate-pulse-glow"
              />
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-6 leading-tight">
              Seu negócio merece{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                mais clientes
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-text-secondary mb-4">
              O próximo passo é seu
            </p>

            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-8 h-8 text-neon-green animate-bounce mr-2" />
              <span className="text-4xl">🚀</span>
              <Sparkles className="w-8 h-8 text-neon-blue animate-bounce ml-2" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Main CTA Button */}
            <Button
  onClick={handleWhatsAppClick}
  size="lg"
  className="
    w-full sm:w-auto
    max-w-full sm:max-w-[520px]
    inline-flex items-center justify-center gap-2
    rounded-2xl
    text-sm xs:text-base sm:text-lg md:text-xl      
    px-4 xs:px-5 sm:px-8
    py-3 sm:py-4
    min-h-12
    bg-gradient-primary text-white border-0
    hover:bg-gradient-accent hover:shadow-2xl
    sm:hover:scale-105 hover:scale-100
    transition-all duration-300
    mx-auto sm:mx-0
    mb-8
    whitespace-normal text-center
  "
>
  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
  <span className="flex-1 break-words">
    Fale com um de nossos especialistas!
  </span>
  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
</Button>




            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {/* WhatsApp */}
              <a
                href={`${SITE.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES.contact)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  trackWhatsAppClick({ label: "final_cta_card_whatsapp", page: "Home" });
                  window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES.contact)}`, "_blank");
                }}
                className="group grid grid-cols-[48px_1fr] items-center gap-3
               md:grid-cols-[20px_1fr] md:gap-2
               bg-surface/50 backdrop-blur-sm rounded-2xl p-6
               border border-surface-border hover:border-neon-green/50 hover:glow-green
               transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 md:ml-6 bg-neon-green/20 rounded-full flex items-center justify-center group-hover:bg-neon-green/30 transition-colors duration-300">
                  <MessageCircle className="w-6 h-6 md:w-5 md:h-5 text-neon-green" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">WhatsApp</div>
                  <div className="text-text-secondary text-sm">{SITE.whatsapp}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${SITE.email}`}
                className="group grid grid-cols-[48px_1fr] items-center gap-3
               md:grid-cols-[20px_1fr] md:gap-2
               bg-surface/50 backdrop-blur-sm rounded-2xl p-6
               border border-surface-border hover:border-neon-blue/50 hover:glow-blue
               transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 md:ml-6 bg-neon-blue/20 rounded-full flex items-center justify-center group-hover:bg-neon-blue/30 transition-colors duration-300">
                  <Mail className="w-6 h-6 md:w-5 md:h-5 text-neon-blue" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">E-mail</div>
                  <div className="text-text-secondary text-sm">{SITE.email}</div>
                </div>
              </a>
            </div>



            {/* Urgency Text */}
            <div className="mt-8 p-4 bg-neon-green/10 border border-neon-green/20 rounded-2xl">
              <p className="text-neon-green font-medium">
                ⚡ Vagas limitadas este mês - Garante já o seu projeto!
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-text-muted">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
              <span className="text-sm">+100 sites entregues</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse"></div>
              <span className="text-sm">Satisfação garantida</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"></div>
              <span className="text-sm">Suporte especializado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;