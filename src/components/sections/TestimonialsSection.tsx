import { testimonials } from "@/data/content";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-stone-950 via-red-950/10 to-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-14">
            <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">जनतेचा आवाज</span>
            <h2 className="section-title text-white mt-3 mb-4">
              लोक काय <span className="gradient-text">म्हणतात</span>
            </h2>
            <div className="saffron-divider mx-auto" />
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <SectionWrapper key={t.name} delay={i * 100}>
              <div className="glass-card rounded-2xl p-6 hover:border-saffron-700/30 transition-all duration-300 relative">
                <Quote size={32} className="text-saffron-800/60 absolute top-4 right-4" />
                <p className="text-stone-300 leading-relaxed mb-6 text-sm md:text-base prose-marathi">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-stone-800 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-700 to-crimson-800 flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-stone-500 text-xs">{t.role} | {t.location}</div>
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
