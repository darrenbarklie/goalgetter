import { eq } from "drizzle-orm";
import { db } from "../index";
import { User, user } from "../db/migrations/schema";
import { goals } from "../db/goal";

export const getAllUsers = async () => {
  const result: User[] = await db.select().from(user).all();
  return result;
};

export const getUserById = (id: number) => {
  return `Fetched user with id: ${id}`;
};

export const getAllAndGoals = async () => {
  const result: any[] = await db
    .select()
    .from(user)
    .leftJoin(goals, eq(user.id, goals.userId));
  return result;
};
