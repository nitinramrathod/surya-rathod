import { stats } from "@/data/content";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-saffron-950/40 via-stone-900 to-crimson-950/20 border-y border-saffron-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <SectionWrapper key={stat.label} delay={i * 100}>
              <div className="text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold gradient-text mb-1"
                  style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-stone-400 text-sm">{stat.label}</div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
