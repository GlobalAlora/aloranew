import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { BlurText } from "./BlurText";
import { ParticlesFallback } from "./ParticlesFallback";

const STATS = [
  { value: "120+", label: "Proyectos entregados" },
  { value: "98%", label: "Clientes que repiten" },
  { value: "72h", label: "Tiempo al primer prototipo" },
  { value: "3×", label: "ROI promedio reportado" },
];

const STATS_BG_VIDEO = "https://videos.pexels.com/video-files/3141210/3141210-uhd_2560_1440_25fps.mp4";

function AnimatedValue({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const numeric = parseInt(value.replace(/\D/g, "")) || 0;
    const suffix = value.replace(/[0-9]/g, "");
    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * numeric);
      setDisplay(current + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display || value}</span>;
}

export function Stats() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section id="resultados" className="relative py-32 md:py-44 overflow-hidden">
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
          style={{ filter: "saturate(0) brightness(0.4)" }}
        >
          <source src={STATS_BG_VIDEO} type="video/mp4" />
        </video>
      )}

      <div className="absolute top-0 inset-x-0 h-[200px] z-[1] gradient-fade-t" />
      <div className="absolute bottom-0 inset-x-0 h-[200px] z-[1] gradient-fade-b" />

      <div className="liquid-glass rounded-3xl p-10 md:p-14 mx-[var(--gutter)] max-w-[var(--max)] md:mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <BlurText
            text="Resultados que hablan."
            as="h2"
            className="font-display uppercase text-4xl md:text-5xl leading-[0.92] tracking-tight"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="font-display italic text-5xl md:text-7xl leading-none text-foreground">
                <AnimatedValue value={stat.value} />
              </span>
              <span className="font-body text-xs text-foreground/55 mt-3 tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
