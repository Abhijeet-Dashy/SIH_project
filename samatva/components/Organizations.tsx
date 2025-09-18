
import React from 'react';
import { motion } from 'framer-motion';
import { SparkleIcon, CloudIcon } from './icons/Icons';

const PartnerLogo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-slate-500 font-semibold text-lg">{children}</span>
);

const Organizations: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-slate-50">
        <motion.div
            className="container mx-auto bg-sky-50 text-slate-800 rounded-4xl p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
        >
            <div className="absolute -top-10 -left-10 opacity-30">
                <SparkleIcon className="w-24 h-24 text-sky-200" />
            </div>
            <div className="absolute top-10 right-20 opacity-80">
                <SparkleIcon className="w-12 h-12 text-amber-300" />
            </div>
             <div className="absolute -bottom-20 right-10">
                <CloudIcon className="w-64 h-64 text-sky-200" />
            </div>
            
            <div className="flex flex-wrap justify-around items-center opacity-70 mb-12 space-x-4 space-y-2">
                <PartnerLogo>Booking.com</PartnerLogo>
                <PartnerLogo>SEPHORA</PartnerLogo>
                <PartnerLogo>Western Union</PartnerLogo>
                <PartnerLogo>BOSTON MEDICAL</PartnerLogo>
                <PartnerLogo>BAIN & COM</PartnerLogo>
                <PartnerLogo>VERTEX</PartnerLogo>
                <PartnerLogo>HSBC</PartnerLogo>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                <div className="md:w-1/2">
                    <motion.h2 className="text-4xl md:text-5xl font-bold font-serif" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>Over 4,000 leading organizations choose Endel</motion.h2>
                    <motion.p className="mt-4 text-lg text-slate-600" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}>Support your team today with mindfulness, coaching, EAP, therapy, and psychiatry.</motion.p>
                    <div className="flex gap-4 mt-8">
                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="bg-slate-800 text-white font-semibold py-3 px-6 rounded-full hover:bg-slate-700 transition-all duration-300">Request a demo</motion.button>
                        <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} className="border border-slate-300 text-slate-700 font-semibold py-3 px-6 rounded-full hover:bg-white transition-all duration-300">Learn more</motion.button>
                    </div>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
                   <img src="https://picsum.photos/seed/person1/300/300" alt="Person 1" className="rounded-3xl object-cover aspect-square col-start-1 row-start-1" />
                   <img src="https://picsum.photos/seed/person2/300/300" alt="Person 2" className="rounded-3xl object-cover aspect-square col-start-2 row-start-1" />
                   <img src="https://picsum.photos/seed/person3/400/400" alt="Person 3" className="rounded-3xl object-cover h-full w-full col-span-2 row-start-2" />
                </div>
            </div>
        </motion.div>
    </section>
  );
};

export default Organizations;