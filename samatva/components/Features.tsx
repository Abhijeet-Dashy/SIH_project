import React from 'react';
import { motion } from 'framer-motion';
import { FlameIcon } from './icons/Icons';

// This map ensures Tailwind's JIT compiler can find the full class names.
const glowClassMap: Record<string, string> = {
  'blue-500': 'hover:shadow-blue-500/40',
  'pink-400': 'hover:shadow-pink-400/40',
  'yellow-500': 'hover:shadow-yellow-500/40',
};

const FeatureCard: React.FC<{ title: string; description: string; color: string; textColor: string; glowColor: keyof typeof glowClassMap; hasStreak?: boolean; delay?: string; }> = ({ title, description, color, textColor, glowColor, hasStreak, delay }) => (
  <motion.div
    className={`relative flex-1 min-w-[280px] max-w-sm ${color} p-6 sm:p-10 rounded-3xl sm:rounded-4xl border-2 border-slate-300 hover:border-slate-400 shadow-md hover:shadow-2xl ${glowClassMap[glowColor]}`}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: parseInt((delay || '0').replace('ms',''))/1000 }}
    whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(15,23,42,0.08)' }}
  >
    {hasStreak && (
      <div className="absolute top-3 sm:top-5 right-3 sm:right-5 bg-white/70 backdrop-blur-sm font-bold text-xs sm:text-sm py-1 sm:py-1.5 px-2 sm:px-3 rounded-full flex items-center gap-1 sm:gap-1.5">
        <FlameIcon className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500" />
        <span className="text-yellow-900">3 Day Streak!</span>
      </div>
    )}
    <h3 className={`text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight ${textColor}`}>{title}</h3>
    <p className={`mt-2 sm:mt-3 text-sm sm:text-base md:text-lg ${textColor}`}>{description}</p>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section className="py-12 sm:py-24 bg-brand-surface">
      <div className="container mx-auto px-3 sm:px-6 text-center">
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-8 sm:mb-16 font-serif tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          The mental health app for every moment
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12">
          <FeatureCard 
            title="Mood Check-ins"
            description='"Simple, daily self-awareness"'
            color="bg-white"
            textColor="text-slate-900"
            glowColor="blue-500"
            hasStreak={false}
            delay="0ms"
          />
          <FeatureCard 
            title="Peer Support"
            description='"Talk anonymously, no judgment"'
            color="bg-white"
            textColor="text-slate-900"
            glowColor="pink-400"
            delay="100ms"
          />
          <FeatureCard 
            title="Resources"
            description='"Tips, guides, coping strategies"'
            color="bg-white"
            textColor="text-slate-900"
            glowColor="yellow-500"
            delay="200ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;