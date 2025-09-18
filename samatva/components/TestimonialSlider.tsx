import React, { useEffect, useRef, useState } from 'react';

type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
};

const TESTIMONIALS: Testimonial[] = [
  { id: 't1', quote: 'This helped me manage exam stress and stay focused.', author: 'Aarav', role: 'Engineering Student', avatar: 'https://i.pravatar.cc/100?img=11' },
  { id: 't2', quote: 'Beautiful design and genuinely calming sessions.', author: 'Ishita', role: 'Design Student', avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: 't3', quote: 'I sleep better and study better. Love the simplicity.', author: 'Rohit', role: 'Medical Student', avatar: 'https://i.pravatar.cc/100?img=15' },
];

const DOTS_INTERVAL_MS = 4000;

const TestimonialSlider: React.FC<{ items?: Testimonial[] }> = ({ items = TESTIMONIALS }) => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const run = () => setIndex((i) => (i + 1) % items.length);
    timerRef.current = window.setInterval(run, DOTS_INTERVAL_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [items.length]);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-14">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-text">What students say</h2>
      </div>
      <div className="max-w-3xl mx-auto">
        {items.map((t, i) => (
          <blockquote
            key={t.id}
            className={`rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-100 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0 absolute pointer-events-none'}`}
          >
            <div className="flex items-center gap-4">
              {t.avatar && <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full" />}
              <div>
                <p className="text-lg text-brand-text">“{t.quote}”</p>
                <div className="text-sm text-brand-text-light mt-2">{t.author}{t.role ? ` • ${t.role}` : ''}</div>
              </div>
            </div>
          </blockquote>
        ))}
        <div className="flex items-center justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === index ? 'bg-sky-500 w-6' : 'bg-slate-300 hover:bg-slate-400'}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;


