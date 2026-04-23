import { Building2, TrendingUp, ShoppingBag, Rocket, Settings, X } from "lucide-react";
import { motion } from "motion/react";
import { BlurText } from "./BlurText";
import type { LucideIcon } from "lucide-react";

const COMPANY_TYPES: {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
}[] = [
  {
    icon: Building2,
    title: "Empresas B2B y servicios profesionales",
    description: "Organizaciones que venden a otras empresas y necesitan comunicar autoridad, explicar procesos complejos y generar oportunidades comerciales cualificadas.",
    examples: [
      "Consultoras, firmas tecnológicas, estudios profesionales",
      "Empresas industriales, compañías con ciclos de venta consultivos",
    ],
  },
  {
    icon: TrendingUp,
    title: "Pymes en crecimiento",
    description: "Negocios que ya validaron su oferta y ahora necesitan profesionalizar su presencia digital y ordenar su operación.",
    examples: [
      "Empresas con equipo interno",
      "Negocios que reciben consultas constantes",
      "Compañías que quieren escalar con procesos más claros",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Ecommerce con intención de escalar",
    description: "Tiendas online que buscan algo más que 'estar en línea'. Necesitan optimizar conversión, estructura técnica y procesos.",
    examples: [
      "Marcas con catálogo activo",
      "Empresas que invierten en publicidad",
      "Negocios que quieren mejorar rendimiento y experiencia de compra",
    ],
  },
  {
    icon: Rocket,
    title: "Startups con inversión o en fase de crecimiento",
    description: "Equipos que necesitan lanzar rápido, validar producto o estructurar una plataforma sólida para crecer.",
    examples: [
      "Startups fundadas recientemente",
      "Proyectos con inversión inicial",
      "Equipos que necesitan desarrollo a medida o evolución tecnológica",
    ],
  },
  {
    icon: Settings,
    title: "Empresas que requieren sistemas a medida",
    description: "Organizaciones donde una web tradicional ya no es suficiente y necesitan automatización, integración o plataformas internas.",
    examples: [
      "Empresas con procesos manuales repetitivos",
      "Equipos que trabajan con datos dispersos",
      "Compañías que quieren eficiencia operativa",
    ],
  },
];

const NOT_FOR = [
  "Estás en etapa de idea sin validación",
  "Solo buscas una página básica sin enfoque estratégico",
  "No existe intención de crecimiento o mejora estructural",
];

export function TipoEmpresas() {
  return (
    <section id="tipo-empresas" className="relative py-28 md:py-40 bg-background">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6">
            Nuestro foco
          </span>
          <BlurText
            text="¿Con qué tipo de empresas trabajamos?"
            as="h2"
            className="font-display uppercase text-3xl md:text-5xl leading-[0.95] tracking-tight max-w-[24ch]"
          />
          <p className="mt-4 font-body text-foreground/60 text-base max-w-[60ch]">
            No trabajamos con todo el mundo. Nos enfocamos en organizaciones que ya están operando y necesitan estructura digital real para crecer, optimizar o escalar.
          </p>
        </div>

        {/* Company Types Grid - Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {COMPANY_TYPES.slice(0, 3).map((type, i) => {
            const Icon = type.icon;
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
                <h3 className="font-display uppercase text-lg tracking-tight mb-3">
                  {type.title}
                </h3>
                <p className="font-body text-sm text-foreground/65 leading-relaxed mb-4">
                  {type.description}
                </p>
                <ul className="space-y-1.5 mt-auto">
                  {type.examples.map((example, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/70 mt-2 shrink-0" />
                      <span className="font-body text-xs text-foreground/50">
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Company Types Grid - Row 2: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
          {COMPANY_TYPES.slice(3, 5).map((type, i) => {
            const Icon = type.icon;
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
                <h3 className="font-display uppercase text-lg tracking-tight mb-3">
                  {type.title}
                </h3>
                <p className="font-body text-sm text-foreground/65 leading-relaxed mb-4">
                  {type.description}
                </p>
                <ul className="space-y-1.5 mt-auto">
                  {type.examples.map((example, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/70 mt-2 shrink-0" />
                      <span className="font-body text-xs text-foreground/50">
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Not For Section - Improved Design */}
        <motion.div
          className="relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br from-red-950/30 to-orange-950/20 border border-red-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="size-5 text-red-400" />
              </div>
              <h3 className="font-display uppercase text-xl tracking-tight text-red-200">
                No somos la mejor opción si:
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {NOT_FOR.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-red-950/20 border border-red-500/10"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="font-body text-sm text-foreground/70 leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
