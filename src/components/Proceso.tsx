import { BlurText } from "./BlurText";

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    body: "Entendemos tu negocio, tus objetivos y tus usuarios antes de escribir una sola línea de código.",
  },
  {
    n: "02",
    title: "Estrategia y diseño",
    body: "Definimos la arquitectura, la experiencia de usuario y los flujos clave. Todo validado antes de desarrollar.",
  },
  {
    n: "03",
    title: "Desarrollo",
    body: "Construimos con tecnología de punta, iterando rápido con entregas parciales para que siempre tengas visibilidad.",
  },
  {
    n: "04",
    title: "Lanzamiento y escala",
    body: "Lanzamos, medimos y optimizamos. Tu producto digital mejora semana a semana con datos reales.",
  },
];

export function Proceso() {
  return (
    <section id="proceso" className="relative py-28 md:py-40 bg-background">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6">
            Cómo trabajamos
          </span>
          <BlurText
            text="Cuatro pasos. Un proyecto impecable."
            as="h2"
            className="font-display uppercase text-4xl md:text-6xl leading-[0.92] tracking-tight max-w-[20ch]"
          />
          <p className="mt-4 font-body text-foreground/60 text-base max-w-[50ch]">
            Metodología clara de inicio a lanzamiento. Sin sorpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative px-6 md:px-10 py-10 md:py-14 flex flex-col gap-4 items-start">
              <span className="font-display text-[96px] md:text-[140px] leading-none text-primary/15 -mb-6 select-none">
                {step.n}
              </span>
              <h3 className="font-display uppercase text-2xl md:text-3xl tracking-tight">
                {step.title}
              </h3>
              <p className="font-body text-sm text-foreground/65 leading-relaxed max-w-[30ch]">
                {step.body}
              </p>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="absolute top-20 right-0 h-px w-full bg-gradient-to-r from-border via-border/50 to-transparent hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
