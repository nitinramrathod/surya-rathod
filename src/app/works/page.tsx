"use client";

import { useState } from "react";
import { works } from "@/data/content";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Image from "next/image";
import { MapPin, Calendar, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["सर्व", "गरीब कुटुंब", "न्यायासाठी लढाई", "वैद्यकीय मदत", "शिक्षण सहाय्य", "गाव विकास", "महिला सुरक्षा", "युवा मार्गदर्शन", "आपत्कालीन मदत"];

export default function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("सर्व");

  const filtered = activeCategory === "सर्व"
    ? works
    : works.filter((w) => w.category === activeCategory);

  return (
    <div className="pt-20 bg-stone-950 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-red-950/20 to-stone-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-900/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">सामाजिक सेवा</span>
          <h1 className="section-title text-white mt-3 mb-4">
            भाऊंचे <span className="gradient-text">कार्य</span>
          </h1>
          <div className="saffron-divider mx-auto mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto">
            गेल्या १५ वर्षांत लाखो लोकांच्या जीवनात सकारात्मक बदल घडवलेल्या 
            कार्याची ही यादी आहे.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 bg-stone-950 sticky top-16 md:top-20 z-40 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-saffron-600 text-white"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Works grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((work, i) => (
              <SectionWrapper key={work.id} delay={i * 80}>
                <div className="card-glow rounded-2xl overflow-hidden group hover:border-saffron-700/50 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden flex-shrink-0">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 bg-saffron-600/90 text-white text-xs px-3 py-1 rounded-full">
                      {work.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-lg mb-3 font-display">
                      {work.title}
                    </h3>
                    <p className="text-stone-400 text-sm leading-relaxed mb-5 flex-1">
                      {work.description}
                    </p>
                    <div className="border-t border-stone-800 pt-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <Calendar size={12} className="text-saffron-600" />
                        {work.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <MapPin size={12} className="text-saffron-600" />
                        {work.location}
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Users size={12} className="text-green-500" />
                        <span className="text-green-400 font-semibold">{work.impact} प्रभावित</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-stone-500">
              <p className="text-2xl mb-2">🔍</p>
              <p>या श्रेणीत कोणतेही कार्य नाही</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
