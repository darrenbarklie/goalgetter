import { eq } from "drizzle-orm";
import { db } from "../index";
import { User, users } from "../db/user";
import { goals } from "../db/goal";

export const getAllUsers = async () => {
  const result: User[] = await db.select().from(users).all();
  return result;
}

export const getUserById = (id: number) => {
  return `Fetched user with id: ${id}`
}

export const getAllUsersAndGoals = async () => {
  const result: User[] = await db.select().from(users).leftJoin(goals, eq(users.id, goals.userId));
  return result;
}
