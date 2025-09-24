import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/bg.jpg';
import { getAISupport } from '../services/geminiService';
import { PaperclipIcon, MicIcon, ArrowRightIcon, LoadingSpinnerIcon } from './icons/Icons';

const placeholderQueries = [
  "I'm feeling overwhelmed with my classes...",
  "How can I deal with exam stress?",
  "I'm having trouble making friends...",
  "What are some good ways to relax?",
  "Feeling anxious about the future..."
];

const Hero: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [typedPlaceholder, setTypedPlaceholder] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for cycling placeholder queries
  useEffect(() => {
    const fullText = placeholderQueries[placeholderIndex];
    const typingSpeed = isDeleting ? 25 : 45; // ms per character
    const pauseAtFullMs = 900; // pause when fully typed
    const pauseAtEmptyMs = 250; // pause before typing next

    let timer: number | undefined;

    if (!isDeleting && typedPlaceholder.length < fullText.length) {
      timer = window.setTimeout(() => {
        setTypedPlaceholder(fullText.slice(0, typedPlaceholder.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && typedPlaceholder.length === fullText.length) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseAtFullMs);
    } else if (isDeleting && typedPlaceholder.length > 0) {
      timer = window.setTimeout(() => {
        setTypedPlaceholder(fullText.slice(0, typedPlaceholder.length - 1));
      }, typingSpeed);
    } else if (isDeleting && typedPlaceholder.length === 0) {
      timer = window.setTimeout(() => {
        setIsDeleting(false);
        setPlaceholderIndex((prev) => (prev + 1) % placeholderQueries.length);
      }, pauseAtEmptyMs);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [typedPlaceholder, isDeleting, placeholderIndex]);

  useEffect(() => {
    // This effect handles the typing animation for the AI response.
    if (response) {
      setDisplayedResponse('');
      let index = 0;
      const intervalId = setInterval(() => {
        setDisplayedResponse((prev) => prev + response.charAt(index));
        index++;
        if (index >= response.length) {
          clearInterval(intervalId);
        }
      }, 30); // Adjust typing speed here (in ms)

      return () => clearInterval(intervalId);
    }
  }, [response]);

  const handleSubmit = async () => {
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');
    setDisplayedResponse('');
    setError('');

    try {
      const aiResponse = await getAISupport(input);
      setResponse(aiResponse);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative h-[85vh] min-h-[500px] sm:min-h-[650px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
         backgroundImage: `url(${bgImage})`,
        }}
      ></div>
      
      {/* Gradient Overlay for blending */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-brand-surface to-transparent z-5"></div>

      {/* Foreground content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center px-3 sm:px-4 mt-8 sm:mt-12"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif text-2xl sm:text-5xl md:text-6xl font-bold text-brand-text px-2">Your Sanctuary For Student Well-being</h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl text-brand-text-light max-w-2xl px-2">
          You don't have to hide your struggles behind a smile. This is your safe space to share, heal, and grow.
        </p>

        <div className="mt-8 sm:mt-12 w-full max-w-2xl px-2">
          <motion.div className="relative bg-white/25 backdrop-blur-3xl border border-white/10 rounded-3xl sm:rounded-4xl p-2 sm:p-3 shadow-xl shadow-black/10 overflow-hidden" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            {/* Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none"></div>
            
            <div className="relative">
              <span className={`absolute top-2 sm:top-3 left-2 sm:left-3 text-sm sm:text-lg text-brand-text-light pointer-events-none ${input ? 'opacity-0' : 'opacity-100'}`}>
                {typedPlaceholder}
                <span className="inline-block align-middle w-[2px] h-[1.2em] bg-brand-text-light opacity-70 animate-pulse"></span>
              </span>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                className="w-full h-20 sm:h-28 bg-transparent text-brand-text placeholder-brand-text-light border-none focus:ring-0 focus:outline-none resize-none p-2 sm:p-3 text-sm sm:text-lg"
              />
              <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 flex items-center space-x-1 sm:space-x-2">
                <motion.button whileHover={{ scale: 1.1 }} className="p-1.5 sm:p-2 text-brand-text-light hover:text-brand-text transition-colors"><PaperclipIcon /></motion.button>
                <motion.button whileHover={{ scale: 1.1 }} className="p-1.5 sm:p-2 text-brand-text-light hover:text-brand-text transition-colors"><MicIcon /></motion.button>
                <motion.button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`bg-brand-text text-white rounded-full p-2 sm:p-3 hover:bg-opacity-90 disabled:bg-gray-500 transform active:scale-95 transition-all duration-200 ${isFocused && input ? 'animate-subtle-pulse' : ''}`}
                  whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? <LoadingSpinnerIcon /> : <ArrowRightIcon />}
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          { (isLoading || error || displayedResponse) && (
            <div className="relative mt-4 p-4 text-left text-brand-text bg-white/30 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-xl shadow-black/10 overflow-hidden">
                {/* Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent pointer-events-none"></div>

                <div className="relative">
                  {isLoading && <p className="animate-pulse">Thinking...</p>}
                  {error && <p className="text-red-700">{error}</p>}
                  {displayedResponse && <p className="leading-relaxed">{displayedResponse}</p>}
                </div>
            </div>
          )}

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;