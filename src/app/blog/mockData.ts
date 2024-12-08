import { BlogPost, BlogCategory } from '@/types/blog';

export const categories: BlogCategory[] = [
  { name: 'Web Development', slug: 'web-dev', count: 12 },
  { name: 'Design', slug: 'design', count: 8 },
  { name: 'Technology', slug: 'tech', count: 15 },
  { name: 'Business', slug: 'business', count: 6 },
];

export const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14',
    slug: 'getting-started-with-nextjs-14',
    excerpt: 'Learn how to build modern web applications with Next.js 14',
    content: `
      <h2>Introduction to Next.js 14</h2>
      <p>Next.js 14 brings revolutionary changes to the way we build web applications...</p>
      <h3>Key Features</h3>
      <ul>
        <li>Server Components</li>
        <li>Improved Routing</li>
        <li>Better Performance</li>
      </ul>
    `,
    publishDate: '2024-12-08',
    author: {
      name: 'John Doe',
      image: '/images/authors/john-doe.jpg'
    },
    imageUrl: '/images/blog/nextjs-14.jpg',
    readTime: 5
  },
  {
    id: '2',
    title: 'Building with TypeScript',
    slug: 'building-with-typescript',
    excerpt: 'Why TypeScript is essential for modern web development',
    content: `
      <h2>The Power of TypeScript</h2>
      <p>TypeScript adds static typing to JavaScript, making it more robust...</p>
      <h3>Benefits</h3>
      <ul>
        <li>Type Safety</li>
        <li>Better IDE Support</li>
        <li>Easier Refactoring</li>
      </ul>
    `,
    publishDate: '2024-12-07',
    author: {
      name: 'Jane Smith',
      image: '/images/authors/jane-smith.jpg'
    },
    imageUrl: '/images/blog/typescript.jpg',
    readTime: 4
  }
];
