'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import PageWrapper from '@/components/PageWrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogPost } from '@/types/blog';
import { mockPosts } from '../mockData';

export default function BlogPostPage() {
  const params = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    // In a real app, this would be an API call
    const foundPost = mockPosts.find(p => p.slug === params.slug);
    setPost(foundPost || null);
  }, [params.slug]);

  if (!post) {
    return (
      <PageWrapper>
        <div className="min-h-screen bg-black">
          <Navbar />
          <div className="container mx-auto px-4 py-32">
            <div className="text-center text-gray-400">Post not found</div>
          </div>
          <Footer />
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Navbar />
        
        <article className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-8">
              <span className="px-3 py-1 bg-teal-400 text-black text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {post.title}
            </h1>

            <div className="flex items-center space-x-4 mb-8">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <div className="flex items-center text-gray-400 text-sm">
                  <span>{post.author.role}</span>
                  <span className="mx-2">•</span>
                  <span>{post.publishDate}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime} min read</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-w-16 aspect-h-9 mb-12">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">
                {post.content || post.excerpt}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </article>

        <Footer />
      </div>
    </PageWrapper>
  );
}
