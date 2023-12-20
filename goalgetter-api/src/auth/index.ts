import { db } from "../index";

import { auth } from "./lucia";
import { LuciaError, User } from "lucia";

export interface UserSignUp {
  emailAddress: string;
  password: string;
}

export const signUpUser = async ({ emailAddress, password }: UserSignUp) => {
  // console.log("Sign Up");
  // console.log(emailAddress);
  // console.log(password);
  try {
    const user = await auth.createUser({
      key: {
        providerId: "email",
        providerUserId: "abc",
        password: "123456",
      },
      attributes: {
        emailAddress: emailAddress,
        totalLogins: 0,
      }, // expects `Lucia.DatabaseUserAttributes`
    });

    console.log("**********************");
    console.log(user);
  } catch (error) {
    if (
      error instanceof LuciaError &&
      error.message === `AUTH_DUPLICATE_KEY_ID`
    ) {
      // key already exists
    }
    console.error(`Unexpected database error: ${error}`);
  }
};

export const signInUser = async () => {
  console.log("Sign In");
};
