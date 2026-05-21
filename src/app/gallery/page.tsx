"use client";

import { useState } from "react";
import { galleryImages } from "@/data/content";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/shared/SectionWrapper";

const categories = ["सर्व", "जनसभा", "मदत कार्य", "आरोग्य शिबीर", "शिक्षण", "महिला सशक्तीकरण", "युवा कार्यक्रम", "आपत्कालीन मदत", "गाव दौरा"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("सर्व");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "सर्व"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const activeLightboxImg = lightbox !== null ? galleryImages.find((img) => img.id === lightbox) : null;

  return (
    <div className="pt-20 bg-stone-950 min-h-screen">
      <section className="py-16 bg-gradient-to-b from-red-950/20 to-stone-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">छायाचित्र दालन</span>
          <h1 className="section-title text-white mt-3 mb-4">
            आठवणींचे <span className="gradient-text">दालन</span>
          </h1>
          <div className="saffron-divider mx-auto mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto">
            सूर्या भाऊंच्या कार्याचे, कार्यक्रमांचे आणि जनसंपर्काचे छायाचित्र संग्रह.
          </p>
        </div>
      </section>

      {/* Filter */}
      <div className="sticky top-16 md:top-20 z-40 bg-stone-950 border-b border-stone-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
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
      </div>

      {/* Masonry grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((img, i) => (
              <SectionWrapper key={img.id} delay={i * 50}>
                <div
                  className="break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden border border-stone-800 hover:border-saffron-700/50 transition-all duration-300"
                  onClick={() => setLightbox(img.id)}
                >
                  <div className={cn("relative w-full", i % 3 === 0 ? "aspect-square" : "aspect-[4/3]")}>
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex flex-col justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-saffron-400 text-xs">{img.category}</span>
                      <p className="text-white text-sm font-semibold">{img.title}</p>
                    </div>
                    <div className="absolute top-2 right-2 w-8 h-8 bg-stone-950/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn size={14} className="text-saffron-400" />
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeLightboxImg && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-white hover:bg-stone-700 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image src={activeLightboxImg.src} alt={activeLightboxImg.title} fill className="object-contain" />
            </div>
            <div className="mt-4 text-center">
              <p className="text-saffron-400 text-sm">{activeLightboxImg.category}</p>
              <p className="text-white font-semibold">{activeLightboxImg.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
