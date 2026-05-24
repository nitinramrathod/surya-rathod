import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const footerLinks = [
  { href: "/", label: "मुखपृष्ठ" },
  { href: "/about", label: "परिचय" },
  { href: "/works", label: "कार्य" },
  { href: "/announcements", label: "घोषणा" },
  { href: "/stories", label: "कहाण्या" },
  { href: "/gallery", label: "दालन" },
  { href: "/contact", label: "संपर्क" },
];

const getCurrentYear = (): number => {
  return new Date().getFullYear();
};


export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-saffron-900/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron-500 to-crimson-700 flex items-center justify-center shadow-lg shadow-saffron-900/50">
                <span className="text-white font-bold font-display">सू</span>
              </div>
              <div>
                <div className="text-white font-bold text-xl font-display">सूर्या भाऊ राठोड</div>
                <div className="text-saffron-400 text-sm">अध्यक्ष, देवा ग्रुप मुंबई</div>
              </div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              न्यायासाठी लढतो, समाजासाठी जगतो. गरजूंचा आधार, अन्यायाचा शत्रू. 
              महाराष्ट्राच्या मातीचे सुपुत्र.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://facebook.com" className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-saffron-900/50 flex items-center justify-center text-stone-400 hover:text-saffron-400 transition-all">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-saffron-900/50 flex items-center justify-center text-stone-400 hover:text-saffron-400 transition-all">
                <Instagram size={16} />
              </a>
              <a href="https://twitter.com" className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-saffron-900/50 flex items-center justify-center text-stone-400 hover:text-saffron-400 transition-all">
                <Twitter size={16} />
              </a>
              <a href="https://youtube.com" className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-saffron-900/50 flex items-center justify-center text-stone-400 hover:text-saffron-400 transition-all">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 font-display">त्वरित दुवे</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-400 hover:text-saffron-400 text-sm transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-saffron-600"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 font-display">संपर्क</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-stone-400 text-sm">
                <Phone size={14} className="text-saffron-500 mt-1 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 text-stone-400 text-sm">
                <Mail size={14} className="text-saffron-500 mt-1 flex-shrink-0" />
                <span>suryabhau@devagroup.org</span>
              </li>
              <li className="flex items-start gap-3 text-stone-400 text-sm">
                <MapPin size={14} className="text-saffron-500 mt-1 flex-shrink-0" />
                <span>देवा ग्रुप कार्यालय,<br />मुंबई, महाराष्ट्र</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-xs">
            © {getCurrentYear()} सूर्या भाऊ राठोड | देवा ग्रुप मुंबई. सर्व हक्क राखीव.
          </p>
          <p className="text-stone-600 text-xs">
            न्यायासाठी लढतो, समाजासाठी जगतो 🙏
          </p>
        </div>
      </div>
    </footer>
  );
}
