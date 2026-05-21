import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/shared/WhatsAppFloat";
import ScrollProgress from "@/components/shared/ScrollProgress";

export const metadata: Metadata = {
  title: "सूर्या भाऊ राठोड | अध्यक्ष, देवा ग्रुप मुंबई",
  description:
    "सूर्या भाऊ राठोड — एक निर्भीड समाजसेवक, न्यायाचा लढवय्या, गरजूंचा आधार. देवा ग्रुप मुंबईचे अध्यक्ष.",
  keywords:
    "सूर्या भाऊ राठोड, देवा ग्रुप, मुंबई, समाजसेवा, सामाजिक नेते, महाराष्ट्र",
  openGraph: {
    title: "सूर्या भाऊ राठोड | देवा ग्रुप मुंबई",
    description: "न्यायासाठी लढतो, समाजासाठी जगतो",
    type: "website",
    locale: "mr_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700;800;900&family=Tiro+Devanagari+Marathi:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-stone-950 text-stone-100 font-marathi antialiased">
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
