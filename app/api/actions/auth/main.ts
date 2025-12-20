"use server";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { SignUpSchemaType } from "@/validations/user.zod";

export async function signUpAction(formData: SignUpSchemaType) {
  const name = formData.username as string;
  const email = formData.email as string;
  const password = formData.password as string;
  console.log("name ", name, "email ", email, "password ", password);

  await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });

  redirect("/");
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await auth.api.signInEmail({ body: { email, password } });

  redirect("/");
}

export async function signOutAction() {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect("/");
}
