# सूर्या भाऊ राठोड - Portfolio Website

**देवा ग्रुप मुंबई | अध्यक्ष**

A modern, powerful social leader portfolio website built in Marathi for Surya Bhau Rathod.

---

## 🚀 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion**
- **Lucide React**

---

## 📦 Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # परिचय पान
│   ├── works/          # कार्य पान
│   ├── announcements/  # घोषणा पान
│   ├── stories/        # कहाण्या पान
│   │   └── [id]/      # कहाणी तपशील
│   ├── gallery/        # दालन पान
│   ├── contact/        # संपर्क पान
│   ├── globals.css
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # मुखपृष्ठ
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/       # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutLeader.tsx
│   │   ├── StatsSection.tsx
│   │   ├── WorksPreview.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── AnnouncementsPreview.tsx
│   │   ├── StoriesPreview.tsx
│   │   └── ContactCTA.tsx
│   └── shared/
│       ├── WhatsAppFloat.tsx
│       ├── ScrollProgress.tsx
│       └── SectionWrapper.tsx
├── data/
│   └── content.ts      # All Marathi content
└── lib/
    └── utils.ts
```

---

## 🎨 Design System

### Colors
- **Saffron** (#f97316) — Primary accent
- **Crimson** (#be123c) — Secondary accent  
- **Gold** (#eab308) — Highlights
- **Stone 950** (#0a0000) — Dark background

### Fonts
- **Tiro Devanagari Marathi** — Display/headings
- **Noto Sans Devanagari** — Body text

---

## 📝 Content Updates

All content is in `src/data/content.ts`:

- `siteConfig` — Name, contact, social links
- `stats` — Counter statistics
- `works` — Social work entries
- `announcements` — Events and notices
- `stories` — Inspirational stories
- `testimonials` — People's quotes
- `galleryImages` — Photo gallery
- `timeline` — Life journey

---

## 🖼️ Adding Real Photos

1. Place leader's photo in `public/images/surya-bhau.jpg`
2. Update `HeroSection.tsx` to use `<Image src="/images/surya-bhau.jpg" ... />`
3. Replace Unsplash URLs in `content.ts` with real event photos

---

## 🌐 Deployment

Deploy on **Vercel** (recommended):

```bash
npm install -g vercel
vercel
```

Or **Netlify**, **Railway**, or any Node.js hosting.

---

## 📞 Support

For website issues or customization, contact the development team.

**जय हिंद | जय महाराष्ट्र 🙏**
