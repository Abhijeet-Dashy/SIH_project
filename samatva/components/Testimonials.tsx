import React from 'react';
import { motion } from 'framer-motion';
import { HappyFaceIcon, ContentFaceIcon, CalmFaceIcon } from './icons/Icons';

const TestimonialCard: React.FC<{ quote: string; author: string, delay: string }> = ({ quote, author, delay }) => (
  <motion.div
    className="bg-slate-100 p-10 rounded-4xl border border-slate-200 w-full md:w-1/3 max-w-sm flex-1 flex flex-col"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: parseInt(delay.replace('ms',''))/1000 }}
    whileHover={{ y: -6 }}
  >
    <p className="text-slate-700 text-lg flex-grow">"{quote}"</p>
    <p className="mt-6 text-base text-slate-500 font-medium">{author}</p>
  </motion.div>
);

const DecorativeIcon: React.FC<{children: React.ReactNode; className?: string}> = ({ children, className }) => (
  <div className={`absolute transform transition-transform duration-500 hover:rotate-[-12deg] hover:scale-110 ${className}`}>
    {children}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div className="absolute top-10 left-1/4" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center text-sky-400">
            <CalmFaceIcon className="w-12 h-12" />
          </div>
      </motion.div>
      <motion.span className="absolute top-8 right-1/4 text-amber-300 text-4xl" initial={{ opacity: 0, y: -8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>✨</motion.span>
      <motion.div className="absolute top-1/4 left-1/3 -translate-y-1/2" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center text-rose-400">
              <HappyFaceIcon className="w-16 h-16"/>
          </div>
      </motion.div>
      <motion.div className="absolute top-10 right-[30%]" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}>
          <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-violet-400">
              <ContentFaceIcon className="w-10 h-10"/>
          </div>
      </motion.div>
      <motion.div className="absolute top-1/3 right-1/4" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-400">
               <CalmFaceIcon className="w-8 h-8"/>
          </div>
      </motion.div>
      <motion.span className="absolute top-0 left-1/3 text-amber-300 text-2xl" initial={{ opacity: 0, y: -6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }}>✨</motion.span>

      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-slate-800 mb-24 relative z-10 font-serif"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
        >
          Members are enjoying happier and healthier lives
        </motion.h2>
        <motion.div className="flex flex-wrap justify-center gap-12 relative z-10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
          <TestimonialCard
            quote="I appreciate the consistent reminders to be kind and patient with myself as I learn and practice daily habits that are helping me find a calmer daily space."
            author="Member on forming more helpful habits"
            delay="100ms"
          />
          <TestimonialCard
            quote="Samatva helped me begin the process of stepping back from toxic thinking and being a part of something bigger than my own personal grievances."
            author="Member on learning to think in more helpful ways"
            delay="200ms"
          />
          <TestimonialCard
            quote="The strategies in the courses allow me to work on a part of myself that I am struggling with. Samatva replaced the relationship I have with myself."
            author="Member on working through their feelings"
            delay="300ms"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;