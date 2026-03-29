"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  Briefcase,
  ChevronDown,
  GraduationCap,
  Laptop,
  MessageCircle,
  PhoneCall,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const menuItems: MenuItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "Discover Us",
    children: [
      { label: "About Us", href: "#about" },
      { label: "Newsletter", href: "#newsletter" },
      { label: "Collaboration", href: "#collaboration" },
    ],
  },
  { label: "About Us", href: "#about" },
  {
    label: "Services",
    children: [
      { label: "Website Development", href: "#services" },
      { label: "CRM & Automation", href: "#services" },
      { label: "Affiliate Marketing", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
      { label: "Business Consulting", href: "#services" },
      { label: "E-commerce Solutions", href: "#services" },
      { label: "Maintenance & Security", href: "#services" },
    ],
  },
  {
    label: "Internship",
    children: [
      { label: "Hybrid", href: "#internship" },
      { label: "Onsite", href: "#internship" },
      { label: "Remote", href: "#internship" },
    ],
  },
  {
    label: "Events",
    children: [
      { label: "Upcoming Events", href: "#events" },
      { label: "Previous Events", href: "#events" },
    ],
  },
  {
    label: "Jobs",
    children: [
      { label: "Full Time", href: "#jobs" },
      { label: "Part Time", href: "#jobs" },
      { label: "Commission Based", href: "#jobs" },
    ],
  },
  { label: "Students", href: "#students" },
  { label: "Blog", href: "#blog" },
  { label: "Franchise", href: "#franchise" },
  { label: "Contact", href: "#contact" },
];

const slides = [
  {
    title: "We Turn Small Businesses into Digital Brands",
    cta: "Get Started",
  },
  {
    title: "AI Automation for Smart Business Growth",
    cta: "Explore Services",
  },
  {
    title: "Scale Faster with Digital Solutions",
    cta: "Book Consultation",
  },
];

const serviceDetails = [
  {
    title: "Website Development",
    description: "High-performance websites engineered for conversions and trust.",
    features: ["Modern UI/UX", "Fast load speed", "SEO-ready architecture"],
  },
  {
    title: "CRM & Automation",
    description: "Automate lead nurturing and customer lifecycle in one system.",
    features: ["Lead scoring", "Workflow automation", "Real-time reporting"],
  },
  {
    title: "Affiliate Marketing",
    description: "Create profitable partner channels that scale without heavy ad spend.",
    features: ["Partner onboarding", "Commission tracking", "Performance analytics"],
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns for predictable customer acquisition.",
    features: ["Paid ads strategy", "Organic content plan", "Funnel optimization"],
  },
  {
    title: "Business Consulting",
    description: "Strategic support to remove bottlenecks and unlock growth.",
    features: ["Growth roadmap", "Offer positioning", "Revenue systems"],
  },
  {
    title: "E-commerce Solutions",
    description: "Storefronts and sales systems optimized for repeat purchases.",
    features: ["Conversion-focused PDPs", "Cart recovery", "Checkout optimization"],
  },
  {
    title: "Maintenance & Security",
    description: "Keep your digital assets secure, updated, and always available.",
    features: ["24/7 monitoring", "Routine updates", "Threat protection"],
  },
];

const whyChooseUs = [
  { icon: Bot, title: "AI-powered systems" },
  { icon: Rocket, title: "Fast delivery" },
  { icon: TrendingUp, title: "Affordable solutions" },
  { icon: BarChart3, title: "Real business growth" },
  { icon: ShieldCheck, title: "End-to-end support" },
];

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Founder, UrbanLeaf",
    review:
      "In 4 months, our inbound leads tripled. The team felt like a strategic growth partner.",
  },
  {
    name: "Neha Bansal",
    role: "Director, Axis Interiors",
    review:
      "Their automation workflow cut manual follow-ups by 60%. We finally scale with confidence.",
  },
  {
    name: "Ritwik Saha",
    role: "CEO, FitNova",
    review:
      "Premium delivery, clean communication, and measurable ROI from week one.",
  },
];

