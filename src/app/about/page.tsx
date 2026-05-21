import type { Metadata } from "next";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { timeline } from "@/data/content";

export const metadata: Metadata = {
  title: "परिचय | सूर्या भाऊ राठोड",
  description: "सूर्या भाऊ राठोड यांचा संपूर्ण परिचय, जीवनप्रवास, आणि सामाजिक योगदान.",
};

export default function AboutPage() {
  return (
    <div className="pt-20 bg-stone-950 min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-red-950/20 to-stone-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron-900/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">परिचय</span>
          <h1 className="section-title text-white mt-3 mb-4">
            <span className="gradient-text">सूर्या भाऊ राठोड</span> कोण आहेत?
          </h1>
          <div className="saffron-divider mx-auto mb-8" />
          <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto">
            महाराष्ट्राच्या मातीतून उगवलेले एक निर्भीड नेते — ज्यांनी 
            समाजाच्या शेवटच्या माणसासाठी आपले आयुष्य समर्पित केले.
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <SectionWrapper>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">
                  जीवनप्रवास
                </h2>
                <div className="space-y-4 prose-marathi">
                  <p className="text-stone-300">
                    सूर्या भाऊ राठोड यांचा जन्म महाराष्ट्रातील एका सामान्य शेतकरी कुटुंबात झाला. 
                    लहानपणापासूनच त्यांनी समाजातील विषमता, अन्याय आणि गरिबी जवळून पाहिली. 
                    याच वेदनेतून त्यांचे सामाजिक कार्याचे बीज रोवले गेले.
                  </p>
                  <p className="text-stone-300">
                    शिक्षण घेत असताना त्यांनी विद्यार्थी चळवळीत सक्रिय सहभाग घेतला. 
                    शेतकऱ्यांच्या, कामगारांच्या आणि वंचितांच्या प्रश्नांसाठी ते नेहमीच 
                    पुढे होते. त्यांच्या निर्भीड स्वभावाने लोकांच्या मनात आदराचे स्थान मिळवले.
                  </p>
                  <p className="text-stone-300">
                    २०११ मध्ये त्यांनी देवा ग्रुप मुंबईची स्थापना केली. आज हजारो 
                    कार्यकर्ते या संघटनेत सक्रिय आहेत आणि महाराष्ट्रभर समाजसेवेचे काम 
                    अखंडपणे सुरू आहे.
                  </p>
                  <p className="text-stone-300">
                    सूर्या भाऊ म्हणतात — &ldquo;एका माणसाच्या आयुष्यात जर मला सकारात्मक बदल 
                    घडवता आला, तर माझी सेवा सफल झाली.&rdquo; हा साधेपणाच त्यांच्या 
                    महानतेचे रहस्य आहे.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            <SectionWrapper delay={200}>
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 font-display">
                  नेतृत्वगुण
                </h2>
                {[
                  { icon: "🦁", title: "निर्भीडता", desc: "कोणत्याही शक्तीसमोर न झुकता न्यायासाठी लढणे हे त्यांचे वैशिष्ट्य आहे." },
                  { icon: "❤️", title: "करुणा", desc: "प्रत्येक गरजूची वेदना ते स्वतःची वेदना समजतात." },
                  { icon: "⚡", title: "कृतिशीलता", desc: "केवळ बोलणे नव्हे तर तातडीने कृती करणे हे त्यांचे वैशिष्ट्य." },
                  { icon: "🤝", title: "एकता", desc: "जातपात, धर्म न पाहता सर्वांना एकत्र आणण्याची ताकद." },
                  { icon: "📢", title: "आवाज", desc: "दबल्या-पिचल्यांचा आवाज बनणे हे त्यांचे जीवितकार्य आहे." },
                ].map((item) => (
                  <div key={item.title} className="glass-card rounded-xl p-4 flex gap-4 hover:border-saffron-700/30 transition-all">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-saffron-400 font-semibold mb-1">{item.title}</h3>
                      <p className="text-stone-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-b from-stone-950 to-red-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div className="text-center mb-14">
              <h2 className="section-title text-white">
                महत्त्वाचे <span className="gradient-text">टप्पे</span>
              </h2>
              <div className="saffron-divider mx-auto mt-4" />
            </div>
          </SectionWrapper>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron-600 via-saffron-800 to-transparent" />

            <div className="space-y-8 pl-16">
              {timeline.map((item, i) => (
                <SectionWrapper key={item.year} delay={i * 100}>
                  <div className="relative">
                    <div className="absolute -left-10 w-8 h-8 rounded-full bg-gradient-to-br from-saffron-500 to-crimson-700 flex items-center justify-center shadow-lg shadow-saffron-900/50 border-2 border-stone-950">
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <div className="card-glow rounded-xl p-5">
                      <div className="text-saffron-500 font-bold text-lg mb-1">{item.year}</div>
                      <h3 className="text-white font-semibold mb-2 font-display">{item.title}</h3>
                      <p className="text-stone-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </SectionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionWrapper>
            <div className="glass-card rounded-3xl p-10">
              <div className="text-5xl mb-6">🌟</div>
              <h2 className="section-title text-white mb-6">
                भविष्याची <span className="gradient-text">दृष्टी</span>
              </h2>
              <blockquote className="text-stone-300 text-xl leading-relaxed italic"
                style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
                &ldquo;एक असे महाराष्ट्र घडवायचे आहे जिथे कोणताही गरजू माणूस 
                उपाशी राहणार नाही, कोणावरही अन्याय होणार नाही, 
                आणि प्रत्येकाला सन्मानाचे जीवन मिळेल.&rdquo;
              </blockquote>
              <p className="text-saffron-500 font-semibold mt-4">— सूर्या भाऊ राठोड</p>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
