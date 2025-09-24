import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, AppleAwardIcon, HeadphoneAwardIcon } from './icons/Icons';

const StatItem: React.FC<{ value?: string; label: string; children?: React.ReactNode }> = ({ value, label, children }) => (
    <div className="text-center">
        {children}
        {value ? <p className="text-3xl md:text-4xl font-bold mt-2">{value}</p> : null}
        <p className="text-sm md:text-base text-white/80">{label}</p>
    </div>
);

const SocialProof: React.FC = () => {
  return (
    <section 
        className="relative py-12 sm:py-24 px-3 sm:px-4 text-slate-800 text-center overflow-hidden bg-gradient-to-b from-sky-200 to-sky-400" 
    >
        <div className="relative z-10 container mx-auto flex flex-col items-center">
            {/* Floating avatars */}
            <img src="https://i.pravatar.cc/150?img=1" alt="User avatar" className="absolute top-10 left-1/4 w-16 h-16 rounded-full border-2 border-white/70 hidden md:block animate-float" />
            <img src="https://i.pravatar.cc/150?img=2" alt="User avatar" className="absolute top-2 right-1/4 w-12 h-12 rounded-full border-2 border-white/70 hidden md:block animate-float-slow" />
            <img src="https://i.pravatar.cc/150?img=4" alt="User avatar" className="absolute bottom-1/3 right-1/4 w-14 h-14 rounded-full border-2 border-white/70 hidden lg:block animate-float" />

            <motion.div className="bg-white/70 backdrop-blur-lg py-1.5 sm:py-2 px-4 sm:px-6 rounded-full inline-flex items-center gap-1.5 sm:gap-2 text-slate-700" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }}>
                <div className="flex -space-x-1 sm:-space-x-2">
                    <span className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-orange-400 block border-2 border-white/50"></span>
                    <span className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-purple-400 block border-2 border-white/50"></span>
                    <span className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-blue-400 block border-2 border-white/50"></span>
                </div>
                <span className="font-semibold text-xs sm:text-sm">Trusted by students worldwide</span>
            </motion.div>

            <motion.h1 className="text-2xl sm:text-5xl md:text-7xl font-bold mt-4 sm:mt-6 max-w-4xl font-serif px-2" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6 }}>Join the millions who use Samatva every day</motion.h1>
            
            <motion.button className="mt-6 sm:mt-8 bg-slate-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-10 rounded-full hover:bg-slate-700 transition-all duration-300 text-base sm:text-lg" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                Try for free
            </motion.button>

            <div className="w-full border-t border-slate-200 mt-12 sm:mt-20"></div>

            
        </div>
    </section>
  );
};

export default SocialProof;