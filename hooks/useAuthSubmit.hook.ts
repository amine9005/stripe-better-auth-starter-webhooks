import {
  requestResetPasswordAction,
  resetPasswordAction,
  signInAction,
  signUpAction,
} from "@/app/api/actions/auth/auth.controller";
import { checkAndWatchForm } from "@/helpers/formsHelpers";
import { signInWithGoogleClient } from "@/lib/auth-client";
import {
  EmailFormType,
  PasswordFormType,
  SignInFormType,
  SignInSchemaType,
  SignUpFormType,
} from "@/validations/user.zod";
import { redirect } from "next/navigation";
import { FormEvent, useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";

export function useSignInSubmit(form: SignInFormType) {
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<SignInSchemaType> = async (data) => {
    let success = false;
    let isNotVerified = false;
    console.log("clicked 2");

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
      } else if (error instanceof Error && error.message.includes("password")) {
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
  };

  // return handleSubmit(onSubmit);

  return { onSubmit, loading };
}

export function useSignUpSubmit() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handle_submit = useCallback(
    async (e: FormEvent, form: SignUpFormType) => {
      checkAndWatchForm(e, form);
      if (form.formState.isValid) {
        setLoading(true);

        try {
          await signUpAction(form.getValues());
          setSuccess(true);
        } catch (error) {
          if (error instanceof Error && error.message.includes("Email")) {
            form.setError("email", {
              type: "custom",
              message: "Email Already Exists",
            });
          } else {
            toast.error("Something went wrong. Please try again.");
            console.log("error ", error);
          }
        }
      }

      if (success) {
        redirect("/verify-email");
      }
      setLoading(false);
    },

    [success],
  );
  return { handle_submit, loading };
}

export function useRequestResetPasswordSubmit() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handle_submit = useCallback(
    async (e: FormEvent, form: EmailFormType) => {
      checkAndWatchForm(e, form);
      if (form.formState.isValid) {
        setLoading(true);

        try {
          const email = form.getValues().email as string;

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
      }

      setLoading(false);
    },
    [],
  );
  return { handle_submit, loading, isSubmitted };
}

export function useResetPasswordSubmit() {
  const [loading, setLoading] = useState(false);

  const handle_submit = useCallback(
    async (e: FormEvent, form: PasswordFormType, token: string) => {
      let success = false;
      checkAndWatchForm(e, form);
      if (form.formState.isValid) {
        setLoading(true);

        try {
          const password = form.getValues().password as string;

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
      }

      if (success) {
        redirect("/sign-in");
      }
      setLoading(false);
    },

    [],
  );
  return { handle_submit, loading };
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
