'use client';

import { motion } from 'framer-motion';
import CodeShowcase from './CodeShowcase';

const Hero = () => {
  return (
    <section className="bg-black min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-teal-400 mb-4"
            >
              CREATIVE MIND, CREATIVE WORKS.
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-8"
            >
              We are digital agency.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button className="bg-transparent text-teal-400 border-2 border-teal-400 px-8 py-3 rounded hover:bg-teal-400 hover:text-black transition-all duration-300">
                GETTING STARTED
              </button>
            </motion.div>
          </div>

          {/* Right side - Code Showcase */}
          <div className="lg:w-1/2 h-[500px]">
            <CodeShowcase />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
