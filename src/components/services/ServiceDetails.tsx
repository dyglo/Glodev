'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { services } from '@/data/services';

const ServiceDetails = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Service Details
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Navigation */}
          <div className="space-y-4">
            {services.coreServices.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(index)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gradient-to-r from-teal-500 to-teal-700 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-semibold">{service.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Service Content */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-2xl p-8 h-full"
            >
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl">
                  {services.coreServices[activeService].icon}
                </span>
                <h3 className="text-3xl font-bold text-white">
                  {services.coreServices[activeService].title}
                </h3>
              </div>

              <p className="text-gray-300 mb-8">
                {services.coreServices[activeService].description}
              </p>

              <div className="space-y-8">
                {/* Features */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {services.coreServices[activeService].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
                  >
                    Get Started with {services.coreServices[activeService].title}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
