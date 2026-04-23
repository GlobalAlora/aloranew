import { motion } from "motion/react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { ScrubSequence } from "./ScrubSequence";
import { BlurText } from "./BlurText";
import { TechNetwork } from "./TechNetwork";
import { Button } from "@/components/ui/button";
import { FRAMES_PATH, FRAME_COUNT, FRAME_EXT, PARTNERS } from "@/lib/constants";

type HeroProps = {
  scrollRef: React.RefObject<HTMLElement>;
};

export function Hero({ scrollRef }: HeroProps) {
  return (
    <section ref={scrollRef} className="relative h-[250vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Fallback tech network - visible when no frames loaded */}
        <div className="absolute inset-0 z-0">
          <TechNetwork className="absolute inset-0" />
          {/* Subtle gradient overlay for depth */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 40%),
                radial-gradient(ellipse at 70% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 40%)
              `
            }}
          />
        </div>

        <ScrubSequence
          framesPath={FRAMES_PATH}
          frameCount={FRAME_COUNT}
          ext={FRAME_EXT}
          scrollTargetRef={scrollRef}
          className="absolute inset-0 w-full h-full z-[1]"
        />

        <div className="absolute inset-0 z-[2] bg-[radial-gradient(120%_80%_at_50%_60%,transparent_40%,rgba(0,0,0,0.65)_100%)]" />

        <div className="absolute bottom-0 inset-x-0 h-[40vh] z-[2] gradient-fade-b" />

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="liquid-glass rounded-full px-1 py-1 inline-flex items-center gap-2">
              <span className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-semibold">
                Tech B2B
              </span>
              <span className="pr-3 text-sm text-foreground/85">
                Tecnología que escala tu negocio
              </span>
            </div>
          </motion.div>

          <BlurText
            text="Tecnología que convierte."
            as="h1"
            className="mt-6 font-display uppercase text-[clamp(44px,8vw,120px)] leading-[0.92] tracking-[-0.02em] text-foreground max-w-[16ch] font-bold"
            delay={0.09}
            startDelay={0.15}
          />

          <motion.p
            initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
            animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-body text-base md:text-lg text-foreground/70 max-w-xl leading-relaxed"
          >
            Diseñamos, desarrollamos y escalamos soluciones digitales para empresas que no se conforman con lo promedio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-10 flex items-center gap-3 flex-wrap justify-center"
          >
            <Button variant="hero" asChild>
              <a href="#contacto">
                Hablemos <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button variant="heroGlass" asChild>
              <a href="#servicios">
                <ChevronDown className="mr-1.5 size-4" /> Ver servicios
              </a>
            </Button>
          </motion.div>

          {PARTNERS.length > 0 && (
            <div className="absolute bottom-10 inset-x-0 flex flex-col items-center gap-4">
              <span className="liquid-glass rounded-full px-4 py-1.5 text-xs font-body text-foreground/80">
                Confían en Alora
              </span>
              <div className="flex items-center gap-8 md:gap-14 flex-wrap justify-center px-6">
                {PARTNERS.map((p, i) => (
                  <span
                    key={i}
                    className="font-display uppercase text-base md:text-lg text-foreground/55 tracking-widest"
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <p className="sr-only">
          Alora — empresa de tecnología B2B especializada en desarrollo web, landing pages,
          aplicaciones web, ecommerce, Google Ads, mantenimiento web e inteligencia artificial
          para atención al cliente.
        </p>
      </div>
    </section>
  );
}
