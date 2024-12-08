'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PageWrapper from '@/components/PageWrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

type FormData = yup.InferType<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Here we'll add the actual form submission logic
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Navbar />

        <div className="container mx-auto px-4 py-32">
          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000" />
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      {...register('name')}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg focus:outline-none focus:border-teal-400 text-white"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      {...register('email')}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg focus:outline-none focus:border-teal-400 text-white"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      {...register('subject')}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg focus:outline-none focus:border-teal-400 text-white"
                      placeholder="Project discussion"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-800 rounded-lg focus:outline-none focus:border-teal-400 text-white resize-none"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-teal-400 text-black rounded-lg font-medium hover:bg-teal-300 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-gray-400">
                    <IconMail size={24} className="text-teal-400" />
                    <span>contact@glodev.com</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-400">
                    <IconPhone size={24} className="text-teal-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-400">
                    <IconMapPin size={24} className="text-teal-400" />
                    <span>123 Tech Street, Silicon Valley, CA 94025</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: IconBrandGithub, href: '#', label: 'GitHub' },
                    { icon: IconBrandTwitter, href: '#', label: 'Twitter' },
                    { icon: IconBrandLinkedin, href: '#', label: 'LinkedIn' },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-black/50 border border-gray-800 rounded-lg hover:border-teal-400 transition-colors"
                    >
                      <social.icon size={24} className="text-teal-400" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="relative h-64 mt-8">
                <div className="absolute inset-0 bg-gray-900 rounded-lg">
                  {/* Here we'll add the map integration later */}
                  <div className="w-full h-full flex items-center justify-center text-gray-600">
                    Map placeholder
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}
