import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
 
export const goals = sqliteTable('goal', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title'),
    description: text('description'),
    status: integer('status'),
  },
);

export type Goal = typeof goals.$inferSelect 
export type InsertGoal = typeof goals.$inferInsert
