import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 6, suffix: '', label: 'Marketplace Apps' },
  { end: 12, suffix: '+', label: 'Scanner Modules' },
  { end: 19, suffix: '', label: 'Admin Tools' },
  { end: 0, suffix: '', label: 'External Servers' },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (prefersReducedMotion) {
      setCounts(stats.map((s) => s.end));
      return;
    }

    const duration = 1800;
    let start: number | null = null;
    let rafId: number;

    const tick = (now: number) => {
      if (start === null) start = now;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((s) => Math.round(eased * s.end)));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={stat.label} className="text-center">
          <div className="stat-number">{counts[i]}{stat.suffix}</div>
          <div className="text-text-light text-sm mt-2 tracking-wide uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
