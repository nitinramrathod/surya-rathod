import Link from "next/link";
import SectionWrapper from "@/components/shared/SectionWrapper";

export default function ContactCTA() {
  return (
    <section className="py-20 bg-stone-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper>
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-saffron-900/60 via-red-950/40 to-stone-900" />
            <div className="absolute inset-0 border border-saffron-800/30 rounded-3xl" />
            <div className="relative z-10 text-center py-16 px-8">
              <div className="text-5xl mb-6">🙏</div>
              <h2 className="section-title text-white mb-4">
                आपली <span className="gradient-text">समस्या</span> सांगा
              </h2>
              <p className="text-stone-300 text-lg mb-8 max-w-xl mx-auto">
                कोणतीही समस्या असो — भाऊ नेहमी तुमच्यासाठी तयार आहेत. 
                आत्ताच संपर्क करा.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary text-base py-3 px-8">
                  संपर्क करा
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  💬 WhatsApp करा
                </a>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
