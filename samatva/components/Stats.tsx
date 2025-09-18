import React, { useEffect, useRef, useState } from 'react';

type Stat = {
  id: string;
  label: string;
  value: number;
  suffix?: string;
};

const STATS: Stat[] = [
  { id: 's1', label: 'Users supported', value: 10000, suffix: '+' },
  { id: 's2', label: 'Guided minutes', value: 250000, suffix: '+' },
  { id: 's3', label: 'Campuses reached', value: 120, suffix: '+' },
];

const useCountUp = (end: number, durationMs = 1200) => {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    let rafId = 0;
    const step = (now: number) => {
      if (startRef.current == null) startRef.current = now;
      const elapsed = now - startRef.current;
      const t = Math.min(1, elapsed / durationMs);
      setValue(Math.floor(end * (1 - Math.pow(1 - t, 3))));
      if (t < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, durationMs]);

  return value;
};

const Stats: React.FC<{ items?: Stat[] }> = ({ items = STATS }) => {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-14">
      <div className="rounded-3xl bg-gradient-to-r from-sky-50 to-violet-50 ring-1 ring-slate-100 p-8 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {items.map((s) => {
            const val = useCountUp(s.value);
            return (
              <div key={s.id} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
                  {val.toLocaleString()}{s.suffix ?? ''}
                </div>
                <div className="text-brand-text-light mt-2">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;


