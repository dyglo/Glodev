import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    // Add your providers here
  ],
  callbacks: {
    async session({ session, user }) {
      if (session?.user) {
        session.user.role = 'user';
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};
