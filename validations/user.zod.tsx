import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const passwordValidation = z
  .string()
  .min(8, { message: "Password should have minimum length of 8" })
  .max(31, "Password is too long")
  .regex(/^(?=.*[A-Z]).{8,}$/, {
    message: "Should Contain at least one Uppercase letter.",
  })
  .regex(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, {
    message: "Password should contain at least one special character.",
  })
  .regex(/[0-9]/, { message: "Password should have at least one number." });

export const usernameValidation = z
  .string()
  .min(3, { message: "Username must be at least 3 char longs" })
  .max(31, { message: "Username cannot exceed 20 characters" })
  .regex(/^[a-z0-9A-Z ]+$/, "Username must not contain special characters");
export const emailValidation = z.email({ message: "Invalid Email Address" });

export const signUpSchema = z
  .object({
    username: usernameValidation,
    email: emailValidation,
    password: passwordValidation,
    confirmPassword: passwordValidation,
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export const signInSchema = z.object({
  email: emailValidation,
  password: passwordValidation,
  remember: z.boolean().optional(),
});

export const emailSchema = z.object({
  email: emailValidation,
});

export const passwordSchema = z
  .object({
    password: passwordValidation,
    confirmPassword: passwordValidation,
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });

export type PasswordSchemaType = z.infer<typeof passwordSchema>;

export type PasswordFormType = UseFormReturn<PasswordSchemaType>;

export type EmailSchemaType = z.infer<typeof emailSchema>;

export type EmailFormType = UseFormReturn<EmailSchemaType>;

export type SignInSchemaType = z.infer<typeof signInSchema>;

export type SignInFormType = UseFormReturn<SignInSchemaType>;

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export type SignUpFormType = UseFormReturn<SignUpSchemaType>;
