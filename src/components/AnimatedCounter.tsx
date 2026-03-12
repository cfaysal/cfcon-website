import { useEffect, useState, useCallback } from 'react';

interface Props {
  end: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ end: endProp, suffix = '', label }: Props) {
  const end = Number(endProp);
  const [count, setCount] = useState(0);

  const animate = useCallback(() => {
    if (end === 0) return;
    const steps = 40;
    const stepDuration = 50;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (current >= steps) {
        clearInterval(interval);
        setCount(end);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [end]);

  useEffect(() => {
    const cleanup = animate();
    return cleanup;
  }, [animate]);

  return (
    <div className="text-center">
      <div className="stat-number">{count}{suffix}</div>
      <div className="text-text-light text-sm mt-2 tracking-wide uppercase">{label}</div>
    </div>
  );
}
