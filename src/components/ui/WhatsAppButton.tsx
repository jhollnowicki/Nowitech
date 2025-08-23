// src/components/ui/WhatsAppButton.tsx
import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/analytics";

type Props = React.ComponentProps<typeof Button> & {
  phone: string;                     // "5541999999999"
  message: string;                   // texto pré-preenchido
  label?: string; page?: string;     // metadados (opcional)
  service?: string;
};

export default function WhatsAppButton({
  phone, message, label, page, service, children, onClick, ...rest
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    openWhatsApp(phone, message, { label, page, service });
  };
  return (
    <Button {...rest} onClick={handleClick}>
      {children ?? "Falar no WhatsApp"}
    </Button>
  );
}
