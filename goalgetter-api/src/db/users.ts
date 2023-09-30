import { sqliteTable, text, integer, uniqueIndex } from 'drizzle-orm/sqlite-core';
 
export const users = sqliteTable('users', {
    id: integer('id').primaryKey(),
    emailAddress: text('email_address'),
    totalLogins: integer('total_logins'),
  },
);

export type User = typeof users.$inferSelect // return type when queried
export type InsertUser = typeof users.$inferInsert // insert type
