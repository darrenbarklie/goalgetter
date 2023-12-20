import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

import { UserSignUp, signInUser, signUpUser } from "./auth";
import { getAllUsers, getUserById, getAllUsersAndGoals } from "./users/index";
import { getAllGoals, getGoalById } from "./goals/index";

import { User } from "./db/user";
import { Goal } from "./db/goal";

const app = new Elysia();

// Database
const client = createClient({
  url: process.env.DATABASE_URL as string,
  authToken: process.env.DATABASE_AUTH_TOKEN,
});
export const db = drizzle(client);

app.use(
  cors({
    origin: (request: Request): boolean => {
      const origin = request.headers.get("origin");
      if (!origin) {
        return false;
      }

      const allowedOrigins = Bun.env.CORS_ALLOWED_DOMAINS?.split(", ") || [];
      return allowedOrigins.includes(origin);
    },
  })
);

// Meta
app.get("/", () => `GoalGetter API ${process.env.APP_VERSION}`);
app.get("/version", () => ({
  version: process.env.APP_VERSION,
}));

// Auth
app.post("/auth/signup", ({ body }) => signUpUser(body as UserSignUp));
app.post("/auth/signin", () => signInUser());

// Users
app.get("/users", () => getAllUsers());
// app.get("/user/:id", ({ id }: User) => getUserById(id));
// app.get("/users/goals", () => getAllUsersAndGoals());

// Goals
app.get("/goals", () => getAllGoals());
// app.get("/goal/:id", ({ id }: Goal) => getGoalById(id));

// Middleware
app.use(swagger());

// Serve
app.listen(3001);

console.log(
  `🦊 Elysia is running GoalGetter API ${process.env.APP_VERSION} at ${app.server?.hostname}:${app.server?.port}`
);
