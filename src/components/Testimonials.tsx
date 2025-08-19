import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Bruno Silva",
      business: "Restaurante Premium",
      content: "Site lindo e rápido. Em 3 dias estava no ar e já recebendo clientes pelo WhatsApp. As vendas aumentaram 200% no primeiro mês!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      name: "Carla Santos",
      business: "Estética & Beleza",
      content: "A NOWITECH entendeu exatamente o que eu precisava. O site ficou moderno e já trouxe mais de 50 novos clientes em 2 meses.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      name: "Roberto Oliveira",
      business: "TechSolutions",
      content: "Profissionalismo nota 10! O site institucional ficou impecável e nossos leads qualificados triplicaram. Recomendo muito!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 4,
      name: "Ana Costa",
      business: "Loja Fashion",
      content: "Superou todas as expectativas! O e-commerce ficou lindo e funcional. As vendas online cresceram 250% em 3 meses.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 5,
      name: "Diego Ferreira",
      business: "AutoCenter",
      content: "Equipe muito competente! O site trouxe credibilidade ao meu negócio e consegui expandir para outras cidades.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="depoimentos"
      className="py-16 sm:py-24 bg-surface/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 right-6 sm:right-20 w-28 sm:w-40 h-28 sm:h-40 bg-neon-blue/5 rounded-full blur-2xl animate-float"></div>
        <div
          className="absolute bottom-16 left-6 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 bg-neon-purple/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="font-orbitron font-bold mb-3 sm:mb-4 text-[clamp(1.4rem,4.5vw,2.25rem)]">
            O que nossos{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-[clamp(0.95rem,2.8vw,1.125rem)] text-text-secondary max-w-2xl mx-auto">
            Resultados reais de empresários que transformaram seus negócios conosco
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative w-full max-w-3xl sm:max-w-4xl mx-auto">
          <div className="relative bg-surface/60 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border border-surface-border glow-soft overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-3 sm:top-6 left-3 sm:left-6 opacity-20">
              <Quote className="w-10 h-10 sm:w-16 sm:h-16 text-neon-blue" />
            </div>

            {/* Current Testimonial */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 text-neon-green fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote
                className="
                    text-center mb-6 sm:mb-8 leading-relaxed font-medium
                    text-[clamp(0.8rem,3vw,1rem)] sm:text-[clamp(0.9rem,2.5vw,1.125rem)]
                    md:text-[clamp(1rem,2vw,1.25rem)] lg:text-[clamp(1.125rem,1.8vw,1.375rem)]
                    px-2 sm:px-0
                  "
              >
                “{testimonials[currentSlide].content}”
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <img
                  src={testimonials[currentSlide].avatar}
                  alt={testimonials[currentSlide].name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-neon-blue/30 glow-blue object-cover shrink-0"
                />
                <div className="min-w-0 text-center">
                  <div className="font-orbitron font-semibold text-text-primary text-sm sm:text-base truncate">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-text-secondary text-xs sm:text-sm truncate">
                    {testimonials[currentSlide].business}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              variant="outline"
              size="sm"
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="sm"
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "bg-neon-blue glow-blue"
                  : "bg-surface-border hover:bg-neon-blue/50"
                  }`}
              />
            ))}
          </div>

          {/* Small Testimonial Previews */}
          <div className="hidden lg:flex justify-center mt-8 space-x-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentSlide(index)}
                className={`p-2 sm:p-3 rounded-xl border transition-all duration-300 ${index === currentSlide
                  ? "border-neon-blue/50 bg-neon-blue/10"
                  : "border-surface-border bg-surface/30 hover:border-neon-blue/30"
                  }`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Testimonials;