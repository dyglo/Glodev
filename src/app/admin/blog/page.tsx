'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Session } from 'next-auth';
import PageWrapper from '@/components/PageWrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

import 'react-quill/dist/quill.snow.css';

export default function AdminBlog() {
  const { data: session } = useSession();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!session) {
    return <div>Loading...</div>;
  }

  if (!session.user || session.user.role !== 'admin') {
    router.push('/auth/signin');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content,
          excerpt,
          categoryId: category,
          tags,
          imageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const post = await response.json();
      router.push(`/blog/${post.slug}`);
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Navbar />

        <div className="container mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              Create New Blog Post
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2">Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter blog title"
                  aria-label="Blog title"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2">Excerpt</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Enter blog excerpt"
                  aria-label="Blog excerpt"
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={3}
                  required
                />
              </div>

              <div>
                <label className="block text-white mb-2">Content</label>
                <div className="prose-editor">
                  <ReactQuill
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['link', 'image'],
                        ['clean'],
                      ],
                    }}
                    value={content}
                    onChange={setContent}
                    className="h-64 mb-4 bg-gray-900 text-white rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2">Image URL</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Enter image URL"
                  aria-label="Image URL"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-teal-400 text-black rounded-lg font-medium hover:bg-teal-300 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Publishing...' : 'Publish Post'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        <Footer />
      </div>
    </PageWrapper>
  );
}
