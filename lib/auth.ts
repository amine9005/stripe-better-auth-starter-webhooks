import { betterAuth } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getClient } from "@/db/mongoose";
// import { bearer } from "better-auth/plugins";

import {
  sendResetPasswordEmailAction,
  sendVerificationEmailAction,
} from "@/app/api/actions/emails/emails.controller";

const client = await getClient();
export const auth = betterAuth({
  user: {
    additionalFields: {
      plan: {
        type: "string",
        required: false,
        defaultValue: "free",
        input: false,
      },
      customerId: {
        type: "string",
        required: false,
        defaultValue: null,
        input: false,
      },
      subscription: {
        type: "string",
        ref: "subscription",
        required: false,
      },
    },
  },

  database: mongodbAdapter(client),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      sendResetPasswordEmailAction(user.name, user.email, url);
    },
  },
  socialProviders: {
    google: {
      disableDefaultFetchPlugins: true,
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      prompt: "select_account",
    },
  },
  emailVerification: {
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      sendVerificationEmailAction(user.email, url);
    },
  },

  plugins: [nextCookies()],
});
