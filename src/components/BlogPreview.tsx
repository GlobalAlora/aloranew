import { motion } from "motion/react";
import { ArrowUpRight, Calendar } from "lucide-react";
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

// Get latest 3 Spanish posts sorted by date
const BLOG_POSTS: BlogPost[] = (blogData.blogs as BlogPost[])
  .filter((post) => post.language === "es")
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

export function BlogPreview() {
  return (
    <section id="blog" className="relative py-28 md:py-40 bg-background">
      <div className="max-w-[var(--max)] mx-auto px-[var(--gutter)]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="liquid-glass rounded-full px-4 py-1.5 text-xs text-foreground/80 mb-6 inline-block">
              Blog
            </span>
            <BlurText
              text="Últimos artículos"
              as="h2"
              className="font-display uppercase text-4xl md:text-5xl leading-[0.92] tracking-tight"
            />
            <p className="mt-4 font-body text-foreground/60 text-base max-w-[40ch]">
              Consejos, tendencias y estrategias para escalar tu negocio digital.
            </p>
          </div>
          <Button variant="heroGlass" asChild>
            <a href="/blog" className="flex items-center gap-2">
              Ver todos <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <a href={`/blog/${post.slug}`} className="block">
                <div className="liquid-glass rounded-2xl overflow-hidden hover:bg-white/5 transition-colors">
                  {/* Cover image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.cover}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
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

                    <h3 className="font-display uppercase text-lg tracking-tight mb-2 group-hover:text-[#3db5ae] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="font-body text-sm text-foreground/60 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#3db5ae] group-hover:gap-2 transition-all">
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
