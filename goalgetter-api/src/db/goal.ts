import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { users } from './user';
 
export const goals = sqliteTable('goal', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title').notNull(),
    description: text('description'),
    status: integer('status').notNull(),
    userId: integer('user_id').notNull().references(() => users.id),
  },
);

export type Goal = typeof goals.$inferSelect 
export type InsertGoal = typeof goals.$inferInsert
