'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import PageWrapper from '@/components/PageWrapper';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/team/john.jpg",
    bio: "Visionary leader with 10+ years in digital transformation",
  },
  {
    name: "Jane Smith",
    role: "Technical Lead",
    image: "/team/jane.jpg",
    bio: "Full-stack expert specializing in scalable solutions",
  },
  {
    name: "Mike Johnson",
    role: "Creative Director",
    image: "/team/mike.jpg",
    bio: "Award-winning designer with a passion for innovation",
  },
  // Add more team members as needed
];

const AboutPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 via-purple-500/10 to-teal-500/10 animate-gradient-x" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 text-center relative"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              About Glodev
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a team of passionate developers and designers creating 
              exceptional digital experiences that drive business growth.
            </p>
          </motion.div>
        </section>

        {/* Values Section */}
        <section ref={ref} className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-teal-400">WHAT DRIVES US</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'Pushing boundaries and embracing cutting-edge technologies to deliver innovative solutions.',
                  icon: '🚀'
                },
                {
                  title: 'Excellence',
                  description: 'Committed to delivering exceptional quality in every project we undertake.',
                  icon: '⭐'
                },
                {
                  title: 'Integrity',
                  description: 'Building trust through transparency and honest relationships with our clients.',
                  icon: '🎯'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000" />
                  <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-teal-400 transition-colors">
                    <div className="text-3xl mb-4">{value.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-teal-400">THE PEOPLE BEHIND GLODEV</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000" />
                  <div className="relative overflow-hidden rounded-lg bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-teal-400 transition-all duration-300">
                    <div className="aspect-w-3 aspect-h-4">
                      <div className="h-64 bg-gray-800 rounded-t-lg"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-teal-400 mb-3">{member.role}</p>
                      <p className="text-gray-400">{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
