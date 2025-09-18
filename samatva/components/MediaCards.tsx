import React, { useEffect, useRef } from 'react';

type MediaItem = {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
};

const SAMPLE_ITEMS: MediaItem[] = [
  { id: '1', title: 'Focus Breath', subtitle: '3 min • Calming', imageUrl: 'https://images.unsplash.com/photo-1517959105821-eaf2591984dd?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Morning Boost', subtitle: '5 min • Energy', imageUrl: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Study Flow', subtitle: '10 min • Focus', imageUrl: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Deep Sleep', subtitle: '8 min • Sleep', imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop' },
  { id: '5', title: 'Anxiety Relief', subtitle: '4 min • Soothing', imageUrl: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=800&auto=format&fit=crop' },
  { id: '6', title: 'Confidence', subtitle: '6 min • Uplift', imageUrl: 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?q=80&w=800&auto=format&fit=crop' },
];

const PlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M8 5.14v13.72c0 .79.86 1.27 1.54.85l10.19-6.86a1 1 0 0 0 0-1.7L9.54 4.29C8.86 3.87 8 4.35 8 5.14Z"/>
  </svg>
);

const MediaCards: React.FC<{ items?: MediaItem[] }> = ({ items = SAMPLE_ITEMS }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId = 0;
    let last = performance.now();
    const speedPxPerSec = 60; // smooth left-to-right auto-scroll

    const tick = (now: number) => {
      const dt = Math.min(100, now - last) / 1000; // clamp dt
      last = now;

      if (el.scrollWidth > el.clientWidth) {
        el.scrollLeft += speedPxPerSec * dt;
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0; // loop back to start
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-text">Guided Sessions</h2>
          <p className="text-brand-text-light">Tap play and settle in. Slides left ➜ right.</p>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="relative overflow-x-auto overflow-y-visible no-scrollbar scroll-smooth"
      >
        <div className="flex gap-4 md:gap-6 pr-4">
          {items.map(item => (
            <article
              key={item.id}
              className="relative min-w-[220px] max-w-[220px] md:min-w-[260px] md:max-w-[260px] bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-[140px] md:h-[160px] rounded-2xl overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  type="button"
                  aria-label={`Play ${item.title}`}
                  className="absolute inset-0 m-auto w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-white bg-black/50 hover:bg-black/60 rounded-full backdrop-blur-sm transition-colors"
                  onClick={() => {
                    // Placeholder for play action. Integrate audio/video here if needed.
                    console.log('Play clicked:', item.title);
                  }}
                >
                  <PlayIcon className="w-6 h-6 md:w-7 md:h-7" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-brand-text leading-tight">{item.title}</h3>
                {item.subtitle && (
                  <p className="text-sm text-brand-text-light mt-1">{item.subtitle}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaCards;


