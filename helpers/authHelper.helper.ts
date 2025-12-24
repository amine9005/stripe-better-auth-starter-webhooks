import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function getSession() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      throw new Error(`Authentication Error`);
    }

    return session;
  } catch {
    console.log("Authentication failed");
  }
}

export async function authIsRequired() {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }

  return session;
}

export async function authNotRequired() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }
}
