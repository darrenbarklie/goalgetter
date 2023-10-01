import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
 
export const users = sqliteTable('user', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    emailAddress: text('email_address'),
    totalLogins: integer('total_logins'),
  },
);

export type User = typeof users.$inferSelect 
export type InsertUser = typeof users.$inferInsert
