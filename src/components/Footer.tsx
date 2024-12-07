'use client';

import { motion } from 'framer-motion';
import { 
  IconBrandGithub, 
  IconBrandTwitter, 
  IconBrandLinkedin, 
  IconBrandInstagram,
  IconArrowUp,
  IconMail,
  IconPhone,
  IconMapPin
} from '@tabler/icons-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Glodev</h3>
            <p className="text-gray-400 mb-6">
              Transforming ideas into digital reality. We create innovative solutions
              that drive business growth and user engagement.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/glodev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <IconBrandTwitter className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/glodev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Visit our GitHub"
              >
                <IconBrandGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/company/glodev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <IconBrandLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/glodev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <IconBrandInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <IconMapPin className="text-teal-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  123 Innovation Street, Tech Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <IconPhone className="text-teal-400" size={20} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <IconMail className="text-teal-400" size={20} />
                <span className="text-gray-400">contact@glodev.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (form.elements.namedItem('email') as HTMLInputElement).value;
              
              try {
                const response = await fetch('/api/subscribe', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email })
                });
                
                const data = await response.json();
                alert(data.message);
                form.reset();
              } catch (error) {
                alert('Failed to subscribe. Please try again later.');
              }
            }} className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-teal-400 text-gray-400"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-400 text-black rounded-lg hover:bg-teal-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              {new Date().getFullYear()} Glodev. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-teal-400 text-black rounded-full shadow-lg hover:bg-teal-500 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <IconArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
