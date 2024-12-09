export interface Author {
  name: string;
  image?: string;
  avatar?: string;
  role?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishDate: string;
  author: Author;
  imageUrl?: string;
  readTime?: number;
  category?: string;
  published?: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

export interface BlogTag {
  name: string;
  slug: string;
  count: number;
}

export interface BlogResponse {
  posts: BlogPost[];
  total: number;
  totalPages: number;
}
