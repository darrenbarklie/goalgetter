import { lucia } from "lucia";
import { elysia } from "lucia/middleware";
import { libsql } from "@lucia-auth/adapter-sqlite";
import { createClient } from "@libsql/client";

import { User } from "../db/user";

const client = createClient({
  url: process.env.DATABASE_URL as string,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const auth = lucia({
  env: "DEV", // "PROD" if deployed to HTTPS
  middleware: elysia(),

  adapter: libsql(client, {
    user: "user",
    key: "user_key",
    session: "user_session",
  }),

  getUserAttributes: (databaseUser: User) => {
    return {
      emailAddress: databaseUser.emailAddress,
      totalLogins: databaseUser.totalLogins,
    };
  },

  // sessionCookie: {
  //   expires: false,
  // },
});

export type Auth = typeof auth;
