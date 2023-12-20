// app.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./src/auth/lucia.ts").Auth;
  type DatabaseUserAttributes = {};
  type DatabaseSessionAttributes = {};
}
