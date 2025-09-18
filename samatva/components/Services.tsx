import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServiceTag: React.FC<{ children: React.ReactNode; active?: boolean; secondary?: boolean }> = ({ children, active, secondary }) => {
  let baseClasses = "font-semibold py-3 px-8 rounded-3xl transition-all duration-300 cursor-pointer flex items-center gap-2.5 transform hover:-translate-y-1";
  if (active) {
    baseClasses += " bg-slate-800 text-white shadow-sm";
  } else if (secondary) {
    baseClasses += " bg-rose-50 text-rose-900 hover:bg-rose-100 shadow-sm";
  } else {
    baseClasses += " bg-slate-100 text-slate-600 hover:bg-slate-200";
  }
  
  return <motion.button whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: 0.98 }} className={baseClasses}>{children}</motion.button>;
};


const Services: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          <ServiceTag active>
            <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></span>
            Online Therapy
          </ServiceTag>
          <ServiceTag>Guided Meditations</ServiceTag>
          <ServiceTag>AI Guidance</ServiceTag>
          <ServiceTag secondary>
            Track Mood Now &rarr;
          </ServiceTag>
        </motion.div>
        
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Find calm', note: 'Quick resets for tense moments', icon: '💛' },
            { title: 'Sleep better', note: 'Wind-down guides for deep rest', icon: '🌙' },
            { title: 'Ease worries', note: 'Grounding tools for uneasy days', icon: '🌀' },
            { title: 'Clear your mind', note: 'Journaling and reflection prompts', icon: '🙂' },
            { title: 'Mindful practice', note: 'Breath and focus micro-sessions', icon: '🟠' },
            { title: 'Begin counseling', note: 'Match with licensed support', icon: '💬' },
          ].map((item, idx) => (
            <HoverCard key={item.title} idx={idx} title={item.title} note={item.note} icon={item.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

// Local component: gamified hover card with framer-motion
const HoverCard: React.FC<{ idx: number; title: string; note: string; icon: string }> = ({ idx, title, note, icon }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      className="group relative w-full text-left rounded-4xl bg-white border-2 border-slate-300 hover:border-slate-400 p-8 shadow-md hover:shadow-2xl flex items-center justify-between overflow-hidden"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.05, duration: 0.4 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(2,6,23,0.12)' }}
    >
      {/* Glow ring */}
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-3xl"
        animate={{ boxShadow: hovered ? '0 0 0 2px rgba(56,189,248,0.4), 0 0 40px rgba(99,102,241,0.25)' : '0 0 0 0 rgba(0,0,0,0)' }}
        transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      />

      <div>
        <div className="text-lg md:text-xl font-semibold text-brand-text">{title}</div>
        <div className="mt-1 text-brand-text-light text-sm">{note}</div>
      </div>

      <div className="relative flex items-center gap-3">
        {/* Emoji bounce/tilt */}
        <motion.span
          className="text-2xl md:text-3xl select-none"
          aria-hidden
          animate={hovered ? { rotate: [-5, 5, -3, 0], y: [-2, -6, -2, 0] } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.span>
        {/* Arrow pulse */}
        <motion.span
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-900 group-hover:text-white"
          animate={hovered ? { scale: [1, 1.08, 1], boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 10px 18px rgba(2,6,23,0.18)', '0 0 0 rgba(0,0,0,0)'] } : { scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' }}
          transition={{ duration: 0.5 }}
        >
          →
        </motion.span>
      </div>
    </motion.button>
  );
};