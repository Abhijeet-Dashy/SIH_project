
import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { SparkleIcon } from './icons/Icons';

type Feature = { id: string; title: string; description: string };

const FEATURES: Feature[] = [
  { id: 'f1', title: 'Self-sovereign identity', description: 'Students own their data with portable, privacy-preserving identity.' },
  { id: 'f2', title: 'Gamified, engaging UI', description: 'Delightful interactions that boost retention and daily habit-building.' },
  { id: 'f3', title: 'Anonymous peer support', description: 'Safe communities plus direct therapist connectivity when needed.' },
  { id: 'f4', title: 'Campus integration', description: 'Seamless setup without fetching academic data from ERP systems.' },
  { id: 'f5', title: 'AI crisis detection', description: 'Early detection and timely intervention powered by responsible AI.' },
];

const Organizations: React.FC = () => {
  const base = FEATURES;
  const repeated = useMemo(() => [...base, ...base, ...base], [base]);
  const baseLen = base.length;
  const startIndex = baseLen; // start at the middle block for seamless loop
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        const next = i + 1;
        // reset seamlessly when entering the last block
        if (next >= baseLen * 2 + 1) return baseLen + 1;
        return next;
      });
    }, 2500);
    return () => clearInterval(id);
  }, [baseLen]);

  const CARD_W = 288; // px width incl. gap (~w-72 + gap-4)
  const offset = (index - startIndex) * CARD_W;

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">Key features include</h2>
          <p className="text-brand-text-light mt-2">Modern, student-first foundations built for real outcomes.</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent" />
          <div className="overflow-hidden">
            <motion.div
              className="flex items-stretch gap-4 py-2 px-1"
              animate={{ x: -offset }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            >
              {repeated.map((f, i) => {
                const position = i - index;
                const isCenter = position === 0;
                const scale = isCenter ? 1.05 : Math.max(0.9, 1 - Math.abs(position) * 0.04);
                const opacity = isCenter ? 1 : Math.max(0.5, 1 - Math.abs(position) * 0.12);
                const rotate = isCenter ? 0 : Math.max(-2, Math.min(2, -position));
                return (
                  <motion.div
                    key={`${f.id}-${i}`}
                    className="w-72 shrink-0"
                    style={{ transformOrigin: 'center' }}
                    animate={{ scale, opacity, rotate }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="h-full group rounded-3xl p-6 bg-white ring-1 ring-slate-100 shadow-sm hover:shadow-xl transition-all">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-inner flex items-center justify-center ring-1 ring-slate-100">
                        <SparkleIcon className="w-7 h-7 text-sky-500" />
                      </div>
                      <h3 className="mt-4 text-xl font-semibold text-brand-text">{f.title}</h3>
                      <p className="mt-2 text-brand-text-light">{f.description}</p>
                      <div className="mt-4 h-1 w-0 bg-gradient-to-r from-sky-400 via-violet-400 to-rose-400 rounded-full transition-all duration-300 group-hover:w-16"></div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;