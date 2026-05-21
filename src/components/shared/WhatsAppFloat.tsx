"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919876543210?text=नमस्कार सूर्या भाऊ, मला तुमच्याशी संपर्क करायचा आहे."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp वर संपर्क करा"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
        <div className="relative w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center shadow-xl shadow-green-900/50 transition-all duration-300 hover:scale-110">
          <MessageCircle size={26} className="text-white" fill="white" />
        </div>
      </div>
    </a>
  );
}
