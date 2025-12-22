import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export async function getSession() {
  try {
    const { error, data } = await authClient.getSession();
    if (error) {
      throw new Error(`Authentication Error ${error}`);
    }

    return data;
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
