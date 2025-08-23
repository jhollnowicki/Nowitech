// src/lib/analytics.ts
type Gtag = (...args: any[]) => void;
declare global { interface Window { gtag?: Gtag } }

/** Pageview manual (SPA) */
export const trackPageView = (url: string) => {
  window.gtag?.('event', 'page_view', {
    page_location: url,
    page_title: document.title,
  });
};

/** Lead via WhatsApp (com metadados opcionais) */
export const trackWhatsAppClick = (meta?: {
  label?: string;   // de onde partiu (ex.: "hero", "card_servico", "footer")
  page?: string;    // nome da página
  service?: string; // nome do serviço
}) => {
  window.gtag?.('event', 'generate_lead', {
    method: 'whatsapp',
    value: 1,
    ...meta,
  });

  // Se quiser usar Google Ads depois, descomente e troque o send_to:
  // window.gtag?.('event', 'conversion', {
  //   send_to: 'AW-XXXXXXXXX/AbCdEfGhIjkLmNoPq',
  //   value: 1.0, currency: 'BRL', ...meta
  // });
};

/** Abre o WhatsApp já contabilizando o evento */
export const openWhatsApp = (phone: string, message: string, meta?: {
  label?: string; page?: string; service?: string;
}) => {
  trackWhatsAppClick(meta);
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
