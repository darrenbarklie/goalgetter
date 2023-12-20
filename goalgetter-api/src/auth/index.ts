import { auth } from "./lucia";

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
    console.error(
      `Unexpected database error (user: ${emailAddress}): ${error}`
    );
    return {
      status: "error",
      message: "Cannot create user account.",
    };
  }
};

export const signInUser = async () => {
  console.log("Sign In");
};
