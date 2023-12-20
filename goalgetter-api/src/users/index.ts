// import { eq } from "drizzle-orm";
import { auth } from "../auth/lucia";

import { db } from "../index";
import { User, user } from "../db/migrations/schema";
// import { goals } from "../db/goal";

export interface UserCreation {
  providerId: "email" | "google";
  emailAddress: string;
  password: string;
}

// TODO(DBB): Authorisation : ADMIN
// TODO(DBB): Random password
export const createUser = async ({
  providerId,
  emailAddress,
  password,
}: UserCreation) => {
  try {
    const user = await auth.createUser({
      key: {
        providerId: providerId,
        providerUserId: emailAddress,
        password: password, // TODO(DBB): Random password
      },
      attributes: {
        email_address: emailAddress,
        total_logins: 0,
        date_time_created: new Date(),
      }, // expects `Lucia.DatabaseUserAttributes`
    });
    return {
      status: "success",
      user: user,
    };
  } catch (error) {
    console.error(`Create user failed (user: ${emailAddress}): ${error}`);
    return {
      status: "error",
      message: "Cannot create user account.",
    };
  }
};

// TODO(DBB): Authorisation : ADMIN
export const readAllUsers = async () => {
  try {
    const result: User[] = await db.select().from(user).all();
    return result;
  } catch (error) {
    console.error(`Read users failed: ${error}`);
    return {
      status: "error",
      message: "Cannot read user accounts.",
    };
  }
};

// TODO(DBB): Authorisation : ADMIN
export const readUserById = async (id: string) => {
  try {
    const user = await auth.getUser(id);
    return user;
  } catch (error) {
    console.error(`Read user failed (ID: ${user.id}): ${error}`);
    return {
      status: "error",
      message: "Cannot read user account.",
    };
  }
};

// TODO(DBB): Authorisation : ADMIN
export const updateUserById = async ({
  id,
  body,
}: {
  id: string;
  body: Partial<User>;
}) => {
  try {
    // TODO(DBB) : Complete the spread logic, based on body
    // TODO(DBB) : date_time_updated
    // TODO(DBB) : Spread operation needs work
    const user = await auth.updateUserAttributes(
      id,
      {
        email_address: body.emailAddress,
        // date_time_updated: new Date(),
      } // expects partial `Lucia.DatabaseUserAttributes`
    );
    return user;
  } catch (error) {
    console.error(`Update user failed (ID: ${user.id}): ${error}`);
    return {
      status: "error",
      message: "Cannot update user account.",
    };
  }
};

// TODO(DBB): Authorisation : ADMIN
export const deleteUserById = async (id: string) => {
  try {
    const user = await auth.deleteUser(id);
    return {
      status: "success",
      user: user,
    };
  } catch (error) {
    console.error(`Delete user failed (user: ${user.emailAddress}): ${error}`);
    return {
      status: "error",
      message: "Cannot delete user account.",
    };
  }
};

// export const getAllAndGoals = async () => {
//   const result: any[] = await db
//     .select()
//     .from(user)
//     .leftJoin(goals, eq(user.id, goals.userId));
//   return result;
// };
