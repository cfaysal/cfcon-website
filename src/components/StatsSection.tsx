import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 6, suffix: '', label: 'Marketplace Apps' },
  { end: 12, suffix: '+', label: 'Scanner Modules' },
  { end: 19, suffix: '', label: 'Admin Tools' },
  { end: 0, suffix: '', label: 'External Servers' },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const steps = 40;
          const stepDuration = 50;
          let current = 0;

          const interval = setInterval(() => {
            current++;
            const progress = current / steps;
            const eased = 1 - Math.pow(1 - progress, 3);
            setCounts(stats.map((s) => Math.round(eased * s.end)));
            if (current >= steps) {
              clearInterval(interval);
              setCounts(stats.map((s) => s.end));
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <div key={stat.label} className="text-center">
          <div className="stat-number">{counts[i]}{stat.suffix}</div>
          <div className="text-text-light text-sm mt-2 tracking-wide uppercase">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
