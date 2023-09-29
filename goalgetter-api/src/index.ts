import { Context, Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'

import { getUserById } from "./user/index";
import { getGoalById } from "./goal/index";

const app = new Elysia();

// Meta
app.get("/", () => "GoalGetter API");
app.get("/ping", () => "pong");
app.get("/version", () => "v0.0.0");

// Users
app.get("/user/:id", ({ params: { id } }: {params: { id: number} }) => getUserById(id))

// Goals
app.get("/goal", () => ({
  goals: [
    { "id": 1, "title": "Build API" },
    { "id": 2, "title": "Connect to Turso"},
    { "id": 3, "title": "Deploy to Fly.io"}
  ]
}))
app.get("/goal/:id", ({ params: { id } }: {params: { id: number} }) => getGoalById(id));
app.post("/goal", ({ body }: Context) => {
  return `
    Received request:
      ${JSON.stringify(body)}
  `
});

// Middleware
app.use(swagger());

// Serve
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

