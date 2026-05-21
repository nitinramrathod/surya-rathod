import { stories } from "@/data/content";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, User } from "lucide-react";

export default function StoriesPage() {
  const featured = stories.find((s) => s.featured);
  const rest = stories.filter((s) => !s.featured);

  return (
    <div className="pt-20 bg-stone-950 min-h-screen">
      <section className="py-16 bg-gradient-to-b from-red-950/20 to-stone-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">प्रेरणादायी कहाण्या</span>
          <h1 className="section-title text-white mt-3 mb-4">
            खऱ्या जीवनाच्या <span className="gradient-text">कहाण्या</span>
          </h1>
          <div className="saffron-divider mx-auto mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto">
            भाऊंच्या कार्यामुळे बदललेल्या जीवनांच्या, न्यायासाठी लढलेल्या 
            आणि समाज घडवलेल्या प्रेरणादायी कहाण्या.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured */}
          {featured && (
            <SectionWrapper>
              <Link href={`/stories/${featured.id}`} className="group block mb-12">
                <div className="card-glow rounded-3xl overflow-hidden hover:border-saffron-700/50 transition-all duration-300">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-stone-950/80 hidden md:block" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-saffron-600 text-white text-xs px-3 py-1 rounded-full">
                          ⭐ वैशिष्ट्यीकृत
                        </span>
                        <span className="text-stone-500 text-xs">{featured.category}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display group-hover:text-saffron-400 transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-stone-400 leading-relaxed mb-6">{featured.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-sm text-stone-500">
                          <User size={14} />
                          <span>{featured.author}</span>
                          <span>•</span>
                          <Clock size={14} />
                          <span>{featured.readTime}</span>
                        </div>
                        <span className="flex items-center gap-1 text-saffron-500 group-hover:gap-2 transition-all text-sm">
                          वाचा <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SectionWrapper>
          )}

          {/* Rest of stories */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((story, i) => (
              <SectionWrapper key={story.id} delay={i * 150}>
                <Link href={`/stories/${story.id}`} className="group block h-full">
                  <div className="card-glow rounded-2xl overflow-hidden hover:border-saffron-700/40 transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden flex-shrink-0">
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
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-white font-bold text-xl mb-3 group-hover:text-saffron-400 transition-colors font-display">
                        {story.title}
                      </h3>
                      <p className="text-stone-400 text-sm leading-relaxed flex-1 mb-4">{story.excerpt}</p>
                      <div className="flex items-center justify-between border-t border-stone-800 pt-4 text-xs text-stone-500">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1"><User size={11} />{story.author}</span>
                          <span className="flex items-center gap-1"><Clock size={11} />{story.readTime}</span>
                        </div>
                        <span className="flex items-center gap-1 text-saffron-500">
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
    </div>
  );
}
