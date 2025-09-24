import React, { useEffect, useRef, useState } from 'react';
import animationVideo from './assets/animation.mp4';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Organizations from './components/Organizations';
import SocialProof from './components/SocialProof';

const App: React.FC = () => {
  // Check if device is mobile
  const isMobile = window.innerWidth < 768; // md breakpoint
  const [showSplash, setShowSplash] = useState(!isMobile); // Skip splash on mobile
  const [isFadingSplash, setIsFadingSplash] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const splashStartRef = useRef<number>(performance.now());

  const dismissSplash = () => {
    if (!showSplash || isFadingSplash) return;
    setIsFadingSplash(true);
    setTimeout(() => setShowSplash(false), 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            (entry.target as HTMLElement).style.animationDelay = `${index * 100}ms`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Disable body scroll while splash is visible
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);

  // Fallback timeout in case the video cannot play (desktop only)
  useEffect(() => {
    if (!showSplash || isMobile) return;
    const timeoutId = setTimeout(() => {
      dismissSplash();
    }, 5000); // backup dismiss at ~5s
    return () => clearTimeout(timeoutId);
  }, [showSplash, isMobile]);

  return (
    <div className="bg-brand-surface font-sans text-brand-text">
      {showSplash && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${
            isFadingSplash ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <video
            src={animationVideo}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            ref={videoRef}
            onLoadedMetadata={() => {
              const el = videoRef.current;
              if (el && Number.isFinite(el.duration) && el.duration > 0) {
                const targetSeconds = 4;
                const needsSpeedUp = el.duration > targetSeconds;
                const desiredRate = needsSpeedUp ? el.duration / targetSeconds : 1;
                el.playbackRate = Math.min(3, Math.max(0.5, desiredRate));
              }
            }}
            onEnded={() => {
              // Guarantee splash lasts exactly 4s
              const minSplashTime = 4000; // ms
              const elapsed = performance.now() - splashStartRef.current;
              const remaining = Math.max(0, minSplashTime - elapsed);
              setTimeout(() => dismissSplash(), remaining);
            }}
            onError={() => {
              dismissSplash();
            }}
          />
        </div>
      )}
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Testimonials />
        <Organizations />
        <SocialProof />
      </main>
    </div>
  );
};

export default App;
