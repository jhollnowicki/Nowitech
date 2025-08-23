import { MapPin, Mail, MessageCircle, Instagram } from "lucide-react";
import { SITE } from "@/lib/config";
import { trackWhatsAppClick } from "@/lib/analytics"; // ⬅️ novo

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#hero" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Planos", href: "#planos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" }
  ];

  const services = [
    "Sites Institucionais",
    "Landing Pages",
    "Otimização SEO",
    "Design Responsivo",
    "Manutenção Web"
  ];

  return (
    <footer className="bg-surface/80 backdrop-blur-sm border-t border-surface-border relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-neon-blue/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-neon-purple/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={SITE.logo}
                alt="NOWITECH Logo"
                className="h-20 w-auto block pointer-events-none select-none"
              />
              <span className="font-orbitron font-bold text-2xl text-neon-blue">
                {SITE.brand}
              </span>
            </div>

            <p className="text-text-secondary mb-6 max-w-md leading-relaxed">
              Transformando ideias em resultados digitais. Criamos sites modernos, rápidos e que convertem para impulsionar seu negócio no mundo digital.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Oi, vim pelo site!")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp"
                onClick={(e) => {
                  e.preventDefault();
                  trackWhatsAppClick({ label: "footer_social_whatsapp", page: "Home" });
                  window.open(
                    `${SITE.whatsappUrl}?text=${encodeURIComponent("Oi, vim pelo site!")}`,
                    "_blank"
                  );
                }}
                className="flex items-center justify-center w-12 h-12 bg-neon-green/20 rounded-full border border-neon-green/30 text-neon-green hover:bg-neon-green/30 hover:glow-green transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram"
                className="flex items-center justify-center w-12 h-12 bg-neon-purple/20 rounded-full border border-neon-purple/30 text-neon-purple hover:bg-neon-purple/30 hover:glow-purple transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron font-semibold text-lg text-text-primary mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-neon-blue transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-orbitron font-semibold text-lg text-text-primary mb-6">
              Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-text-secondary flex items-center">
                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full mr-3"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="mt-16 pt-8 border-t border-surface-border">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Location */}
            <div className="flex items-center space-x-3 group">
              <div className="w-14 h-14 bg-neon-blue/20 rounded-full flex items-center justify-center group-hover:bg-neon-blue/30 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <div className="font-semibold text-text-primary">Localização</div>
                <div className="text-text-secondary text-sm">{SITE.cidade}</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 group">
              <div className="w-14 h-14 bg-neon-purple/20 rounded-full flex items-center justify-center group-hover:bg-neon-purple/30 transition-colors duration-300">
                <Mail className="w-5 h-5 text-neon-purple" />
              </div>
              <div>
                <div className="font-semibold text-text-primary">E-mail</div>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-text-secondary text-sm hover:text-neon-purple transition-colors duration-300"
                >
                  {SITE.email}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-center space-x-3 group">
              <div className="w-14 h-14 bg-neon-green/20 rounded-full flex items-center justify-center group-hover:bg-neon-green/30 transition-colors duration-300">
                <MessageCircle className="w-5 h-5 text-neon-green" />
              </div>
              <div>
                <div className="font-semibold text-text-primary">WhatsApp</div>
                <a
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent("Oi, vim pelo site!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir conversa no WhatsApp"
                  onClick={(e) => {
                    e.preventDefault();
                    trackWhatsAppClick({ label: "footer_contact_whatsapp", page: "Home" });
                    window.open(
                      `${SITE.whatsappUrl}?text=${encodeURIComponent("Oi, vim pelo site!")}`,
                      "_blank"
                    );
                  }}
                  className="text-text-secondary text-sm hover:text-neon-green transition-colors duration-300"
                >
                  {SITE.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col md:flex-row justify-between items-center">
          <div className="text-text-muted text-sm mb-4 md:mb-0 font-semibold">
            © {currentYear} {SITE.brand}. Todos os direitos reservados.
          </div>
          <div className="flex items-center space-x-6 text-sm text-text-muted">
            <a href="#" className="hover:text-neon-blue transition-colors duration-300 font-semibold">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-neon-blue transition-colors duration-300 font-semibold">
              Termos de Uso
            </a>
            <a
              href="https://nowitech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-blue transition-colors duration-300 font-semibold"
            >
              Desenvolvido por NOWITECH
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
