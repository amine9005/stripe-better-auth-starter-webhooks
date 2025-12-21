import { signInWithGoogle } from "@/app/api/actions/auth/auth.controller";
import { useState } from "react";

export function useGoogleSignInHook() {
  const [loading, setLoading] = useState(false);

  async function signInWithGoogleFunc() {
    setLoading(true);

    try {
      await signInWithGoogle();
    } catch (error) {
      console.log("error ", error);
    }
    setLoading(false);
  }

  return { signInWithGoogleFunc, loading };
}
