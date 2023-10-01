import { db } from "../index";
import { User, users } from "../db/user";

export const getAllUsers = async () => {
  const result: User[] = await db.select().from(users).all();
  return result;
}

export const getUserById = (id: number) => {
  return `Fetched user with id: ${id}`
}
