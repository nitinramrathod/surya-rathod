import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🙏</div>
        <h1 className="text-6xl font-bold gradient-text mb-4 font-display">४०४</h1>
        <h2 className="text-2xl font-bold text-white mb-4">पान सापडले नाही</h2>
        <p className="text-stone-400 mb-8 max-w-md">
          तुम्ही शोधत असलेले पान अस्तित्वात नाही किंवा हलवले गेले आहे.
        </p>
        <Link href="/" className="btn-primary inline-block">
          मुखपृष्ठावर परत जा
        </Link>
      </div>
    </div>
  );
}
