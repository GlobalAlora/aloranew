import { Quote } from "lucide-react";
import { BlurText } from "./BlurText";

const TESTIMONIALS = [
  {
    quote: "Desarrollaron el sitio web institucional y un sistema de ranking profesional totalmente a medida. La plataforma es rápida, fácil de usar y nos dio un salto de calidad en la organización. Siempre hubo buena comunicación, compromiso y predisposición.",
    name: "Alejandro",
    role: "Presidente · Comisión de Tenis de Mesa",
    tags: ["Sistema integral", "Gestión eficiente", "Fácil de usar"],
  },
  {
    quote: "Fue una experiencia muy linda que además nos permitió revisar aspectos muy importantes de nuestra institución. Gracias por la calidez, compromiso, profesionalismo y paciencia. Era una deuda pendiente que llevaba más de 28 años.",
    name: "Verónica Figueroa",
    role: "Presidenta · Fundación por Nuestros Niños",
    tags: ["Proceso colaborativo", "Impacto social", "Equipo comprometido"],
  },
  {
    quote: "Dedicaron tiempo para entender la esencia del proyecto, hacer las sugerencias pertinentes y tener predisposición para resolver cada situación. Quedé muy conforme con el trabajo realizado y los recomiendo.",
    name: "Rulo de Viaje",
    role: "Creador · Club Rulo de Viaje",
    tags: ["Proceso claro", "Comunicación abierta", "Resultados impecables"],
  },
  {
    quote: "El trabajo fue muy profesional, con excelente predisposición y cumplimiento en los plazos. La comunicación fue siempre clara y resolutiva. Destaco el compromiso y la eficiencia.",
    name: "Fernando Celaya",
    role: "Gerente · Starley",
    tags: ["Profesionalismo constante", "Comunicación clara", "Compromiso y eficiencia"],
  },
];

function TestimonialCard({ quote, name, role, tags }: typeof TESTIMONIALS[0]) {
  return (
    <div className="liquid-glass rounded-2xl p-7 w-[340px] md:w-[400px] shrink-0 flex flex-col gap-5">
      <Quote className="size-5 text-primary/70" />
      <p className="font-body text-foreground/85 italic leading-relaxed text-[15px]">
        "{quote}"
      </p>
      <div className="mt-auto flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-gradient-to-br from-primary/60 to-secondary/60" />
          <div>
            <p className="font-body font-medium text-sm">{name}</p>
            <p className="font-body text-xs text-foreground/55 uppercase tracking-wide">{role}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="liquid-glass rounded-full px-2.5 py-1 text-[10px] font-body text-foreground/60 uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS];
  const row2 = [...TESTIMONIALS.slice(2), ...TESTIMONIALS.slice(0, 2), ...TESTIMONIALS.slice(2), ...TESTIMONIALS.slice(0, 2)];

  return (
    <section className="relative py-28 md:py-40 bg-background overflow-hidden">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6">
            Lo que dicen nuestros clientes
          </span>
          <BlurText
            text="Resultados que hablan por sí solos."
            as="h2"
            className="font-display uppercase text-4xl md:text-6xl leading-[0.92] tracking-tight max-w-[20ch]"
          />
        </div>
      </div>

      <div className="relative mt-16 flex flex-col gap-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex gap-5 w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
          {row1.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
        <div className="flex gap-5 w-max animate-[marquee-rev_32s_linear_infinite] hover:[animation-play-state:paused]">
          {row2.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
