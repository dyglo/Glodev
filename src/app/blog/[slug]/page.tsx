import { Metadata } from 'next';
import { getBlogPost } from '@/lib/blog';
import BlogPostContent from './BlogPostContent';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  return {
    title: post?.title,
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug);
  if (!post) return null;
  
  return <BlogPostContent post={post} />;
}
