"use client";

import { useState } from "react";
import { announcements } from "@/data/content";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Calendar, MapPin, Clock, Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["सर्व", "रक्तदान शिबीर", "जनसभा", "सामाजिक अभियान", "मोफत कायदेशीर सल्ला"];

const typeColors: Record<string, string> = {
  urgent: "border-l-red-500 bg-red-950/20",
  event: "border-l-saffron-500 bg-saffron-950/20",
  campaign: "border-l-green-500 bg-green-950/20",
  notice: "border-l-blue-500 bg-blue-950/20",
};

const typeBadge: Record<string, string> = {
  urgent: "bg-red-900/60 text-red-400",
  event: "bg-saffron-900/60 text-saffron-400",
  campaign: "bg-green-900/60 text-green-400",
  notice: "bg-blue-900/60 text-blue-400",
};

const typeLabel: Record<string, string> = {
  urgent: "तातडीचे",
  event: "कार्यक्रम",
  campaign: "अभियान",
  notice: "सूचना",
};

export default function AnnouncementsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("सर्व");

  const filtered = announcements.filter((a) => {
    const matchCat = activeCategory === "सर्व" || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-20 bg-stone-950 min-h-screen">
      <section className="py-16 bg-gradient-to-b from-red-950/20 to-stone-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">नवीनतम बातम्या</span>
          <h1 className="section-title text-white mt-3 mb-4">
            ताज्या <span className="gradient-text">घोषणा</span>
          </h1>
          <div className="saffron-divider mx-auto mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto">
            देवा ग्रुपच्या सर्व कार्यक्रम, सभा, शिबिरे आणि महत्त्वाच्या घोषणा येथे पाहा.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-6 bg-stone-950 border-b border-stone-800">
        <div className="max-w-5xl mx-auto px-4 space-y-4">
          <div className="relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="घोषणा शोधा..."
              className="w-full bg-stone-900 border border-stone-700 rounded-xl pl-12 pr-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-saffron-600 transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-saffron-600 text-white"
                    : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filtered.map((ann, i) => (
              <SectionWrapper key={ann.id} delay={i * 80}>
                <div className={cn(
                  "rounded-xl p-6 border border-stone-800 border-l-4 transition-all duration-300 hover:border-stone-700",
                  typeColors[ann.type]
                )}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <Bell size={18} className="text-saffron-500 flex-shrink-0" />
                      <h3 className="text-white font-bold font-display">{ann.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      <span className={cn("text-xs px-3 py-1 rounded-full", typeBadge[ann.type])}>
                        {typeLabel[ann.type]}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-stone-800 text-stone-400">
                        {ann.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-stone-300 text-sm mb-4 ml-7">{ann.description}</p>
                  <div className="flex flex-wrap gap-4 ml-7 text-xs text-stone-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-saffron-600" />
                      {ann.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} className="text-saffron-600" />
                      {ann.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} className="text-saffron-600" />
                      {ann.location}
                    </span>
                  </div>
                </div>
              </SectionWrapper>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-20 text-stone-500">
                <Bell size={40} className="mx-auto mb-4 opacity-30" />
                <p>कोणत्याही घोषणा आढळल्या नाहीत</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
