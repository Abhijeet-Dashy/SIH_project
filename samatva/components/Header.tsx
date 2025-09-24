import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // icons

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.a 
    href={href} 
    className="block px-4 py-2 text-brand-text-light hover:text-brand-text transition-colors duration-300"
    whileHover={{ x: 4 }}
    whileTap={{ scale: 0.98 }}
  >
    {children}
  </motion.a>
);

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <motion.div
        className="relative w-full bg-white/25 backdrop-blur-2xl rounded-full border border-white/30 shadow-xl flex justify-between items-center px-3 sm:px-6 py-2 overflow-hidden"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Reflection element */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none"></div>

        {/* Logo */}
        <div className="relative z-10 font-bold text-lg sm:text-2xl text-brand-text font-serif">
          Samatva
        </div>

        {/* Desktop nav */}
        <nav className="relative z-10 hidden md:flex items-center space-x-2">
          <NavLink href="#">For You</NavLink>
          <NavLink href="#">Our Plans</NavLink>
          <NavLink href="#">Resources</NavLink>
          <NavLink href="#">About</NavLink>
        </nav>

        <div className="flex items-center space-x-2 relative z-10">
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Join button */}
          <motion.button 
            whileHover={{ scale: 1.06 }} 
            whileTap={{ scale: 0.98 }} 
            className="bg-brand-primary text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-6 rounded-full hover:bg-opacity-90 hover:bg-blue-500 transition-all duration-300 text-sm sm:text-base"
          >
            Join Now
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile dropdown */}
      {open && (
        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:hidden mt-2 bg-white/90 backdrop-blur-lg rounded-xl shadow-lg flex flex-col items-start p-4 space-y-2"
        >
          <NavLink href="#">For You</NavLink>
          <NavLink href="#">Our Plans</NavLink>
          <NavLink href="#">Resources</NavLink>
          <NavLink href="#">About</NavLink>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
