'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconChartBar, IconPencil, IconUsers, IconWorld, IconBookmark, IconChartPie } from '@tabler/icons-react';
import { Icon } from '@tabler/icons-react';

interface Service {
  icon: Icon;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const services: Service[] = [
  {
    icon: IconChartBar,
    title: 'Digital Strategy',
    description: 'Transform your business with data-driven digital strategies that deliver measurable results.'
  },
  {
    icon: IconPencil,
    title: 'UX Designs',
    description: 'Create intuitive and engaging user experiences that keep your customers coming back.'
  },
  {
    icon: IconUsers,
    title: 'UI Designs',
    description: 'Beautiful, responsive interfaces that work seamlessly across all devices.'
  },
  {
    icon: IconWorld,
    title: 'Social Media',
    description: 'Build and engage your community with strategic social media management.'
  },
  {
    icon: IconBookmark,
    title: 'Design Concept',
    description: 'Innovative design concepts that set your brand apart from the competition.'
  },
  {
    icon: IconChartPie,
    title: 'Media Pairing',
    description: "Strategic media pairing to maximize your content's impact and reach."
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-8 bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-teal-400 transition-all duration-300"
    >
      <service.icon className="text-teal-400 w-12 h-12 mb-4" />
      <h3 className="text-white text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-400">{service.description}</p>
    </motion.div>
  );
};

const ServiceCards: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Services.</h2>
          <p className="text-teal-400">OUR SERVICES FOR CLIENTS</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
