import { motion } from "motion/react";
import { Calendar, ChevronLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogData from "@/data/blog.json";

type BlogPostType = {
  slug: string;
  translationSlug: string;
  title: string;
  description: string;
  content?: string;
  date: string;
  cover: string;
  language: string;
};

type BlogPostProps = {
  slug: string;
};

export function BlogPost({ slug }: BlogPostProps) {
  const post = (blogData.blogs as BlogPostType[]).find((p) => p.slug === slug);
  const translation = post?.translationSlug
    ? (blogData.blogs as BlogPostType[]).find((p) => p.slug === post.translationSlug)
    : null;

  if (!post) {
    return (
      <section className="relative py-28 md:py-40 bg-background min-h-screen">
        <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)] text-center">
          <h1 className="font-display uppercase text-4xl mb-4">Artículo no encontrado</h1>
          <p className="text-foreground/60 mb-8">El post que buscás no existe o fue movido.</p>
          <Button variant="hero" asChild>
            <a href="/blog">Ver todos los artículos</a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <article className="relative bg-background min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-[var(--gutter)] -mt-32 relative z-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="pl-0 hover:pl-2 transition-all">
            <a href="/blog" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
              <ChevronLeft className="size-4" /> Volver al blog
            </a>
          </Button>
        </motion.div>

        {/* Meta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 text-sm text-foreground/50 mb-6"
        >
          <span className="liquid-glass rounded-full px-4 py-1.5">
            Blog
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="size-4" />
            {new Date(post.date).toLocaleDateString("es-AR", {
              day: "numeric",
              month: "long",
              year: "numeric"
            })}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display uppercase text-3xl md:text-5xl leading-[1.1] tracking-tight mb-6"
        >
          {post.title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg md:text-xl text-foreground/70 leading-relaxed mb-12"
        >
          {post.description}
        </motion.p>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none blog-content"
          dangerouslySetInnerHTML={{ 
            __html: post.content || '<p class="text-foreground/60 italic">Contenido completo del artículo próximamente...</p>' 
          }}
        />

        {/* Language switcher */}
        {translation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-foreground/50 mb-4">
              También disponible en:
            </p>
            <Button variant="heroGlass" asChild>
              <a href={`/blog/${translation.slug}`} className="flex items-center gap-2">
                {translation.language === "en" ? "🇺🇸 English version" : "🇪🇸 Versión en español"}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </motion.div>
        )}

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 py-12 px-8 liquid-glass rounded-2xl text-center"
        >
          <h3 className="font-display uppercase text-2xl mb-4">
            ¿Necesitás ayuda con tu proyecto?
          </h3>
          <p className="text-foreground/60 mb-6 max-w-md mx-auto">
            Contactanos y conversemos sobre cómo podemos ayudarte a escalar tu negocio.
          </p>
          <Button variant="hero" asChild>
            <a href="/#contacto">Hablemos</a>
          </Button>
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </article>
  );
}
