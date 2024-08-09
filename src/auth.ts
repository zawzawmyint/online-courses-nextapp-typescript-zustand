import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUser } from "./lib/data";

import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { compare } from "bcrypt-ts";

interface CustomSession extends Session {
  accessToken?: string;
}

interface CustomToken extends JWT {
  accessToken?: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/users/sign_in",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await getUser(credentials.email.toString());
        if (!user) {
          throw new Error("User not found.");
        }
        // Verify the password
        const passwordsMatch = await compare(
          credentials.password.toString(),
          user.password
        );

        if (passwordsMatch) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Default redirect behavior
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({
      session,
      token,
    }: {
      session: CustomSession;
      token: CustomToken;
    }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      // Return true if the user is allowed to sign in
      return user ? true : false;
    },
  },
});
