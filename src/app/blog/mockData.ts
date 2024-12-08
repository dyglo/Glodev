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
    title: "The Future of Web Development: What's Next in 2024",
    excerpt: 'Explore the upcoming trends and technologies that will shape the future of web development.',
    content: `Web development is constantly evolving, and 2024 promises to bring exciting changes to the industry. From new frameworks to innovative approaches, developers need to stay ahead of the curve.

    Key trends to watch:
    1. AI-powered development tools
    2. WebAssembly becoming mainstream
    3. Edge computing and serverless architecture
    4. Improved performance metrics
    5. Enhanced security measures

    As we move forward, the focus will be on creating faster, more secure, and more accessible web applications.`,
    author: {
      name: 'John Doe',
      avatar: 'https://source.unsplash.com/100x100/?portrait&1',
      role: 'Lead Developer'
    },
    category: 'Web Development',
    tags: ['React', 'Next.js', 'Web Dev'],
    publishDate: 'Dec 1, 2023',
    readTime: 5,
    imageUrl: 'https://source.unsplash.com/800x600/?coding&1',
    slug: 'future-of-web-development-2024'
  },
  {
    id: '2',
    title: 'Mastering Modern UI/UX Design Principles',
    excerpt: 'Learn the essential principles of modern UI/UX design and how to apply them effectively.',
    content: `Creating intuitive and engaging user experiences is crucial in today's digital landscape. This guide explores the fundamental principles of modern UI/UX design and provides practical tips for implementation.

    Key principles covered:
    1. Visual hierarchy
    2. Consistency
    3. Accessibility
    4. User feedback
    5. Performance optimization

    By following these principles, designers can create more effective and user-friendly interfaces.`,
    author: {
      name: 'Jane Smith',
      avatar: 'https://source.unsplash.com/100x100/?portrait&2',
      role: 'Senior Designer'
    },
    category: 'Design',
    tags: ['UI/UX', 'Design', 'Web Design'],
    publishDate: 'Nov 28, 2023',
    readTime: 7,
    imageUrl: 'https://source.unsplash.com/800x600/?design&1',
    slug: 'mastering-modern-ui-ux-design'
  },
  {
    id: '3',
    title: 'Building Scalable Applications with Next.js',
    excerpt: 'A comprehensive guide to building enterprise-level applications using Next.js and React.',
    content: `Next.js has become the go-to framework for building modern web applications. This guide explores best practices for creating scalable applications that can grow with your business.

    Topics covered:
    1. Project structure
    2. State management
    3. API routes
    4. Performance optimization
    5. Deployment strategies

    Learn how to leverage Next.js features to build robust applications.`,
    author: {
      name: 'Mike Johnson',
      avatar: 'https://source.unsplash.com/100x100/?portrait&3',
      role: 'Software Architect'
    },
    category: 'Web Development',
    tags: ['Next.js', 'React', 'Architecture'],
    publishDate: 'Nov 25, 2023',
    readTime: 10,
    imageUrl: 'https://source.unsplash.com/800x600/?javascript&1',
    slug: 'building-scalable-applications-nextjs'
  }
];
