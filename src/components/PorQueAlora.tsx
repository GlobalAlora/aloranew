import { Users, RefreshCw, Globe, Target, Layers, Shield, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { BlurText } from "./BlurText";
import type { LucideIcon } from "lucide-react";

const REASONS: {
  icon: LucideIcon;
  title: string;
  points: string[];
}[] = [
  {
    icon: Users,
    title: "Seguimiento personalizado real",
    points: [
      "Cada proyecto tiene acompañamiento directo y seguimiento continuo",
      "No delegamos la relación en cuentas junior ni desaparecemos después de la entrega",
      "Entendemos objetivos, cambios y evolución del negocio",
      "Nos involucramos más allá del desarrollo inicial",
      "No eres un ticket. Eres un proyecto con contexto y prioridades reales",
    ],
  },
  {
    icon: RefreshCw,
    title: "Flexibilidad y adaptación",
    points: [
      "No trabajamos con procesos rígidos que bloquean ajustes necesarios",
      "Adaptamos el desarrollo cuando el proyecto lo requiere",
      "La tecnología debe acompañar la evolución del negocio, no limitarla",
    ],
  },
  {
    icon: Globe,
    title: "Talento bilingüe",
    points: [
      "Trabajamos con equipos y clientes en distintos mercados",
      "Colaboración con empresas internacionales",
      "Documentación clara y comunicación directa sin intermediarios",
      "Relevante para empresas B2B, startups y proyectos internacionales",
    ],
  },
  {
    icon: Target,
    title: "Enfoque estratégico, no solo técnico",
    points: [
      "No empezamos escribiendo código. Empezamos entendiendo qué querés lograr",
      "Qué problema estás resolviendo, qué debe hacer el usuario",
      "Cómo se medirá el éxito",
      "Diseñamos con intención. Desarrollamos con propósito",
    ],
  },
  {
    icon: Layers,
    title: "Experiencia en distintos niveles de complejidad",
    points: [
      "Desde sitios corporativos hasta plataformas con usuarios y suscripciones",
      "No improvisamos arquitectura",
      "Diseñamos pensando en estabilidad, escalabilidad y mantenimiento futuro",
    ],
  },
  {
    icon: MessageCircle,
    title: "Transparencia en proceso y comunicación",
    points: [
      "Planificación clara, seguimiento organizado, expectativas definidas",
      "Sabés qué se está haciendo, en qué etapa está el proyecto",
      "Sin promesas vagas ni procesos opacos",
    ],
  },
  {
    icon: Shield,
    title: "Tecnología alineada con crecimiento",
    points: [
      "No desarrollamos solo para publicar",
      "SEO técnico correcto, rendimiento optimizado",
      "Base preparada para integraciones futuras",
      "Crecer no debería implicar reconstruir todo desde cero",
    ],
  },
];

export function PorQueAlora() {
  return (
    <section id="por-que-alora" className="relative py-28 md:py-40 bg-background">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6">
            Diferencial Alora
          </span>
          <BlurText
            text="¿Por qué trabajar con Alora y no con otra agencia?"
            as="h2"
            className="font-display uppercase text-3xl md:text-5xl leading-[0.95] tracking-tight max-w-[24ch]"
          />
          <p className="mt-4 font-body text-foreground/60 text-base max-w-[60ch]">
            No competimos por volumen. No trabajás con un sistema automatizado donde sos un proyecto más en la lista. Trabajás con un equipo que entiende que la tecnología debe adaptarse al negocio, no al revés.
          </p>
        </div>

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {REASONS.slice(0, 3).map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                className="liquid-glass rounded-2xl p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <Icon className="size-4 text-foreground" />
                </div>
                <h3 className="font-display uppercase text-lg tracking-tight mb-4">
                  {reason.title}
                </h3>
                <ul className="space-y-2">
                  {reason.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <ArrowRight className="size-3.5 text-primary/70 mt-1 shrink-0" />
                      <span className="font-body text-xs text-foreground/65 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Row 2: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {REASONS.slice(3, 6).map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i + 3}
                className="liquid-glass rounded-2xl p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.05, duration: 0.4 }}
              >
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <Icon className="size-4 text-foreground" />
                </div>
                <h3 className="font-display uppercase text-lg tracking-tight mb-4">
                  {reason.title}
                </h3>
                <ul className="space-y-2">
                  {reason.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <ArrowRight className="size-3.5 text-primary/70 mt-1 shrink-0" />
                      <span className="font-body text-xs text-foreground/65 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Row 3: 1 card centered */}
        <div className="flex justify-center">
          {REASONS.slice(6, 7).map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={6}
                className="liquid-glass rounded-2xl p-6 flex flex-col w-full md:w-1/3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 6 * 0.05, duration: 0.4 }}
              >
                <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
                  <Icon className="size-4 text-foreground" />
                </div>
                <h3 className="font-display uppercase text-lg tracking-tight mb-4">
                  {reason.title}
                </h3>
                <ul className="space-y-2">
                  {reason.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <ArrowRight className="size-3.5 text-primary/70 mt-1 shrink-0" />
                      <span className="font-body text-xs text-foreground/65 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
