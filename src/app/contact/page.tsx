"use client";

import { useState } from "react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";

const reasons = [
  "सामाजिक समस्या",
  "वैद्यकीय मदत",
  "कायदेशीर सल्ला",
  "शिक्षण सहाय्य",
  "आर्थिक मदत",
  "न्यायासाठी लढाई",
  "इतर",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", reason: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.message) return;

    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        reason: form.reason,
        message: form.message
      }),
    });

    // In production, send to API
    setSubmitted(true);
  };

  return (
    <div className="pt-20 bg-stone-950 min-h-screen">
      <section className="py-16 bg-gradient-to-b from-red-950/20 to-stone-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-saffron-500 text-sm font-semibold uppercase tracking-widest">संपर्क</span>
          <h1 className="section-title text-white mt-3 mb-4 flex gap-3 items-center justify-center">
            आमच्याशी <span className="gradient-text !leading-normal">बोला</span>
          </h1>
          <div className="saffron-divider mx-auto mb-6" />
          <p className="text-stone-400 max-w-xl mx-auto">
            कोणतीही समस्या असो — सूर्या भाऊ नेहमी तुमच्यासाठी तयार आहेत. 
            खाली संपर्क करा.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <SectionWrapper>
              <div>
                <h2 className="text-2xl font-bold text-white mb-8 font-display">संपर्क माहिती</h2>
                <div className="space-y-5 mb-10">
                  {[
                    { icon: <Phone size={20} />, label: "फोन", value: "+91 98765 43210", href: "tel:+919876543210" },
                    { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "+91 98765 43210", href: "https://wa.me/919876543210" },
                    { icon: <Mail size={20} />, label: "ईमेल", value: "suryabhau@devagroup.org", href: "mailto:suryabhau@devagroup.org" },
                    { icon: <MapPin size={20} />, label: "कार्यालय", value: "देवा ग्रुप कार्यालय, मुंबई, महाराष्ट्र", href: "#" },
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="flex items-start gap-4 glass-card rounded-xl p-4 hover:border-saffron-700/40 transition-all group">
                      <div className="w-10 h-10 rounded-lg bg-saffron-950 border border-saffron-800/50 flex items-center justify-center text-saffron-500 flex-shrink-0 group-hover:bg-saffron-900/50 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-stone-500 text-xs mb-1">{item.label}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Quick actions */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold mb-4">त्वरित संपर्क</h3>
                  <a href="tel:+919876543210"
                    className="flex items-center justify-center gap-3 w-full btn-primary py-3 text-base">
                    <Phone size={18} />
                    आत्ता कॉल करा
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition-colors">
                    <MessageCircle size={18} />
                    WhatsApp करा
                  </a>
                </div>
              </div>
            </SectionWrapper>

            {/* Form */}
            <SectionWrapper delay={200}>
              <div className="glass-card rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-6">🙏</div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">धन्यवाद!</h3>
                    <p className="text-stone-400">
                      तुमचा संदेश मिळाला. भाऊ लवकरच तुमच्याशी संपर्क करतील.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", reason: "", message: "" }); }}
                      className="mt-6 btn-outline text-sm py-2"
                    >
                      नवीन संदेश पाठवा
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6 font-display">संदेश पाठवा</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-stone-400 text-sm mb-2">पूर्ण नाव *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="तुमचे नाव"
                          className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-saffron-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-400 text-sm mb-2">मोबाईल नंबर *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-saffron-600 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-400 text-sm mb-2">कारण</label>
                        <select
                          name="reason"
                          value={form.reason}
                          onChange={handleChange}
                          className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 focus:outline-none focus:border-saffron-600 transition-colors"
                        >
                          <option value="">कारण निवडा</option>
                          {reasons.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-stone-400 text-sm mb-2">संदेश *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="तुमची समस्या किंवा संदेश लिहा..."
                          rows={5}
                          className="w-full bg-stone-900 border border-stone-700 rounded-xl px-4 py-3 text-stone-100 placeholder-stone-600 focus:outline-none focus:border-saffron-600 transition-colors resize-none"
                        />
                      </div>
                      <button
                        onClick={handleSubmit}
                        className="w-full btn-primary py-3 flex items-center justify-center gap-2 text-base"
                      >
                        <Send size={16} />
                        संदेश पाठवा
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>
    </div>
  );
}
