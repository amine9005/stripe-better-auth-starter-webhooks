import { useForm } from "react-hook-form";
import {
  SignInSchemaType,
  SignUpSchemaType,
  signInSchema,
  signUpSchema,
} from "@/validations/user.zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const useSignIn = () => {
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
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
