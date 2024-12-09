import prisma from './prisma';
import { BlogPost } from '@/types/blog';

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });

    if (!post) return null;

    return {
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      slug: post.slug,
      publishDate: post.publishDate.toISOString(),
      imageUrl: post.imageUrl,
      author: {
        name: post.author.name || '',
        image: post.author.image || '',
      },
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}
