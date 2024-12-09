import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";

const customPrismaAdapter = PrismaAdapter(prisma) as Adapter;

export const authOptions: AuthOptions = {
  adapter: customPrismaAdapter,
  providers: [
    // Add your providers here
  ],
  callbacks: {
    async session({ session, user }) {
      if (session?.user) {
        session.user.role = user.role || '';
        // Do not assign id here as it's not in the defined type
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};
