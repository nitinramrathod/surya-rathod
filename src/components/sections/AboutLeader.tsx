import SectionWrapper from "@/components/shared/SectionWrapper";
import Link from "next/link";

export default function AboutLeader() {
  return (
    <section className="py-20 md:py-28 bg-stone-950 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-saffron-900/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionWrapper>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-saffron-900/30 bg-gradient-to-br from-stone-900 to-stone-950">
                <div className="w-full h-full flex flex-col items-center justify-center p-8">
                  <div className="text-7xl mb-6">🦁</div>
                  <div className="text-center">
                    <p className="text-saffron-400 font-bold text-lg font-display">सूर्या भाऊ राठोड</p>
                    <p className="text-stone-500 text-sm mt-1">लोकनेते | समाजसेवक | न्यायाचे रक्षक</p>
                  </div>
                </div>
              </div>
              {/* Accent block */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-saffron-600 to-crimson-700 rounded-2xl opacity-20 blur-sm" />
            </div>
          </SectionWrapper>

          <SectionWrapper delay={200}>
            <div>
              <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">परिचय</span>
              <h2 className="section-title text-white mt-3 mb-6">
                जनतेचे <span className="gradient-text">सूर्या भाऊ</span>
              </h2>
              <div className="saffron-divider mb-8" />
              
              <div className="space-y-4 text-stone-300 leading-relaxed prose-marathi">
                <p>
                  सूर्या भाऊ राठोड हे केवळ एक नाव नाही — ते एक विश्वास आहे. गरजूंचा आधार, 
                  अन्यायाचा शत्रू, आणि समाजाचा आवाज. महाराष्ट्राच्या मातीतून उगवलेले हे 
                  नेते लाखो लोकांच्या हृदयात राहतात.
                </p>
                <p>
                  देवा ग्रुप मुंबईचे अध्यक्ष म्हणून त्यांनी गेल्या १५ वर्षांत ५०,०००+ 
                  लोकांना मदत केली. जातपात, धर्म न पाहता प्रत्येक गरजूसाठी लढणे हे त्यांचे 
                  व्रत आहे.
                </p>
                <p>
                  शेतकरी असो, कामगार असो, विद्यार्थी असो — भाऊ सर्वांसाठी उभे असतात. 
                  हे खरे जनतेचे नेते आहेत.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
                {[
                  { label: "जन्म", value: "महाराष्ट्र" },
                  { label: "संघटना", value: "देवा ग्रुप" },
                  { label: "पद", value: "अध्यक्ष" },
                  { label: "कार्यक्षेत्र", value: "महाराष्ट्र" },
                ].map((item) => (
                  <div key={item.label} className="glass-card rounded-lg p-3">
                    <div className="text-stone-500 text-xs">{item.label}</div>
                    <div className="text-saffron-400 font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-primary inline-block">
                संपूर्ण परिचय वाचा →
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
