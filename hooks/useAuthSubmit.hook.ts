import {
  requestResetPasswordAction,
  resetPasswordAction,
  signInAction,
  signUpAction,
} from "@/app/api/actions/auth/auth.controller";
import { checkAndWatchForm } from "@/helpers/formsHelpers";
import {
  EmailFormType,
  PasswordFormType,
  SignInFormType,
  SignUpFormType,
} from "@/validations/user.zod";
import { FormEvent, useCallback, useState } from "react";

// TODO handle non verified email address login
// TODO add internet connection error message
export function useSignInSubmit() {
  const [loading, setLoading] = useState(false);

  const handle_submit = useCallback(
    async (e: FormEvent, form: SignInFormType) => {
      checkAndWatchForm(e, form);
      if (form.formState.isValid) {
        setLoading(true);
        try {
          await signInAction(form.getValues());
        } catch (error) {
          form.setError("password", {
            type: "custom",
            message: "Invalid Email or Password",
          });
          form.setError("email", {
            type: "custom",
            message: "Invalid Email or Password",
          });
          console.log("error ", error);
        }
      }

      setLoading(false);
    },

    [],
  );
  return { handle_submit, loading };
}

// TODO add internet connection error message
export function useSignUpSubmit() {
  const [loading, setLoading] = useState(false);

  const handle_submit = useCallback(
    async (e: FormEvent, form: SignUpFormType) => {
      checkAndWatchForm(e, form);
      if (form.formState.isValid) {
        setLoading(true);
        try {
          await signUpAction(form.getValues());
        } catch (error) {
          form.setError("email", {
            type: "custom",
            message: "Email Already Exists",
          });
          console.log("error ", error);
        }
      }

      setLoading(false);
    },

    [],
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
          form.setError("email", {
            type: "custom",
            message: "Email Does NOT Exists",
          });
          console.log("error ", error);
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
    async (e: FormEvent, form: PasswordFormType) => {
      checkAndWatchForm(e, form);
      if (form.formState.isValid) {
        setLoading(true);

        try {
          const password = form.getValues().password as string;

          await resetPasswordAction(password);
        } catch (error) {
          console.log("error ", error);
        }
      }

      setLoading(false);
    },

    [],
  );
  return { handle_submit, loading };
}