const portfolio = ["SaaS Launch Platform", "D2C Fashion Store", "Healthcare CRM", "Education Enrollment Hub", "Real Estate Funnel", "Finance Dashboard"];

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [openServices, setOpenServices] = useState<number[]>([0]);
  const [activeModal, setActiveModal] = useState<null | "contact" | "admission" | "counseling">(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeServiceSet = useMemo(() => new Set(openServices), [openServices]);

  const toggleService = (index: number) => {
    setOpenServices((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    );
  };

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="relative overflow-x-clip bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.2),transparent_35%)]" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-950/90 shadow-2xl shadow-slate-900/40 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <a href="#home" className="font-poppins text-2xl font-semibold tracking-tight">
            Tickete<span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">.Digital</span>
          </a>

          <div className="hidden items-center gap-1 xl:flex">
            {menuItems.map((item) => (
              <div key={item.label} className="group relative">
                <a
                  href={item.href ?? "#"}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4" />}
                </a>
                {item.children && (
                  <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900/95 p-2 opacity-0 shadow-xl transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10 hover:text-white"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-full border border-white/20 px-4 py-2 text-sm xl:hidden"
          >
            Menu
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-6 pt-2 xl:hidden">
            {menuItems.map((item) => (
              <div key={item.label} className="border-b border-white/10 py-2">
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdowns((prev) => ({ ...prev, [item.label]: !prev[item.label] }))
                      }
                      className="flex w-full items-center justify-between py-2 text-left"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition ${mobileDropdowns[item.label] ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileDropdowns[item.label] && (
                      <div className="space-y-1 pb-2 pl-3">
                        {item.children.map((child) => (
                          <a key={child.label} href={child.href} className="block rounded-lg px-2 py-1 text-sm text-slate-300">
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a href={item.href} className="block py-2">
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="relative flex min-h-screen items-center pt-24">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 flex items-center transition-all duration-700 ${
              activeSlide === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                  <Sparkles className="h-4 w-4" /> Premium Digital Growth Partner
                </span>
                <h1 className="font-poppins text-4xl font-semibold leading-tight md:text-6xl">{slide.title}</h1>
                <p className="max-w-xl text-lg text-slate-300">
                  We design digital experiences, automation pipelines, and growth systems that make your business look elite and perform even better.
                </p>
                <a href="#contact" className="btn-primary inline-flex">{slide.cta}</a>
              </div>
              <div className="hidden items-center justify-center lg:flex">
                <div className="glass h-80 w-full max-w-md rounded-3xl p-8">
                  <p className="text-sm text-slate-300">Projected Business Impact</p>
                  <h3 className="mt-4 text-3xl font-semibold">+312% Client Acquisition</h3>
                  <div className="mt-10 grid grid-cols-2 gap-4 text-sm">
                    <div className="rounded-2xl bg-white/5 p-4">Conversion Lift<br /><span className="text-xl text-cyan-300">2.9x</span></div>
                    <div className="rounded-2xl bg-white/5 p-4">CAC Reduction<br /><span className="text-xl text-cyan-300">41%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button onClick={prevSlide} className="slider-nav left-4"><ArrowLeft className="h-5 w-5" /></button>
        <button onClick={nextSlide} className="slider-nav right-4"><ArrowRight className="h-5 w-5" /></button>

        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${activeSlide === index ? "w-8 bg-cyan-300" : "w-2.5 bg-white/40"}`}
            />
          ))}
        </div>
      </section>

      <aside className="fixed left-2 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
        <a href="tel:+18001234567" className="floating-btn bg-emerald-500/90"><PhoneCall className="h-4 w-4" /> Call Now</a>
        <a href="https://wa.me/18001234567" className="floating-btn bg-green-500/90"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
      </aside>

      <aside className="fixed right-0 top-1/3 z-40 hidden flex-col gap-2 lg:flex">
        <button onClick={() => setActiveModal("contact")} className="side-cta bg-cyan-500">Contact Us</button>
        <button onClick={() => setActiveModal("admission")} className="side-cta bg-violet-500">Admission Form</button>
        <button onClick={() => setActiveModal("counseling")} className="side-cta bg-pink-500">Free Career Counseling</button>
      </aside>

      <section id="services" className="mx-auto max-w-7xl space-y-8 px-4 py-20 lg:px-8">
        <h2 className="section-title">Services That Fuel Scalable Growth</h2>
        <div className="flex flex-wrap gap-3">
          {serviceDetails.map((service, index) => (
            <button
              key={service.title}
              onClick={() => toggleService(index)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                activeServiceSet.has(index)
                  ? "border-cyan-300 bg-cyan-400/20 text-cyan-200"
                  : "border-white/20 bg-white/5 hover:bg-white/10"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {serviceDetails.map((service, index) => (
            <article
              key={service.title}
              className={`overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 ${
                activeServiceSet.has(index) ? "max-h-96 p-6" : "max-h-0 p-0"
              }`}
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-slate-300">{service.description}</p>
              <ul className="mt-4 list-inside list-disc text-slate-200">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="btn-primary mt-6 inline-flex">Book Strategy Call</a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6 text-center">
              <item.icon className="mx-auto h-7 w-7 text-cyan-300" />
              <p className="mt-3 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <h2 className="section-title">Results & Case Studies</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["3x Revenue Growth", "2.4x Qualified Leads", "58% Faster Closures"].map((metric) => (
            <div key={metric} className="glass rounded-2xl p-6">
              <p className="text-sm text-slate-300">Client outcome</p>
              <h3 className="mt-2 text-2xl font-semibold">{metric}</h3>
              <p className="mt-3 text-sm text-slate-300">Before: fragmented systems → After: unified digital engine.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <h2 className="section-title">Portfolio Highlights</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 p-6">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-violet-500/0 transition group-hover:from-cyan-500/20 group-hover:to-violet-500/20" />
              <Laptop className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-6 text-xl">{item}</h3>
              <p className="mt-2 text-sm text-slate-300">Premium visuals, fast UX, and conversion-first structure.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <h2 className="section-title">What Clients Say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="glass rounded-2xl p-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
              <p className="mt-4 text-slate-200">“{item.review}”</p>
              <p className="mt-4 font-semibold">{item.name}</p>
              <p className="text-sm text-slate-300">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 text-center lg:px-8">
        <div className="glass rounded-3xl px-6 py-16">
          <h2 className="font-poppins text-4xl font-semibold">Ready to Scale Your Business?</h2>
          <a href="#contact" className="btn-primary mt-8 inline-flex text-lg">Get Started</a>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-slate-950/70 px-4 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-semibold">Tickete.Digital</h3>
            <p className="mt-3 text-sm text-slate-300">Digital solutions startup building premium growth systems for modern businesses.</p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#jobs">Jobs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>+1 (800) 123-4567</li>
              <li>hello@tickete.digital</li>
              <li>New York, USA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Social</h4>
            <div className="mt-3 flex gap-3 text-sm text-slate-300">
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">X</a>
            </div>
          </div>
        </div>
      </footer>

      {activeModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold capitalize">{activeModal.replace("-", " ")} Form</h3>
              <button onClick={() => setActiveModal(null)}><X className="h-5 w-5" /></button>
            </div>
            <form className="space-y-3">
              <input className="form-input" placeholder="Name" />
              {(activeModal === "contact" || activeModal === "admission") && (
                <input className="form-input" placeholder={activeModal === "contact" ? "Email" : "Phone"} />
              )}
              {activeModal === "counseling" && <input className="form-input" placeholder="Phone" />}
              <textarea
                className="form-input min-h-28"
                placeholder={
                  activeModal === "contact"
                    ? "Message"
                    : activeModal === "admission"
                      ? "Area of Interest"
                      : "Request"
                }
              />
              <button type="submit" className="btn-primary w-full justify-center">Submit</button>
            </form>
          </div>
        </div>
      )}

      <section className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 gap-px border-t border-white/10 bg-slate-900 sm:hidden">
        <a href="tel:+18001234567" className="flex items-center justify-center gap-2 px-2 py-3 text-xs"><PhoneCall className="h-4 w-4" />Call</a>
        <a href="https://wa.me/18001234567" className="flex items-center justify-center gap-2 px-2 py-3 text-xs"><MessageCircle className="h-4 w-4" />WhatsApp</a>
        <button onClick={() => setActiveModal("contact")} className="flex items-center justify-center gap-2 px-2 py-3 text-xs"><Users className="h-4 w-4" />Contact</button>
      </section>

      <section className="hidden">
        <div id="newsletter" />
        <div id="collaboration" />
        <div id="internship" />
        <div id="events" />
        <div id="jobs" />
        <div id="students" />
        <div id="blog" />
        <div id="franchise" />
        <Briefcase />
        <GraduationCap />
      </section>
    </main>
  );
}
