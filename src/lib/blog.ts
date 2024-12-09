import { BlogPost } from '@/types/blog';

// Mock data for blog posts
const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Web Development',
    slug: 'getting-started-with-web-development',
    content: 'Content goes here...',
    excerpt: 'Learn the basics of web development...',
    publishDate: new Date().toISOString(),
    category: 'Web Development',
    imageUrl: '/images/blog/web-dev.jpg',
    readTime: 5,
    author: {
      name: 'John Doe',
      image: '/images/authors/john-doe.jpg',
      role: 'Senior Developer'
    }
  },
  // Add more mock posts as needed
];

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = mockPosts.find(p => p.slug === slug);
  return post || null;
}

export async function getBlogPosts(params?: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
}) {
  const { page = 1, limit = 6, category, search } = params || {};

  let filteredPosts = [...mockPosts];

  if (category) {
    filteredPosts = filteredPosts.filter(post => post.category === category);
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredPosts = filteredPosts.filter(post => 
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower)
    );
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedPosts = filteredPosts.slice(start, end);

  return {
    posts: paginatedPosts,
    total: filteredPosts.length,
    totalPages: Math.ceil(filteredPosts.length / limit)
  };
}
