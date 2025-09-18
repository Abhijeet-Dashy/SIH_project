import React from 'react';
import { motion } from 'framer-motion';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <motion.a 
        href={href} 
        className="relative px-4 py-2 text-brand-text-light hover:text-brand-text transition-colors duration-300 group"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
    >
        {children}
        <span className="absolute inset-0 bg-white/20 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out -z-10"></span>
    </motion.a>
);


const Header: React.FC = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <motion.div
        className="relative w-full bg-white/25 backdrop-blur-2xl rounded-full border border-white/30 shadow-xl flex justify-between items-center px-6 py-2 overflow-hidden"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Reflection element */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 font-bold text-2xl text-brand-text font-serif">Endel</div>
        <nav className="relative z-10 hidden md:flex items-center space-x-2">
          <NavLink href="#">For You</NavLink>
          <NavLink href="#">Our Plans</NavLink>
          <NavLink href="#">Resources</NavLink>
          <NavLink href="#">About</NavLink>
        </nav>
        <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} className="relative z-10 bg-brand-primary text-white font-semibold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300">
          Join Now
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;