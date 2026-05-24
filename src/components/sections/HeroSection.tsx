"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Shield, Heart, Flame } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-red-950/20 to-stone-950" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-saffron-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-crimson-800/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-saffron-900/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-saffron-950/60 border border-saffron-800/50 rounded-full px-4 py-2 mb-8 text-saffron-400 text-sm backdrop-blur-sm">
              <Flame size={14} className="text-saffron-500" />
              <span>देवा ग्रुप मुंबई | अध्यक्ष</span>
            </div>

            {/* Main heading */}
            <h1 className="hero-text-shadow mb-6">
              <span className="block text-stone-300 text-lg md:text-xl font-medium mb-2">
                निर्भीड नेते
              </span>
              <span
                className="!leading-normal text-5xl md:text-7xl lg:text-8xl font-bold block gradient-text"
                style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}
              >
                सूर्या भाऊ
              </span>
              <span
                className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-1"
                style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}
              >
                राठोड
              </span>
            </h1>

            {/* Quote */}
            <div className="my-8 pl-4 border-l-4 border-saffron-600">
              <p className="text-stone-300 text-xl md:text-2xl italic leading-relaxed"
                style={{ fontFamily: "'Tiro Devanagari Marathi', serif" }}>
                &ldquo;न्यायासाठी लढतो,<br />समाजासाठी जगतो.&rdquo;
              </p>
            </div>

            <p className="text-stone-400 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              गरजूंचा आधार, अन्यायाचा शत्रू. महाराष्ट्राच्या कानाकोपऱ्यात 
              लोकांच्या हृदयात राहणारे हे जनतेचे नेते आहेत.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              {[
                { icon: <Shield size={14} />, text: "निर्भीड" },
                { icon: <Heart size={14} />, text: "समाजसेवक" },
                { icon: <Flame size={14} />, text: "न्यायाचा लढवय्या" },
              ].map((pill) => (
                <span key={pill.text}
                  className="flex items-center gap-1.5 text-sm text-saffron-300 bg-saffron-950/50 border border-saffron-900/50 px-3 py-1.5 rounded-full">
                  {pill.icon}
                  {pill.text}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/about" className="btn-primary text-center text-base py-3 px-8">
                परिचय जाणून घ्या
              </Link>
              <Link href="/works" className="btn-outline text-center text-base py-3 px-8">
                कार्य पहा
              </Link>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-saffron-500/20 to-crimson-700/20 blur-2xl scale-110 animate-pulse-glow" />

              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-saffron-700/50 shadow-2xl shadow-saffron-900/40">
                {/* Placeholder for leader image */}
                <div className="w-full h-full bg-gradient-to-br from-stone-800 via-saffron-950 to-stone-900 flex flex-col items-center justify-center">
                  {/* <div className="text-8xl mb-4">👤</div>
                  <p className="text-saffron-400 text-sm text-center px-4">
                    सूर्या भाऊ राठोड
                  </p> */}
                  <div className="text-center px-2">
                    <Image
                      src="/surya-rathod.jpeg"
                      alt="surya bhau rathod"
                      width={400}
                      height={400}
                      className="mx-auto rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-4 -left-8 glass-card rounded-xl px-4 py-3 shadow-xl animate-float">
                <div className="text-saffron-400 font-bold text-xl">५०,०००+</div>
                <div className="text-stone-400 text-xs">लोकांना मदत</div>
              </div>
              <div className="absolute -top-4 -right-8 glass-card rounded-xl px-4 py-3 shadow-xl animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-saffron-400 font-bold text-xl">१५+ वर्षे</div>
                <div className="text-stone-400 text-xs">सेवा अनुभव</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-500 animate-bounce">
        <span className="text-xs">खाली स्क्रोल करा</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
}
