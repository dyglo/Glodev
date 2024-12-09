import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from './prisma';
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
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};
