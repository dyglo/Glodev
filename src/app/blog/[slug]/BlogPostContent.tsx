'use client';

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import PageWrapper from '@/components/PageWrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogPost } from '@/types/blog';

interface Props {
  post: BlogPost;
}

export default function BlogPostContent({ post }: Props) {
  return (
    <PageWrapper>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <Link
          href="/blog"
          className="inline-flex items-center text-teal-500 hover:text-teal-600 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-400 mb-8">
            <span>{format(new Date(post.publishDate), 'MMMM d, yyyy')}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} min read</span>
          </div>

          {post.imageUrl && (
            <div className="relative w-full h-[400px] mb-8">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}

          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold mb-4">Share this post</h2>
          <div className="flex space-x-4">
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
              Share on Twitter
            </button>
            <button className="text-white bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded">
              Share on LinkedIn
            </button>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </PageWrapper>
  );
}
