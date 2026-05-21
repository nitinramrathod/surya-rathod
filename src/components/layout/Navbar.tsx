"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "मुखपृष्ठ" },
  { href: "/about", label: "परिचय" },
  { href: "/works", label: "कार्य" },
  { href: "/announcements", label: "घोषणा" },
  { href: "/stories", label: "कहाण्या" },
  { href: "/gallery", label: "दालन" },
  { href: "/contact", label: "संपर्क" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-stone-950/95 backdrop-blur-md border-b border-saffron-900/30 shadow-lg shadow-black/40"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-crimson-700 flex items-center justify-center shadow-lg shadow-saffron-900/50 group-hover:shadow-saffron-500/30 transition-shadow">
              <span className="text-white font-bold text-sm font-display">
                सू
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight font-display">
                सूर्या भाऊ राठोड
              </div>
              <div className="text-saffron-400 text-xs leading-tight">
                देवा ग्रुप मुंबई
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "bg-saffron-900/40 text-saffron-400 border border-saffron-800/50"
                    : "text-stone-300 hover:text-saffron-400 hover:bg-stone-800/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-saffron-400 hover:text-saffron-300 text-sm transition-colors"
            >
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary text-sm py-2 px-4"
            >
              संपर्क करा
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-saffron-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-stone-950/98 backdrop-blur-md border-t border-saffron-900/30">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200",
                  pathname === link.href
                    ? "bg-saffron-900/40 text-saffron-400"
                    : "text-stone-300 hover:text-saffron-400 hover:bg-stone-800/50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-stone-800 flex gap-3">
              <a href="tel:+919876543210" className="btn-outline flex-1 text-center text-sm py-2">
                📞 कॉल करा
              </a>
              <Link href="/contact" className="btn-primary flex-1 text-center text-sm py-2" onClick={() => setIsOpen(false)}>
                संपर्क
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
