import { authClient } from "@/lib/auth-client";

export async function getUser() {
  return (await authClient.getSession()).data;
}

export async function isAuthenticatedActionClient() {
  const { data } = await authClient.getSession();

  if (!data) {
    return false;
  }

  return true;
}
