import { sql } from "drizzle-orm";
import {
  sqliteTable,
  AnySQLiteColumn,
  foreignKey,
  text,
  integer,
} from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").primaryKey().notNull(),
  emailAddress: text("email_address").notNull(),
  totalLogins: integer("total_logins").notNull(),
  dateTimeCreated: text("date_time_created").default(
    "sql`(CURRENT_TIMESTAMP)`"
  ),
});

export type User = typeof user.$inferSelect;
export type InsertUser = typeof user.$inferInsert;

export const userKey = sqliteTable("user_key", {
  id: text("id").primaryKey().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  hashedPassword: text("hashed_password"),
});

export const userSession = sqliteTable("user_session", {
  id: text("id").primaryKey().notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  activeExpires: integer("active_expires").notNull(),
  idleExpires: integer("idle_expires").notNull(),
});