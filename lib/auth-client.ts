import { createAuthClient } from "better-auth/client";
import { jwtClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: process.env.CLIENT_BASE_URL,
  plugins: [jwtClient()],
});

export const signInWithGoogleClient = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/",
  });
};
