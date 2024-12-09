import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "../auth/auth.config";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6");
  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const where = {
    published: true,
    ...(category && { categoryId: category }),
    ...(search && {
      OR: [
        { title: { contains: search, mode: "insensitive" } },
        { excerpt: { contains: search, mode: "insensitive" } },
      ],
    }),
  };

  const [posts, total] = await Promise.all([
    prisma.post.findMany({
      where,
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
        category: true,
        tags: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.post.count({ where }),
  ]);

  return NextResponse.json({
    posts,
    total,
    totalPages: Math.ceil(total / limit),
  });
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

  const post = await prisma.post.create({
    data: {
      title,
      slug,
      content,
      excerpt,
      imageUrl,
      published: true,
      author: {
        connect: { id: session.user.id },
      },
      category: {
        connect: { id: categoryId },
      },
      tags: {
        connect: tags.map((tagId: string) => ({ id: tagId })),
      },
    },
    include: {
      author: {
        select: {
          name: true,
          image: true,
        },
      },
      category: true,
      tags: true,
    },
  });

  return NextResponse.json(post);
}
