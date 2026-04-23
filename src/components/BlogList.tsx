import { motion } from "motion/react";
import { ArrowUpRight, Calendar, ChevronLeft } from "lucide-react";
import { BlurText } from "./BlurText";
import { Button } from "@/components/ui/button";
import blogData from "@/data/blog.json";

type BlogPost = {
  slug: string;
  translationSlug: string;
  title: string;
  description: string;
  date: string;
  cover: string;
  language: string;
};

const BLOG_POSTS: BlogPost[] = (blogData.blogs as BlogPost[])
  .filter((post) => post.language === "es")
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function BlogList() {
  return (
    <section className="relative py-28 md:py-40 bg-background min-h-screen">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="pl-0 hover:pl-2 transition-all">
            <a href="/" className="flex items-center gap-2 text-foreground/70 hover:text-foreground">
              <ChevronLeft className="size-4" /> Volver al inicio
            </a>
          </Button>
        </motion.div>

        {/* Header */}
        <div className="mb-16">
          <BlurText
            text="Blog"
            as="h1"
            className="font-display uppercase text-5xl md:text-7xl leading-[0.92] tracking-tight mb-4"
          />
          <p className="font-body text-foreground/60 text-lg max-w-[50ch]">
            Consejos, tendencias y estrategias para escalar tu negocio digital.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group"
            >
              <a href={`/blog/${post.slug}`} className="block">
                <div className="liquid-glass rounded-2xl overflow-hidden hover:bg-white/5 transition-colors h-full flex flex-col">
                  {/* Cover image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-foreground/50 mb-3">
                      <span className="liquid-glass rounded-full px-3 py-1">
                        Blog
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        {new Date(post.date).toLocaleDateString("es-AR", {
                          day: "numeric",
                          month: "short",
                          year: "numeric"
                        })}
                      </span>
                    </div>

                    <h2 className="font-display uppercase text-lg tracking-tight mb-2 group-hover:text-[#3db5ae] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="font-body text-sm text-foreground/60 leading-relaxed line-clamp-3 mb-4 flex-1">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-1 text-sm font-medium text-[#3db5ae] group-hover:gap-2 transition-all mt-auto">
                      Leer más <ArrowUpRight className="size-4" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
