import { db } from "../index";
import { Goal, goals } from "../db/goal";

export const getAllGoals = async () => {
  const result: Goal[] = await db.select().from(goals).all();
  return result;
}

export const getGoalById = (id: number) => {
  return `Fetched goal with id: ${id}`
}
