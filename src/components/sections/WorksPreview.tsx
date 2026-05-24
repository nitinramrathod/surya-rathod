import { works } from "@/data/content";
import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { MapPin, Calendar, Users } from "lucide-react";
import Image from "next/image";

export default function WorksPreview() {
  const featured = works.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-14">
            <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">सामाजिक कार्य</span>
            <h2 className="section-title text-white mt-3 mb-4 flex items-center justify-center gap-3">
              समाजासाठी <span className="gradient-text !leading-normal">केलेले कार्य</span>
            </h2>
            <div className="saffron-divider mx-auto mb-6" />
            <p className="text-stone-400 max-w-xl mx-auto">
              भाऊंनी गेल्या १५ वर्षांत हजारो लोकांच्या जीवनात बदल घडवला. 
              येथे त्यातील काही महत्त्वाच्या कार्याची झलक:
            </p>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((work, i) => (
            <SectionWrapper key={work.id} delay={i * 150}>
              <div className="card-glow rounded-2xl overflow-hidden group hover:border-saffron-700/50 transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent" />
                  <span className="absolute top-3 left-3 bg-saffron-600/90 text-white text-xs px-2 py-1 rounded-full">
                    {work.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 font-display">
                    {work.title}
                  </h3>
                  <p className="text-stone-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-saffron-600" />
                      {work.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-saffron-600" />
                      {work.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={11} className="text-saffron-600" />
                      {work.impact}
                    </span>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>

        <div className="text-center">
          <Link href="/works" className="btn-outline inline-block">
            सर्व कार्य पहा →
          </Link>
        </div>
      </div>
    </section>
  );
}
