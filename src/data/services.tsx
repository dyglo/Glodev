import { IconCode, IconPalette, IconDeviceMobile, IconBrandWordpress, IconServer, IconBrandGoogleAnalytics } from '@tabler/icons-react';

export const services = {
  coreServices: [
    {
      id: 1,
      icon: <IconCode size={40} />,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "Performance"]
    },
    {
      id: 2,
      icon: <IconPalette size={40} />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
    },
    {
      id: 3,
      icon: <IconDeviceMobile size={40} />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "iOS", "Android", "Cross-platform"]
    },
    {
      id: 4,
      icon: <IconBrandWordpress size={40} />,
      title: "CMS Development",
      description: "Content management systems tailored to your specific needs.",
      features: ["WordPress", "Headless CMS", "Custom Plugins", "E-commerce"]
    },
    {
      id: 5,
      icon: <IconServer size={40} />,
      title: "Backend Development",
      description: "Scalable and secure server-side solutions for your applications.",
      features: ["Node.js", "APIs", "Databases", "Cloud Services"]
    },
    {
      id: 6,
      icon: <IconBrandGoogleAnalytics size={40} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business.",
      features: ["SEO", "Analytics", "Social Media", "Content Strategy"]
    }
  ],
  techStack: [
    {
      name: "React",
      icon: "/icons/react.svg",
      description: "Frontend Development"
    },
    {
      name: "Next.js",
      icon: "/icons/nextjs.svg",
      description: "Full-stack Framework"
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg",
      description: "Type-safe JavaScript"
    },
    {
      name: "Node.js",
      icon: "/icons/nodejs.svg",
      description: "Backend Runtime"
    },
    {
      name: "TailwindCSS",
      icon: "/icons/tailwind.svg",
      description: "Utility-first CSS"
    },
    {
      name: "PostgreSQL",
      icon: "/icons/postgresql.svg",
      description: "Database"
    },
    {
      name: "MongoDB",
      icon: "/icons/mongodb.svg",
      description: "NoSQL Database"
    },
    {
      name: "Python",
      icon: "/icons/python.svg",
      description: "Backend Development"
    },
    {
      name: "AWS",
      icon: "/icons/aws.svg",
      description: "Cloud Infrastructure"
    }
  ]
};
