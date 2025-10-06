
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight, Phone, Mail, Instagram, Facebook, Linkedin, Sparkles,
  CheckCircle2 as Check, Palette, PenTool, Images, Star, Shield, Rocket
} from "lucide-react";

const BRAND = {
  name: "TALI GRAPIC",
  headline: "סטודיו לעיצוב גרפי שמרגיש פרימיום",
  tagline: "מיתוג חד • עיצוב מודרני • תוצאות מהירות",
  sub: "לוגו וזהות מותג • עיצוב סושיאל • דפי נחיתה ואתרים",
  phone: "0523941832",
  email: "studio@taligrapic.com",
  instagram: "#",
  facebook: "#",
  linkedin: "#",
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b10] text-white [direction:rtl] relative">
      <Noise />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Showcase />
      <Testimonials />
      <SuperCTA />
      <Contact />
      <Footer />
      <CallFloating />
    </div>
  );
}

function Container({ className="", children }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Sparkles className="size-4 text-pink-400" /> {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
        <span className="bg-gradient-to-r from-pink-400 via-fuchsia-300 to-rose-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {sub && <p className="mt-3 text-white/70">{sub}</p>}
    </div>
  );
}

function GlassCard({ children, className="" }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-lg shadow-2xl ${className}`}>
      {children}
    </div>
  );
}

function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 transition-all ${solid ? "backdrop-blur bg-black/50 border-b border-white/10" : "bg-transparent"}`}>
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="Tali Grapic" className="h-9 object-contain" />
            <span className="font-medium tracking-tight text-white/90">{BRAND.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">שירותים</a>
            <a href="#work" className="hover:text-white">פורטפוליו</a>
            <a href="#contact" className="rounded-xl bg-white text-black px-4 py-2 hover:opacity-90">דברו איתי</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[38rem] w-[70rem] rounded-full bg-gradient-to-r from-pink-500/25 via-fuchsia-500/25 to-rose-500/25 blur-3xl" />
      </div>
      <Container className="pt-20 pb-16 sm:pt-28 sm:pb-24">
        <motion.div style={{ y }} className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Shield className="size-4" /> איכות פרימיום • זמני תגובה מהירים
            </span>
            <h1 className="mt-4 text-4xl leading-tight font-semibold sm:text-6xl">{BRAND.headline}</h1>
            <p className="mt-3 text-xl text-white/80">{BRAND.tagline}</p>
            <p className="mt-2 text-white/60">{BRAND.sub}</p>
            <ul className="mt-6 grid gap-2 text-white/80">
              {["חשיבה אסטרטגית למותג","UI/UX שממיר לידים","ביצוע פיקסל־פרפקט"].map(t=>(
                <li key={t} className="flex items-center gap-2"><Check className="size-5 text-pink-400"/>{t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${BRAND.phone}`} className="group inline-flex items-center gap-2 rounded-2xl bg-white text-black px-5 py-3">
                התקשרו עכשיו — {fmt(BRAND.phone)} <ArrowRight className="size-4 transition-transform group-hover:-translate-x-0.5" />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 hover:bg-white/5">צפו בעבודות</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 text-center text-sm">
              {[{n:"120+",t:"פרויקטים"},{n:"4.9★",t:"לקוח מרוצה"},{n:"48h",t:"זמן תגובה"}].map(s=>(
                <GlassCard key={s.t} className="py-4"><div className="text-2xl font-semibold">{s.n}</div><div className="text-white/60">{s.t}</div></GlassCard>
              ))}
            </div>
          </div>
          <GlassCard className="relative overflow-hidden">
            <img src="/hero.jpg" alt="" className="aspect-[4/3] w-full object-cover opacity-90" onError={(e)=>{e.currentTarget.style.display='none'}}/>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/70">
              <span className="inline-flex items-center gap-2"><Palette className="size-4"/> moodboard</span>
              <span className="inline-flex items-center gap-2"><Rocket className="size-4"/> ready to launch</span>
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </section>
  );
}

function Marquee() {
  const logos = ["adobe","figma","notion","shopify","canva","webflow"];
  return (
    <div className="relative py-6 border-y border-white/10 bg-white/[0.02]">
      <div className="overflow-hidden">
        <div className="animate-marquee whitespace-nowrap text-white/40">
          {Array.from({length:2}).map((_,row)=>(
            <span key={row}>
              {logos.map((l,i)=>(
                <span key={l+i} className="mx-8 inline-flex items-center gap-2">
                  <Star className="size-4"/>{l.toUpperCase()}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  const items = [
    { icon: PenTool, title: "מיתוג וזהות", desc: "לוגו, צבעוניות, טיפוגרפיה ושפה אחידה לעסק" },
    { icon: Images, title: "עיצוב סושיאל", desc: "סטים לפוסטים/סטוריז/באנרים שמייצרים תשומת לב" },
    { icon: Palette, title: "אתרים ודפי נחיתה", desc: "חוויית משתמש מינימליסטית וממירה" },
  ];
  return (
    <section id="services" className="py-20">
      <Container>
        <SectionTitle eyebrow="שירותים" title="מה אני מציעה" sub="עיצוב שמחבר יופי ותוצאות עסקיות." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map(s=>(
            <GlassCard key={s.title} className="p-6 hover:bg-white/[0.05] transition">
              <div className="mb-3 inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-400 text-white"><s.icon className="size-6"/></div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-white/70 text-sm">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  const works = [
    { img: "/work1.jpg", title: "מיתוג בוטיק", tag: "Branding" },
    { img: "/work2.jpg", title: "עיצוב דף נחיתה", tag: "Landing" },
    { img: "/work3.jpg", title: "קמפיין סושיאל", tag: "Social" },
    { img: "/work4.jpg", title: "טיפוגרפיה ייחודית", tag: "Type" },
    { img: "/work5.jpg", title: "UI לקורפורייט", tag: "UI" },
    { img: "/work6.jpg", title: "ערכת לוגואים", tag: "Logo" },
  ];
  return (
    <section id="work" className="py-20">
      <Container>
        <SectionTitle eyebrow="פורטפוליו" title="עבודות נבחרות" sub="אפשר להחליף בתמונות אמיתיות ב־public/." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w,i)=>(
            <GlassCard key={i} className="overflow-hidden group">
              <img src={w.img} alt={w.title} className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.02] opacity-90" onError={(e)=>{e.currentTarget.style.display='none'}}/>
              <div className="p-5 flex items-center justify-between">
                <div><div className="text-sm text-white/60">{w.tag}</div><div className="font-medium">{w.title}</div></div>
                <ArrowRight className="size-4 text-white/50" />
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "תהליך מדויק ומהיר, התוצאה מושלמת.", a: "נועה, מיתוג סטודיו יוגה" },
    { q: "האתר שהעלינו הגדיל המרות בשבוע הראשון.", a: "דניאל, קמפיינים דיגיטליים" },
    { q: "שפה עיצובית נקייה שמרגישה יוקרה.", a: "תמר, מעצבת פנים" },
  ];
  return (
    <section className="py-20">
      <Container>
        <SectionTitle eyebrow="חוות דעת" title="לקוחות מספרים" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t,i)=>(
            <GlassCard key={i} className="p-6">
              <div className="flex items-center gap-2 text-pink-400">{[...Array(5)].map((_,j)=><Star key={j} className="size-4"/>)}</div>
              <p className="mt-3">{t.q}</p>
              <div className="mt-2 text-sm text-white/60">{t.a}</div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SuperCTA() {
  return (
    <section className="py-20">
      <Container>
        <GlassCard className="relative p-8 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_20rem_at_80%_-10%,#f472b6_10%,transparent_60%)] opacity-30" />
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">מוכנים למיתוג שנראה כמו מיליון דולר?</h3>
              <p className="mt-2 text-white/70">דף נחיתה מהיר, זהות מותג חדה, וחומרים שמוכנים לפרסום.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
              <a href={`tel:${BRAND.phone}`} className="rounded-2xl bg-white text-black px-5 py-3 inline-flex items-center gap-2">התקשרו — {fmt(BRAND.phone)} <Phone className="size-4"/></a>
              <a href={`mailto:${BRAND.email}`} className="rounded-2xl border border-white/20 px-5 py-3 inline-flex items-center gap-2 hover:bg-white/5">אימייל <Mail className="size-4"/></a>
            </div>
          </div>
        </GlassCard>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionTitle eyebrow="יצירת קשר" title="בואו נדבר" sub="שיחת ייעוץ קצרה והכוונה חינם." />
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <GlassCard className="p-6">
            <div className="grid gap-3 text-white/80">
              <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2"><Phone className="size-5"/>{fmt(BRAND.phone)}</a>
              <a href={`mailto:${BRAND.email}`} className="inline-flex items-center gap-2"><Mail className="size-5"/>{BRAND.email}</a>
              <div className="flex gap-4 pt-2 text-white/60">
                <a href={BRAND.instagram} className="inline-flex items-center gap-2 hover:text-white"><Instagram className="size-5"/>Instagram</a>
                <a href={BRAND.facebook} className="inline-flex items-center gap-2 hover:text-white"><Facebook className="size-5"/>Facebook</a>
                <a href={BRAND.linkedin} className="inline-flex items-center gap-2 hover:text-white"><Linkedin className="size-5"/>LinkedIn</a>
              </div>
            </div>
          </GlassCard>
          <GlassCard className="p-6">
            <form className="grid gap-4" onSubmit={(e)=>e.preventDefault()}>
              <Field label="שם מלא" />
              <Field label="אימייל" type="email" placeholder="name@example.com" />
              <Field label="הודעה" isTextarea placeholder="כמה מילים על הפרויקט" />
              <button className="rounded-2xl bg-white text-black px-5 py-3 inline-flex items-center gap-2 justify-center">שלחו הודעה <ArrowRight className="size-4"/></button>
            </form>
          </GlassCard>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, type="text", placeholder="", isTextarea=false }) {
  const cls = "rounded-xl border border-white/15 bg-white/[0.02] px-3 py-2 outline-none focus:ring-2 focus:ring-pink-400/40";
  return (
    <div className="grid gap-2">
      <label className="text-sm text-white/70">{label}</label>
      {isTextarea ? <textarea rows={4} className={cls} placeholder={placeholder}/> : <input type={type} className={cls} placeholder={placeholder}/> }
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 bg-white/[0.02]">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} {BRAND.name}. כל הזכויות שמורות.</p>
        <span className="text-sm text-white/60">Hebrew • RTL • Vite • Tailwind • Framer Motion</span>
      </Container>
    </footer>
  );
}

function CallFloating() {
  return (
    <a href={`tel:${BRAND.phone}`} className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full bg-pink-500 px-4 py-2 shadow-xl hover:scale-[1.02] transition" aria-label="התקשרו עכשיו">
      <Phone className="size-4" /> {fmt(BRAND.phone)}
    </a>
  );
}

function Noise() {
  return <div aria-hidden className="pointer-events-none fixed inset-0 opacity-[0.08] mix-blend-screen bg-[url('/noise.png')]" />;
}

function fmt(p){ return [p.slice(0,3), p.slice(3,6), p.slice(6)].join("-"); }
