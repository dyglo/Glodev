import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id?: string
      role?: string
      email?: string
      name?: string
      image?: string
    }
  }

  interface User {
    id: string
    role: string
    email: string
    name?: string
    image?: string
  }
}
