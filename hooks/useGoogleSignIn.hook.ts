import { signInWithGoogleClient } from "@/lib/auth-client";
import { useState } from "react";

export function useGoogleSignInHook() {
  const [loading, setLoading] = useState(false);

  async function signInWithGoogleFunc() {
    setLoading(true);

    try {
      await signInWithGoogleClient();
    } catch (error) {
      console.log("error ", error);
    }
    setLoading(false);
  }

  return { signInWithGoogleFunc, loading };
}
