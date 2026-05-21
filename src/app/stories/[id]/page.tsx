import { stories } from "@/data/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, Calendar, ArrowLeft, Share2 } from "lucide-react";

export function generateStaticParams() {
  return stories.map((s) => ({ id: String(s.id) }));
}

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const story = stories.find((s) => s.id === Number(id));
  if (!story) notFound();

  const related = stories.filter((s) => s.id !== story.id).slice(0, 2);

  return (
    <div className="pt-20 bg-stone-950 min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Back */}
        <Link href="/stories" className="flex items-center gap-2 text-saffron-500 hover:text-saffron-400 text-sm mb-8 transition-colors">
          <ArrowLeft size={14} />
          सर्व कहाण्या
        </Link>

        {/* Category */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-saffron-900/50 text-saffron-400 text-sm px-3 py-1 rounded-full border border-saffron-800/50">
            {story.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display leading-tight">
          {story.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-stone-500 text-sm mb-8 pb-6 border-b border-stone-800">
          <span className="flex items-center gap-1.5"><User size={14} />{story.author}</span>
          <span className="flex items-center gap-1.5"><Calendar size={14} />{story.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={14} />{story.readTime}</span>
          <button className="flex items-center gap-1.5 text-saffron-500 hover:text-saffron-400 transition-colors ml-auto">
            <Share2 size={14} /> शेअर करा
          </button>
        </div>

        {/* Image */}
        <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden mb-10 border border-saffron-900/20">
          <Image src={story.image} alt={story.title} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="prose-marathi">
          {story.content.split("\n\n").map((para, i) => (
            <p key={i} className="text-stone-300 mb-5 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Share */}
        <div className="mt-10 pt-6 border-t border-stone-800">
          <p className="text-stone-400 text-sm mb-4">ही कहाणी शेअर करा:</p>
          <div className="flex gap-3">
            {["Facebook", "WhatsApp", "Twitter"].map((platform) => (
              <button key={platform}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-300 text-sm rounded-lg transition-colors">
                {platform}
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
          <h2 className="text-xl font-bold text-white mb-6 font-display">इतर कहाण्या</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {related.map((s) => (
              <Link key={s.id} href={`/stories/${s.id}`}
                className="card-glow rounded-xl p-4 hover:border-saffron-700/40 transition-all group">
                <span className="text-saffron-500 text-xs">{s.category}</span>
                <h3 className="text-white font-semibold mt-1 group-hover:text-saffron-400 transition-colors line-clamp-2 font-display">
                  {s.title}
                </h3>
                <p className="text-stone-500 text-xs mt-2">{s.readTime} • {s.author}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
