import { useForm } from "react-hook-form";
import {
  SignInSchemaType,
  SignUpSchemaType,
  emailSchema,
  EmailSchemaType,
  signInSchema,
  signUpSchema,
  passwordSchema,
  PasswordSchemaType,
} from "@/validations/user.zod";

import { zodResolver } from "@hookform/resolvers/zod";

export const useSignIn = () => {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  return form;
};

export const useSignUp = () => {
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return form;
};

export const useRequestResetPasswordForm = () => {
  const form = useForm<EmailSchemaType>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  return form;
};

export const useResetPasswordForm = () => {
  const form = useForm<PasswordSchemaType>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  return form;
};
