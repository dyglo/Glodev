'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000" />
      <Link href={`/blog/${post.slug}`}>
        <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-teal-400 transition-all duration-300 h-full flex flex-col">
          <div className="relative aspect-w-16 aspect-h-9">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="object-cover w-full h-[200px]"
            />
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-teal-400 text-black text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-gray-400 text-sm">{post.author.role}</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-400 mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
              <span>{post.publishDate}</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
