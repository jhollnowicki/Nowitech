import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SITE, WHATSAPP_MESSAGES } from "@/lib/config";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva para o meu site ficar pronto?",
      answer: "Nosso prazo padrão é de até 72 horas para sites básicos e de 3 a 7 dias para projetos mais complexos. Trabalhamos com cronogramas definidos e você acompanha todo o progresso em tempo real."
    },
    {
      question: "O domínio e hospedagem estão inclusos no preço?",
      answer: "Sim! Todos os nossos planos incluem domínio (.com.br ou .com) por 1 ano e hospedagem profissional. Você não paga nada a mais por isso e seu site já sai no ar completo."
    },
    {
      question: "Posso fazer alterações depois que o site estiver pronto?",
      answer: "Claro! Todos os planos incluem um período de ajustes gratuitos (de 1 a 2 semanas, dependendo do plano). Após esse período, alterações têm custo a partir de R$ 50 por mudança simples."
    },
    {
      question: "Vocês oferecem suporte técnico?",
      answer: "Sim! Oferecemos suporte técnico por WhatsApp e email. O tempo de suporte varia conforme o plano: 30 dias (Básico), 60 dias (Intermediário) e 90 dias (Premium) com suporte prioritário."
    },
    {
      question: "O site será otimizado para Google (SEO)?",
      answer: "Definitivamente! Todos os nossos sites são desenvolvidos com as melhores práticas de SEO: títulos otimizados, meta descriptions, estrutura semântica, velocidade de carregamento e responsividade mobile."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Aceitamos cartão de crédito (até 3x sem juros), PIX (5% de desconto) e transferência bancária. Emitimos nota fiscal e contrato para todos os projetos. 50% na aprovação do layout e 50% na entrega."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-24 h-24 bg-neon-green/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-neon-purple/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-surface/30 backdrop-blur-sm rounded-full px-4 py-2 border border-surface-border glow-soft mb-6">
            <HelpCircle className="w-5 h-5 text-neon-blue" />
            <span className="text-neon-blue text-sm font-medium">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Dúvidas{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tire todas as suas dúvidas sobre nossos serviços e processos
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-surface-border hover:border-neon-blue/30 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-surface/30 transition-colors duration-300 group"
              >
                <h3 className="text-lg font-semibold text-text-primary group-hover:text-neon-blue transition-colors duration-300 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-neon-blue transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-surface-border mb-4"></div>
                  <p className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Help CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-text-secondary">
            <span>Ainda tem dúvidas?</span>
            <a
              href={`${SITE.whatsappUrl}?text=${encodeURIComponent(WHATSAPP_MESSAGES.contact)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue hover:text-neon-purple transition-colors duration-300 font-medium"
            >
              Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;