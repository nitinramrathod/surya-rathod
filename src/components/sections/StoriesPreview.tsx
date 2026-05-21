import { stories } from "@/data/content";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";

export default function StoriesPreview() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-stone-950 to-red-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">प्रेरणादायी कहाण्या</span>
              <h2 className="section-title text-white mt-2">
                खऱ्या जीवनाच्या <span className="gradient-text">कहाण्या</span>
              </h2>
            </div>
            <Link href="/stories" className="btn-outline text-sm py-2">
              सर्व कहाण्या →
            </Link>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <SectionWrapper key={story.id} delay={i * 150}>
              <Link href={`/stories/${story.id}`} className="group block">
                <div className="card-glow rounded-2xl overflow-hidden hover:border-saffron-700/40 transition-all duration-300 group-hover:-translate-y-1">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent" />
                    <span className="absolute top-3 left-3 bg-stone-950/80 text-saffron-400 text-xs px-2 py-1 rounded-full border border-saffron-900/50">
                      {story.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-bold mb-2 group-hover:text-saffron-400 transition-colors font-display line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-stone-400 text-sm line-clamp-2 mb-4">{story.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {story.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-saffron-500 group-hover:gap-2 transition-all">
                        वाचा <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
