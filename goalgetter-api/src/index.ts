import { 
  //Context, 
  Elysia 
} from "elysia";
//import { swagger } from '@elysiajs/swagger'
//import { drizzle } from 'drizzle-orm/libsql';
//import { createClient } from '@libsql/client';

//import { getAllUsers, getUserById } from "./user/index";
//import { getGoalById } from "./goal/index";

const app = new Elysia();
const appVersion = 'v0.0.0b';

// Database
//const client = createClient({ 
//    url: Bun.env.DATABASE_URL as string,
//    authToken: Bun.env.DATABASE_AUTH_TOKEN
//});
//export const db = drizzle(client);

// Meta
app.get("/", () => "GoalGetter API");
app.get("/version", () => appVersion);
app.get("/test", () => "Test OK");

// Users
//app.get("/user", () => getAllUsers());
//app.get("/user/:id", ({ params: { id } }: {params: { id: number} }) => getUserById(id))

// Goals
//app.get("/goal", () => ({
//  goals: [
//    { "id": 1, "title": "Build API" },
//    { "id": 2, "title": "Connect to Turso"},
//    { "id": 3, "title": "Deploy to Fly.io"}
//  ]
//}))
//app.get("/goal/:id", ({ params: { id } }: {params: { id: number} }) => getGoalById(id));
//app.post("/goal", ({ body }: Context) => {
//  return `
//    Received request:
//      ${JSON.stringify(body)}
//  `
//});

// Middleware
//app.use(swagger());

// Serve
app.listen(3000);

console.log(
  `🦊 GoalGetter API ${appVersion} is running at ${app.server?.hostname}:${app.server?.port}`
);

