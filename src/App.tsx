import { useRef } from "react";
import "./i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesBento } from "@/components/ServicesBento";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { CTASection } from "@/components/CTASection";
import { QuienesSomos } from "@/components/QuienesSomos";
import { Clientes } from "@/components/Clientes";
import { PorQueAlora } from "@/components/PorQueAlora";
import { TipoEmpresas } from "@/components/TipoEmpresas";
import { Proceso } from "@/components/Proceso";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function App() {
  const heroRef = useRef<HTMLElement>(null!);
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <Hero scrollRef={heroRef} />
        <ServicesBento />
        <ProjectsShowcase />
        <CTASection />
        <QuienesSomos />
        <Clientes />
        <PorQueAlora />
        <TipoEmpresas />
        <Proceso />
        <Stats />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
