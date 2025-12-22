"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignUpSchemaType, SignInSchemaType } from "@/validations/user.zod";

export async function signUpAction(formData: SignUpSchemaType) {
  const name = formData.username as string;
  const email = formData.email as string;
  const password = formData.password as string;
  await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });

  redirect("/verify-email");
}

export async function signInAction(formData: SignInSchemaType) {
  const email = formData.email as string;
  const password = formData.password as string;
  await auth.api.signInEmail({ body: { email, password } });

  redirect("/");
}

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/");
}

export async function requestResetPasswordAction(email: string) {
  return await auth.api.requestPasswordReset({
    body: {
      email: email, // required
      redirectTo: `${process.env.BETTER_AUTH_URL}/reset-password`,
    },
  });
}
