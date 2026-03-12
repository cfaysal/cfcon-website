import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: "CFCON transformed our Atlassian setup. Their deep technical expertise and hands-on approach made a complex migration feel seamless.",
    name: "Project Lead",
    company: "Enterprise Client",
    role: "IT Operations",
  },
  {
    quote: "The Scalpel app alone saved us weeks of manual cleanup work. Having a consultant who also builds the tools — that's a rare combination.",
    name: "Atlassian Admin",
    company: "Marketplace Customer",
    role: "System Administration",
  },
  {
    quote: "Reliable, fast, and always available when it counts. CFCON has been our go-to partner for everything Atlassian.",
    name: "Head of IT",
    company: "Healthcare Organization",
    role: "IT Management",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="relative min-h-[200px] flex items-center justify-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
              i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-primary/30 mb-6">
              <path d="M11 7H7a4 4 0 00-4 4v0a2 2 0 002 2h2a2 2 0 002-2v0a2 2 0 00-2-2H5a4 4 0 014-4zm10 0h-4a4 4 0 00-4 4v0a2 2 0 002 2h2a2 2 0 002-2v0a2 2 0 00-2-2h-2a4 4 0 014-4z" />
            </svg>
            <blockquote className="text-lg md:text-xl text-text leading-relaxed mb-6 italic">
              "{t.quote}"
            </blockquote>
            <div>
              <p className="font-semibold text-text">{t.name}</p>
              <p className="text-sm text-text-light">{t.role} · {t.company}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === active ? 'bg-primary w-6' : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
