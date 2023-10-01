import { 
  Elysia 
} from "elysia";
import { swagger } from '@elysiajs/swagger'
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

import { getAllUsers, getUserById } from "./user/index";
import { getAllGoals, getGoalById } from "./goal/index";

import { User } from "./db/user";
import { Goal } from "./db/goal";

const app = new Elysia();

// Database
const client = createClient({ 
    url: process.env.DATABASE_URL as string,
    authToken: process.env.DATABASE_AUTH_TOKEN
});
export const db = drizzle(client);

// Meta
app.get("/", () => `GoalGetter API ${process.env.APP_VERSION}`);
app.get("/version", () => `${process.env.APP_VERSION}`);

// Users
app.get("/user", () => getAllUsers());
app.get("/user/:id", ({ id }: User) => getUserById(id));

// Goals
app.get("/goal", () => getAllGoals());
app.get("/goal/:id", ({ id }: Goal) => getGoalById(id));

// Middleware
app.use(swagger());

// Serve
app.listen(3000);

console.log(
  `🦊 Elysia is running GoalGetter API ${process.env.APP_VERSION} at ${app.server?.hostname}:${app.server?.port}`
);
