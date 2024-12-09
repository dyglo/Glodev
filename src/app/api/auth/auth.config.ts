import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // Add your providers here
  ],
  callbacks: {
    async session({ session, user }) {
      if (session?.user) {
        session.user.id = user.id;
        session.user.role = user.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};
