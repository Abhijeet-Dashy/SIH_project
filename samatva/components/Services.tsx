import React from 'react';
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
        
        <motion.div
          className="w-full max-w-6xl h-[550px] bg-slate-200 rounded-4xl bg-cover bg-center shadow-md"
          style={{backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1820&auto=format&fit=crop')"}}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </section>
  );
};

export default Services;