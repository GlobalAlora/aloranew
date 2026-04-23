import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "./BlurText";
import { Button } from "@/components/ui/button";
import { ParticlesFallback } from "./ParticlesFallback";

const FOOTER_LINKS = [
  { label: "Términos", href: "/legal" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "#contacto" },
];

const CTA_BG_VIDEO = "https://videos.pexels.com/video-files/5483077/5483077-uhd_2560_1440_25fps.mp4";

export function CtaFooter() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="contacto" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      {videoFailed ? (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(220,20%,10%)] to-[hsl(220,20%,4%)]">
          <ParticlesFallback className="absolute inset-0" />
        </div>
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: "brightness(0.45)" }}
        >
          <source src={CTA_BG_VIDEO} type="video/mp4" />
        </video>
      )}

      <div className="absolute top-0 inset-x-0 h-[200px] z-[1] gradient-fade-t" />
      <div className="absolute bottom-0 inset-x-0 h-[200px] z-[1] gradient-fade-b" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <BlurText
          text="¿Listo para crecer en serio?"
          className="font-display italic text-[clamp(56px,10vw,180px)] leading-[0.88] tracking-[-0.02em] max-w-[16ch]"
        />
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
          whileInView={{ filter: "blur(0)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 font-body text-base md:text-lg text-foreground/75 max-w-xl"
        >
          Una llamada. Una estrategia. Resultados reales.
        </motion.p>
        <div className="mt-10 flex items-center gap-3 flex-wrap justify-center">
          <Button variant="hero" asChild>
            <a href="https://wa.me/REEMPLAZAR" target="_blank" rel="noopener">
              Hablemos <ArrowUpRight className="ml-1 size-4" />
            </a>
          </Button>
          <Button variant="heroGlass" asChild>
            <a href="#servicios">Ver servicios</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-border/40">
        <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-foreground/50">
            © 2026 Alora. Todos los derechos reservados.
          </span>
          <nav className="flex items-center gap-6">
            {FOOTER_LINKS.map((l, i) => (
              <a
                key={i}
                href={l.href}
                className="font-body text-xs text-foreground/50 hover:text-foreground/80 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm outline-none"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
