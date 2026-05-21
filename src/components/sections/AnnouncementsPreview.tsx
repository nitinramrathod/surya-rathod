import { announcements } from "@/data/content";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";
import { Calendar, MapPin, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const typeColors: Record<string, string> = {
  urgent: "bg-red-900/50 text-red-400 border-red-800",
  event: "bg-saffron-900/50 text-saffron-400 border-saffron-800",
  campaign: "bg-green-900/50 text-green-400 border-green-800",
  notice: "bg-blue-900/50 text-blue-400 border-blue-800",
};

export default function AnnouncementsPreview() {
  return (
    <section className="py-20 md:py-28 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">नवीन बातम्या</span>
              <h2 className="section-title text-white mt-2">
                ताज्या <span className="gradient-text">घोषणा</span>
              </h2>
            </div>
            <Link href="/announcements" className="btn-outline text-sm py-2">
              सर्व घोषणा →
            </Link>
          </div>
        </SectionWrapper>

        <div className="space-y-4">
          {announcements.slice(0, 3).map((ann, i) => (
            <SectionWrapper key={ann.id} delay={i * 100}>
              <div className="card-glow rounded-xl p-5 flex flex-col md:flex-row gap-4 hover:border-saffron-700/30 transition-all duration-300 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-saffron-950/80 border border-saffron-800/50 flex items-center justify-center group-hover:bg-saffron-900/50 transition-colors">
                    <Bell size={20} className="text-saffron-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-semibold font-display">{ann.title}</h3>
                    <span className={cn("text-xs px-2 py-1 rounded-full border flex-shrink-0", typeColors[ann.type])}>
                      {ann.category}
                    </span>
                  </div>
                  <p className="text-stone-400 text-sm mb-3 line-clamp-2">{ann.description}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-saffron-600" />
                      {ann.date} | {ann.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-saffron-600" />
                      {ann.location}
                    </span>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
