import { motion } from "motion/react";
import { BlurText } from "./BlurText";

const CLIENTS = [
  { name: "Starley", logo: "/logos/starley.png", website: "https://starley.com.ar" },
  { name: "Infoecos", logo: "/logos/infoecos.png", website: "https://infoecos.com.ar" },
  { name: "Megamayorista", logo: "/logos/logo-megamayorista-nobg.png", website: "https://megamayorista.com.ar" },
  { name: "Mimikids", logo: "/logos/mimikidslogo.png", website: "https://mimikids.com.ar" },
  { name: "Lidia", logo: "/logos/logo-lidia.png", website: "https://soylidia.com" },
  { name: "Gangfan", logo: "/logos/gangafan-logo.svg", website: "https://gangafan.com" },
  { name: "Entradafan", logo: "/logos/entradafan.svg", website: "https://entradafan.com" },
  { name: "Yampop", logo: "/logos/yampop.webp", website: "https://yampop.com" },
  { name: "Studio 510", logo: "/logos/logostudio.webp", website: "https://studio510.com/ar" },
  { name: "Nutriac", logo: "/logos/nutriac-logo.svg", website: "https://nutriac.com.ar" },
  { name: "Boutique de Luz", logo: "/logos/logo-boutique.png", website: "https://boutiquedeluz.com.ar" },
  { name: "Brillonor", logo: "/logos/brillonor.png", website: "https://brillonor.com.ar" },
  { name: "Digital Pro", logo: "/logos/digitalpro.jpg", website: "https://digitalpro.com" },
];

// Duplicate for seamless loop
const ALL_CLIENTS = [...CLIENTS, ...CLIENTS];

export function Clientes() {
  return (
    <section id="clientes" className="relative py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] mb-12">
        <div className="flex flex-col items-center text-center">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-sm text-foreground/80 mb-6">
            Confían en Alora
          </span>
          <BlurText
            text="Clientes que transformaron su presencia digital"
            as="h2"
            className="font-display uppercase text-3xl md:text-5xl leading-[0.95] tracking-tight max-w-[24ch]"
          />
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Gradient masks for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <motion.div
          className="flex gap-8 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {ALL_CLIENTS.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 liquid-glass rounded-xl p-6 w-40 h-32 flex items-center justify-center hover:bg-white/10 transition-colors group cursor-pointer"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 brightness-150 contrast-125"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="font-display text-base text-foreground/70">${client.name}</span>`;
                  }
                }}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
