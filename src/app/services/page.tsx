'use client';

import { motion } from 'framer-motion';
import { IconArrowUp } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';
import type { TechStackItem } from '@/types/services';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const listener = () => setMatches(media.matches);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  }, [query]);

  return isClient ? matches : false;
};

const ServicesGrid = ({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) => {
  const getGridCols = () => {
    if (isMobile) return 'grid-cols-1';
    if (isTablet) return 'grid-cols-2';
    return 'grid-cols-3';
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Core Services
        </motion.h2>
        
        <div className={`grid ${getGridCols()} gap-8`}>
          {services.coreServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col h-full">
                <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = ({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) => {
  const getGridCols = () => {
    if (isMobile) return 'grid-cols-2';
    if (isTablet) return 'grid-cols-3';
    return 'grid-cols-4';
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Tech Stack
        </motion.h2>

        <div className={`grid ${getGridCols()} gap-6 md:gap-8`}>
          {services.techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black p-4 md:p-6 rounded-xl text-center hover:bg-gray-800 transition-colors"
            >
              <div className="relative w-12 h-12 md:w-16 md:h-16 mx-auto mb-4">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm md:text-base">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto"
          >
            Transforming ideas into digital reality with cutting-edge solutions
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesGrid isMobile={isMobile} isTablet={isTablet} />

      {/* Tech Stack */}
      <TechStack isMobile={isMobile} isTablet={isTablet} />

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 bg-teal-500 p-3 rounded-full shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <IconArrowUp size={24} />
      </motion.button>

      <Footer />
    </main>
  );
}
