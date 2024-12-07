'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  IconBulb,
  IconChartDots,
  IconPencil,
  IconCode,
  IconTestPipe,
  IconRocket
} from '@tabler/icons-react';

type IconComponent = typeof IconBulb;

interface Step {
  Icon: IconComponent;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    Icon: IconBulb,
    title: "Discovery",
    description: "Understanding your business goals, target audience, and project requirements",
    color: "from-teal-400/20 to-teal-400/0"
  },
  {
    Icon: IconChartDots,
    title: "Planning",
    description: "Creating detailed project roadmap, timeline, and resource allocation",
    color: "from-teal-400/30 to-teal-400/0"
  },
  {
    Icon: IconPencil,
    title: "Design",
    description: "Crafting beautiful, intuitive interfaces and user experiences",
    color: "from-teal-400/40 to-teal-400/0"
  },
  {
    Icon: IconCode,
    title: "Development",
    description: "Building robust, scalable solutions using cutting-edge technologies",
    color: "from-teal-400/50 to-teal-400/0"
  },
  {
    Icon: IconTestPipe,
    title: "Testing",
    description: "Rigorous quality assurance to ensure flawless performance",
    color: "from-teal-400/60 to-teal-400/0"
  },
  {
    Icon: IconRocket,
    title: "Launch",
    description: "Deploying your project and providing ongoing support",
    color: "from-teal-400/70 to-teal-400/0"
  }
];

const Process = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
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
          <h2 className="text-4xl font-bold text-white mb-4">How We Work</h2>
          <p className="text-teal-400">OUR DEVELOPMENT PROCESS</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 h-full 
                            hover:border-teal-400 transition-all duration-300">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-lg opacity-0 
                               group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center text-black font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <step.Icon className="w-12 h-12 text-teal-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>

                {/* Connecting Line */}
                {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gray-800 group-hover:bg-teal-400 transition-colors" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
