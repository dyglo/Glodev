'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  IconUsers,
  IconCode,
  IconTrophy,
  IconClockHour4
} from '@tabler/icons-react';

type IconComponent = typeof IconUsers;

interface Stat {
  Icon: IconComponent;
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  {
    Icon: IconClockHour4,
    value: 8,
    label: "Years of Experience",
    suffix: "+"
  },
  {
    Icon: IconCode,
    value: 200,
    label: "Projects Completed",
    suffix: "+"
  },
  {
    Icon: IconUsers,
    value: 150,
    label: "Happy Clients",
    suffix: "+"
  },
  {
    Icon: IconTrophy,
    value: 15,
    label: "Awards Won",
    suffix: ""
  }
];

const StatCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const step = Math.ceil(value / 50); // Adjust speed of counting
      const timer = setInterval(() => {
        start += step;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  );
};

const Statistics = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="relative bg-black py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 stats-pattern" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-teal-400">NUMBERS SPEAK FOR THEMSELVES</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 text-center group hover:border-teal-400 transition-colors"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-black to-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              
              <div className="flex justify-center mb-4">
                <stat.Icon className="w-12 h-12 text-teal-400" />
              </div>
              
              <StatCounter value={stat.value} suffix={stat.suffix} />
              
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
