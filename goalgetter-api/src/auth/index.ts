import { auth } from "./lucia";
import { LuciaError } from "lucia";

export interface UserSignUp {
  emailAddress: string;
  password: string;
}

export const signUpUser = async ({ emailAddress, password }: UserSignUp) => {
  try {
    const user = await auth.createUser({
      key: {
        providerId: "email",
        providerUserId: emailAddress,
        password: password,
      },
      attributes: {
        email_address: emailAddress,
        total_logins: 0,
        date_time_created: new Date(),
      }, // expects `Lucia.DatabaseUserAttributes`
    });
    console.log(`Created user: ${JSON.stringify(user)}`);
    return {
      status: "success",
      user: user,
    };
  } catch (error) {
    if (error instanceof LuciaError) {
      console.error(`Lucia error (user: ${emailAddress}): ${error.message}`);
    } else {
      console.error(
        `Unexpected database error (user: ${emailAddress}): ${error}`
      );
    }
    return {
      status: "error",
      message:
        "Cannot create user account. Contact support@goalgetter.io for assistance.",
    };
  }
};

export const signInUser = async () => {
  console.log("Sign In");
};
