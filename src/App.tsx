import { useRef } from "react";
import "./i18n";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
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
import { BlogPreview } from "@/components/BlogPreview";
import { BlogList } from "@/components/BlogList";
import { BlogPost } from "@/components/BlogPost";

// Wrapper for BlogPost to get slug from URL
function BlogPostWrapper() {
  const { slug } = useParams<{ slug: string }>();
  return <BlogPost slug={slug || ""} />;
}

// Home page component
function HomePage() {
  const heroRef = useRef<HTMLElement>(null!);
  return (
    <>
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
        <BlogPreview />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-foreground min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<><Navbar /><BlogList /><Footer /></>} />
          <Route path="/blog/:slug" element={<><Navbar /><BlogPostWrapper /><Footer /></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
