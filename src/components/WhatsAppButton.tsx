import { MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Привет! Хочу узнать больше о ваших тренировках", 
  className = "",
  variant = "default",
  size = "default",
  children 
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant={variant}
      size={size}
      className={`bg-green-500 hover:bg-green-600 text-white font-semibold transition-all duration-300 hover:scale-105 ${className}`}
    >
      <MessageCircle className="w-5 h-5 mr-3" />
      {children || "Написать в WhatsApp"}
      <ExternalLink className="w-4 h-4 ml-2" />
    </Button>
  );
};

export default WhatsAppButton;