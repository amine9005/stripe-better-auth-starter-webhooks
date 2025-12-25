import {
  requestResetPasswordAction,
  resetPasswordAction,
  signInAction,
  signUpAction,
} from "@/app/api/actions/auth/auth.controller";
import { signInWithGoogleClient } from "@/lib/auth-client";
import {
  EmailFormType,
  EmailSchemaType,
  PasswordSchemaType,
  SignInFormType,
  SignInSchemaType,
  SignUpFormType,
  SignUpSchemaType,
} from "@/validations/user.zod";
import { redirect } from "next/navigation";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

export function useSignInSubmit(form: SignInFormType) {
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<SignInSchemaType> = useCallback(
    async (data) => {
      let success = false;
      let isNotVerified = false;
      setLoading(true);
      try {
        await signInAction(data);

        success = true;
      } catch (error) {
        console.log("error: ", error);

        if (
          error instanceof Error &&
          error.message.includes("Email not verified")
        ) {
          toast.error("verify your email first.");
          isNotVerified = true;
        } else if (
          error instanceof Error &&
          error.message.includes("password")
        ) {
          form.setError("password", {
            type: "custom",
            message: "Invalid Email or Password",
          });
          form.setError("email", {
            type: "custom",
            message: "Invalid Email or Password",
          });
        } else {
          toast.error("Something went wrong. Please try again.");
          console.log("error ", error);
        }
      }

      if (isNotVerified) {
        redirect("/verify-email");
      }
      if (success) {
        redirect("/dashboard");
      }
      setLoading(false);
    },
    [form],
  );

  // return handleSubmit(onSubmit);

  return { onSubmit, loading };
}

export function useSignUpSubmit(form: SignUpFormType) {
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<SignUpSchemaType> = useCallback(
    async (data) => {
      let success = false;
      setLoading(true);

      try {
        await signUpAction(data);
        success = true;
      } catch (error) {
        if (error instanceof Error && error.message.includes("email")) {
          form.setError("email", {
            type: "custom",
            message: "Email Already Exists",
          });
        } else {
          toast.error("Something went wrong. Please try again.");
          console.log("error ", error);
        }
      }

      if (success) {
        redirect("/verify-email");
      }
      setLoading(false);
    },

    [form],
  );
  return { onSubmit, loading };
}

export function useRequestResetPasswordSubmit(form: EmailFormType) {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<EmailSchemaType> = useCallback(
    async (data) => {
      setLoading(true);

      try {
        const email = data.email as string;

        await requestResetPasswordAction(email);
        setIsSubmitted(true);
      } catch (error) {
        if (error instanceof Error && error.message.includes("Email")) {
          form.setError("email", {
            type: "custom",
            message: "Email Does NOT Exists",
          });
        } else {
          toast.error("Something went wrong. Please try again.");
          console.log("error ", error);
        }
      }

      setLoading(false);
    },
    [form],
  );
  return { onSubmit, loading, isSubmitted };
}

export function useResetPasswordSubmit(token: string | null) {
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<PasswordSchemaType> = useCallback(
    async (data) => {
      let success = false;
      setLoading(true);
      try {
        if (!token) {
          throw new Error("token does not exist");
        }

        const password = data.password as string;

        await resetPasswordAction(password, token);
        success = true;
      } catch (error) {
        if (error instanceof Error && error.message.includes("token")) {
          toast.error("Invalid token .");
          console.log("error ", error);
        } else {
          toast.error("Something went wrong. Please try again.");
          console.log("error ", error);
        }
      }

      if (success) {
        redirect("/sign-in");
      }
      setLoading(false);
    },

    [token],
  );
  return { onSubmit, loading };
}

export function useGoogleSignInHook() {
  const [loading, setLoading] = useState(false);

  async function handle_submit() {
    setLoading(true);

    try {
      await signInWithGoogleClient();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.log("error ", error);
    }
    setLoading(false);
  }

  return { handle_submit, loading };
}
