import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import google from "next-auth/providers/google";
import { db } from "./db";
import { accounts, sessions, users, verificationTokens } from "./schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;
      session.user.role = user.role;
      return session;
    },
  },
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
});
