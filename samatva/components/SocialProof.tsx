import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, AppleAwardIcon, HeadphoneAwardIcon } from './icons/Icons';

const StatItem: React.FC<{ value?: string; label: string; children?: React.ReactNode }> = ({ value, label, children }) => (
    <div className="text-center">
        {children}
        <p className="text-3xl md:text-4xl font-bold mt-2">{value}</p>
        <p className="text-sm md:text-base text-white/80">{label}</p>
    </div>
);

const SocialProof: React.FC = () => {
  return (
    <section 
        className="relative py-24 px-4 text-slate-800 text-center overflow-hidden bg-gradient-to-b from-sky-50 to-sky-100" 
    >
        <div className="relative z-10 container mx-auto flex flex-col items-center">
            {/* Floating avatars */}
            <img src="https://i.pravatar.cc/150?img=1" alt="User avatar" className="absolute top-10 left-1/4 w-16 h-16 rounded-full border-2 border-white/70 hidden md:block animate-float" />
            <img src="https://i.pravatar.cc/150?img=2" alt="User avatar" className="absolute top-2 right-1/4 w-12 h-12 rounded-full border-2 border-white/70 hidden md:block animate-float-slow" />
            <img src="https://i.pravatar.cc/150?img=3" alt="User avatar" className="absolute bottom-1/2 left-1/3 w-20 h-20 rounded-full border-2 border-white/70 hidden lg:block animate-float-slower" />
            <img src="https://i.pravatar.cc/150?img=4" alt="User avatar" className="absolute bottom-1/3 right-1/4 w-14 h-14 rounded-full border-2 border-white/70 hidden lg:block animate-float" />

            <motion.div className="bg-white/70 backdrop-blur-lg py-2 px-6 rounded-full inline-flex items-center gap-2 text-slate-700" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.05 }}>
                <div className="flex -space-x-2">
                    <span className="w-6 h-6 rounded-full bg-orange-400 block border-2 border-white/50"></span>
                    <span className="w-6 h-6 rounded-full bg-purple-400 block border-2 border-white/50"></span>
                    <span className="w-6 h-6 rounded-full bg-blue-400 block border-2 border-white/50"></span>
                </div>
                <span className="font-semibold">611.9k students supported</span>
            </motion.div>

            <motion.h1 className="text-5xl md:text-7xl font-bold mt-6 max-w-4xl font-serif" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6 }}>Join the millions who use Endel every day</motion.h1>
            
            <motion.button className="mt-8 bg-slate-800 text-white font-semibold py-4 px-10 rounded-full hover:bg-slate-700 transition-all duration-300 text-lg" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
                Try for free
            </motion.button>

            <div className="w-full border-t border-slate-200 mt-20"></div>

            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full max-w-5xl" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}>
                <StatItem value="4.9" label="App Store Rating">
                    <motion.div className="flex justify-center gap-1 text-amber-300 h-8 items-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                    </motion.div>
                </StatItem>
                 <StatItem value="105M+" label="Downloads" />
                 <StatItem value="450M+" label="Minutes of support" />
                 <StatItem label="Selected Awards">
                     <motion.div className="flex justify-center items-center gap-4 text-slate-600 h-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <HeadphoneAwardIcon className="h-8 w-8" />
                        <AppleAwardIcon className="h-8 w-8" />
                     </motion.div>
                 </StatItem>
            </motion.div>
        </div>
    </section>
  );
};

export default SocialProof;