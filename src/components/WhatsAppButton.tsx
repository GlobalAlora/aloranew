import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+5491112345678"; // Reemplazar con número real
const WHATSAPP_MESSAGE = "Hola, vi la web de Alora y quiero consultar por un proyecto";

export function WhatsAppButton() {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      onClick={handleClick}
      className="fixed left-6 bottom-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        
        {/* Main button */}
        <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white rounded-full pl-4 pr-5 py-3 shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105">
          <MessageCircle className="size-6 fill-white" />
          <span className="font-body font-medium text-sm whitespace-nowrap max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300">
            Escribinos
          </span>
        </div>
      </div>
    </motion.button>
  );
}
