'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconBrandReact, IconBrandNextjs, IconBrandTailwind, IconBrandFigma } from '@tabler/icons-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  client: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "/projects/ecommerce.jpg",
    description: "Modern e-commerce platform with real-time inventory and AI-powered recommendations",
    technologies: ["Next.js", "React", "TailwindCSS", "Node.js"],
    client: "Fashion Retail Co."
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "UI/UX Design",
    image: "/projects/dashboard.jpg",
    description: "Comprehensive financial analytics dashboard with real-time data visualization",
    technologies: ["React", "D3.js", "Figma", "TypeScript"],
    client: "FinTech Solutions"
  },
  {
    id: 3,
    title: "Social Media App",
    category: "Mobile App",
    image: "/projects/social.jpg",
    description: "Cross-platform social media application with real-time messaging",
    technologies: ["React Native", "Firebase", "Node.js", "MongoDB"],
    client: "ConnectHub Inc."
  },
  {
    id: 4,
    title: "Healthcare Portal",
    category: "Web Development",
    image: "/projects/healthcare.jpg",
    description: "Patient management system with telemedicine capabilities",
    technologies: ["Next.js", "PostgreSQL", "WebRTC", "TailwindCSS"],
    client: "MedCare Systems"
  },
  {
    id: 5,
    title: "Educational Platform",
    category: "Web Development",
    image: "/projects/education.jpg",
    description: "Interactive learning platform with live collaboration features",
    technologies: ["React", "Socket.io", "Express", "MongoDB"],
    client: "EduTech Ltd."
  },
  {
    id: 6,
    title: "Restaurant App",
    category: "Mobile App",
    image: "/projects/restaurant.jpg",
    description: "Food ordering and delivery tracking application",
    technologies: ["React Native", "Node.js", "Redis", "PostgreSQL"],
    client: "FoodChain Co."
  }
];

const categories = ["All", "Web Development", "UI/UX Design", "Mobile App"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" ? true : project.category === selectedCategory
  );

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Works.</h2>
          <p className="text-teal-400">FEATURED PROJECTS</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border ${
                selectedCategory === category
                  ? 'bg-teal-400 text-black border-teal-400'
                  : 'border-gray-700 text-gray-400 hover:border-teal-400 hover:text-teal-400'
              } transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative h-[300px] bg-gray-900 rounded-lg overflow-hidden">
                  {/* Project Image (placeholder for now) */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/80 p-6 flex flex-col justify-between transform"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                      <p className="text-teal-400 text-sm">Client: {project.client}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full bg-gray-800 text-teal-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
