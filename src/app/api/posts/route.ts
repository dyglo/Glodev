import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { getBlogPosts } from "@/lib/blog";
import { authOptions } from "@/lib/auth";
import { BlogPost } from "@/types/blog";

// Mock posts array to store new posts (in memory only)
let mockPosts: BlogPost[] = [];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6");
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const result = await getBlogPosts({
    page,
    limit,
    category: category || undefined,
    search: search || undefined,
  });

  return NextResponse.json(result);
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const json = await request.json();
  const { title, content, excerpt, categoryId, tags, imageUrl } = json;

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  // Create a new mock post
  const newPost: BlogPost = {
    id: Date.now().toString(), // Generate a simple unique ID
    title,
    slug,
    content,
    excerpt,
    imageUrl,
    publishDate: new Date().toISOString(),
    category: categoryId,
    author: {
      name: session.user.name || "Anonymous",
      image: session.user.image || undefined,
      role: session.user.role || "user"
    }
  };

  // Add to mock posts array
  mockPosts.push(newPost);

  return NextResponse.json(newPost);
}
