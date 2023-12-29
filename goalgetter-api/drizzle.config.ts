import { Config } from "drizzle-kit";

export default {
  schema: ["./src/db/schema.ts"],
  out: "./src/db",
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
    authToken: process.env.DATABASE_AUTH_TOKEN,
  },
  verbose: true,
  strict: true,
} satisfies Config;
