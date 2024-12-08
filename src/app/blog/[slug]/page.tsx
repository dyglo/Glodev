'use client';

import { Metadata } from 'next';
import Image from 'next/image';
import Comments from '@/components/Comments';
import SocialShare from '@/components/SocialShare';
import UploadButton from '@/components/UploadButton';
import { useParams } from 'next/navigation';
import PageWrapper from '@/components/PageWrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogPost } from '@/types/blog';
import { mockPosts } from '../mockData';

export const metadata: Metadata = {
  title: 'Blog Post',
  description: 'Blog post page',
};

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

  const handleImageUpload = (url: string) => {
    console.log('Image uploaded:', url);
    // Handle the uploaded image URL
  };

  return (
    <PageWrapper>
      <div className="min-h-screen bg-black">
        <Navbar />
        
        <article className="container mx-auto px-4 py-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {post.title}
            </h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 dark:text-gray-400">{post.author.name}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {new Date(post.publishDate).toLocaleDateString()}
                </span>
              </div>
              
              <SocialShare 
                url={`https://yourdomain.com/blog/${params.slug}`} 
                title={post.title} 
              />
            </div>

            {post.imageUrl && (
              <div className="relative w-full h-96 mb-8">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            <div className="prose dark:prose-invert max-w-none mb-12">
              {post.content || post.excerpt}
            </div>

            {/* Image Upload Section (for admins only) */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Add Images</h3>
              <UploadButton onUploadComplete={handleImageUpload} />
            </div>

            {/* Comments Section */}
            <Comments postId={params.slug} />
          </motion.div>
        </article>

        <Footer />
      </div>
    </PageWrapper>
  );
}
