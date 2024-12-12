export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  imageUrl: string;
  date: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with TypeScript',
    content: 'TypeScript is a powerful superset of JavaScript that adds static typing to the language...',
    excerpt: 'Learn the basics of TypeScript and how it can improve your development workflow.',
    author: 'John Doe',
    imageUrl: '/blog/typescript-cover.jpg',
    date: '2024-01-01',
    tags: ['TypeScript', 'JavaScript', 'Programming']
  },
  {
    id: '2',
    title: 'Next.js 15: What\'s New',
    content: 'Next.js 15 brings exciting new features and improvements to the React framework...',
    excerpt: 'Explore the latest features and improvements in Next.js 15.',
    author: 'Jane Smith',
    imageUrl: '/blog/nextjs-cover.jpg',
    date: '2024-01-02',
    tags: ['Next.js', 'React', 'Web Development']
  }
];
