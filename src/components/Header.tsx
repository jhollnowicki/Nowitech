import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, WHATSAPP_MESSAGES } from "@/lib/config";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Planos", href: "#planos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const handleWhatsAppClick = () => {
    window.open(`${SITE.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES.hero)}`, '_blank');
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10
    ${isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-black/55 backdrop-blur-sm'}`}
    >
      {/* altura fixa do header */}
      <div className="container px-4 sm:px-6 lg:px-8 h-20 sm:h-24">

        <div className="flex h-full items-center justify-between gap-6">
          {/* Logo (grande) */}
          <a href="#hero" className="flex items-center gap-2 min-w-0 flex-1">
            <img
              src={SITE.logo}
              alt="NOWITECH Logo"
              className="h-16 sm:h-20 w-auto shrink-0 pointer-events-none select-none"
            />
            <span
              className="block text-neon-blue font-orbitron font-bold
               text-base sm:text-xl leading-none
               max-w-[55vw] truncate "
            >
              {SITE.brand}
            </span>
          </a>


          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <Button
            onClick={handleWhatsAppClick}
            className="hidden md:inline-flex bg-gradient-primary hover:bg-gradient-accent text-white"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Falar no WhatsApp
          </Button>

          {/* Menu mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-white"
            aria-label="Abrir menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Drawer mobile (mesma barra, sem segunda faixa) */}
      {isOpen && (
        <div className="md:hidden bg-black/65 backdrop-blur-md border-t border-white/10">
          <nav className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 text-white/90 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={handleWhatsAppClick}
              className="mt-2 bg-gradient-primary hover:bg-gradient-accent text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>



  );
};

export default Header;