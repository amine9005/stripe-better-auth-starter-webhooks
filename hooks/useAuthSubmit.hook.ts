import {
  signInAction,
  signUpAction,
} from "@/app/api/actions/auth/auth.controller";
import { checkAndWatchForm } from "@/helpers/formsHelpers";
import { SignInFormType, SignUpFormType } from "@/validations/user.zod";
import { FormEvent, useCallback, useState } from "react";

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

export function useSignUpSubmit() {
  const [loading, setLoading] = useState(false);

  const handle_submit = useCallback(
    async (e: FormEvent, form: SignUpFormType) => {
      checkAndWatchForm(e, form);
      if (form.formState.isValid) {
        setLoading(true);
        const resp = await signUpAction(form.getValues());
        console.log(resp);
      }

      setLoading(false);
    },

    [],
  );
  return { handle_submit, loading };
}

export function useGoogleSignIn() {}
