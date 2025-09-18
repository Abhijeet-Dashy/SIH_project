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
    className={`relative flex-1 min-w-[280px] max-w-sm ${color} p-8 rounded-4xl shadow-sm ${glowClassMap[glowColor]}`}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: parseInt((delay || '0').replace('ms',''))/1000 }}
    whileHover={{ y: -6, boxShadow: '0 12px 24px rgba(15,23,42,0.08)' }}
  >
    {hasStreak && (
      <div className="absolute top-5 right-5 bg-white/30 backdrop-blur-sm font-bold text-sm py-1.5 px-3 rounded-full flex items-center gap-1.5">
        <FlameIcon className="w-4 h-4 text-orange-500" />
        <span className="text-yellow-900">3 Day Streak!</span>
      </div>
    )}
    <h3 className={`text-2xl font-bold ${textColor}`}>{title}</h3>
    <p className={`mt-2 ${textColor} opacity-80`}>{description}</p>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-brand-surface">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-slate-800 mb-16 font-serif"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          The mental health app for every moment
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          <FeatureCard 
            title="Mood Check-ins"
            description='"Simple, daily self-awareness"'
            color="bg-sky-50"
            textColor="text-slate-800"
            glowColor="blue-500"
            hasStreak={true}
            delay="0ms"
          />
          <FeatureCard 
            title="Peer Support"
            description='"Talk anonymously, no judgment"'
            color="bg-rose-50"
            textColor="text-slate-800"
            glowColor="pink-400"
            delay="100ms"
          />
          <FeatureCard 
            title="Resources"
            description='"Tips, guides, coping strategies"'
            color="bg-amber-50"
            textColor="text-slate-800"
            glowColor="yellow-500"
            delay="200ms"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;