import { BlurText } from "./BlurText";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    q: "¿Con qué tipo de empresas trabajan?",
    a: "Trabajamos exclusivamente con empresas B2B: desde startups en crecimiento hasta corporaciones establecidas. No hacemos proyectos para particulares ni para emprendimientos sin modelo de negocio validado.",
  },
  {
    q: "¿Cuánto tarda un proyecto típico?",
    a: "Un landing page de alta conversión puede estar en producción en 2 semanas. Una aplicación web compleja puede llevar 3 a 6 meses. Siempre acordamos plazos realistas antes de arrancar y los cumplimos.",
  },
  {
    q: "¿Trabajan con empresas fuera de Argentina?",
    a: "Sí. Tenemos clientes en Latinoamérica, España y Estados Unidos. Nuestros procesos están pensados para equipos distribuidos y trabajamos en todos los husos horarios.",
  },
  {
    q: "¿Qué pasa después de que lanza el proyecto?",
    a: "Ofrecemos planes de mantenimiento y evolución continua. No desaparecemos tras el lanzamiento. Muchos clientes trabajan con nosotros durante años, escalando sus productos.",
  },
  {
    q: "¿Cómo funciona la IA para atención al cliente?",
    a: "Implementamos agentes de IA entrenados con la información de tu empresa: productos, políticas, FAQs. Se integran con WhatsApp, email, chat web y tus sistemas internos. Configuración y ajuste continuo incluidos.",
  },
  {
    q: "¿Cómo empezamos?",
    a: "Con una llamada de 30 minutos para entender tu situación. Sin presión, sin vendedor de seguros. Si hay fit, armamos una propuesta en 48 horas.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-28 md:py-40 bg-background">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80">
            Preguntas frecuentes
          </span>
          <BlurText
            text="Todo lo que necesitás saber."
            as="h2"
            className="font-display uppercase text-5xl md:text-6xl leading-[0.9] tracking-tight mt-4"
          />
          <p className="mt-6 font-body text-foreground/65 text-sm leading-relaxed max-w-[34ch]">
            Si tu duda no está acá, escribinos. Respondemos en menos de 24 horas.
          </p>
          <Button variant="heroGlass" className="mt-8" asChild>
            <a href="#contacto">Contactarnos</a>
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/40">
              <AccordionTrigger className="font-display uppercase text-lg md:text-xl tracking-tight py-6 hover:no-underline data-[state=open]:text-primary text-left">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-foreground/70 text-[15px] leading-relaxed pb-6 max-w-[60ch]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
