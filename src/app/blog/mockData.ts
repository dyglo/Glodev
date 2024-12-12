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
    title: 'Getting Started with TypeScript',
    slug: 'getting-started-with-typescript',
    excerpt: 'Learn the basics of TypeScript and how it can improve your development workflow',
    content: `
      <h2>Introduction to TypeScript</h2>
      <p>TypeScript is a powerful superset of JavaScript that adds static typing to the language...</p>
      <h3>Key Features</h3>
      <ul>
        <li>Static Typing</li>
        <li>Enhanced IDE Support</li>
        <li>Object-Oriented Features</li>
        <li>ECMAScript Compatibility</li>
      </ul>
    `,
    publishDate: '2024-01-01',
    author: {
      name: 'John Doe',
      image: '/images/authors/john-doe.jpg'
    },
    imageUrl: '/blog/typescript-cover.jpg',
    readTime: 5
  },
  {
    id: '2',
    title: 'Next.js 15: What\'s New',
    slug: 'nextjs-15-whats-new',
    excerpt: 'Explore the latest features and improvements in Next.js 15',
    content: `
      <h2>Next.js 15 Features</h2>
      <p>Next.js 15 brings exciting new features and improvements to the React framework...</p>
      <h3>Key Improvements</h3>
      <ul>
        <li>Enhanced Performance</li>
        <li>Better Developer Experience</li>
        <li>Advanced Caching</li>
        <li>Improved Build Times</li>
      </ul>
    `,
    publishDate: '2024-01-02',
    author: {
      name: 'Jane Smith',
      image: '/images/authors/jane-smith.jpg'
    },
    imageUrl: '/blog/nextjs-cover.jpg',
    readTime: 6
  }
];
