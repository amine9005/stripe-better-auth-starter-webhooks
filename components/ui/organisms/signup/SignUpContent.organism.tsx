"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "../../molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { SignUpFormType } from "@/validations/user.zod";
import { FormEvent, memo } from "react";

interface Props {
  form: SignUpFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const usernameInputValues = {
  name: "username",
  labelTitle: "Name",
  type: "text",
  placeholder: "Your Full Name ",
  autoComplete: "on",
};

const emailInputValues = {
  name: "email",
  labelTitle: "Email",
  type: "email",
  placeholder: "John@mail.com ",
  autoComplete: "on",
};

const passwordInputValues = {
  name: "password",
  labelTitle: "Password",
  type: "password",
  placeholder: "Your password ",
  autoComplete: "off",
};
const passwordConfirmInputValues = {
  name: "confirmPassword",
  labelTitle: "Confirm Password",
  type: "password",
  placeholder: "Confirm Password",
  autoComplete: "off",
};
//
const SignUpFormContent = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={`form-${formName}`} onSubmit={handle_submit}>
      <FieldGroup>
        <Controller
          name="username"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={usernameInputValues}
            />
          )}
        />{" "}
        <Controller
          name="email"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={emailInputValues}
            />
          )}
        />{" "}
        <Controller
          name="password"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={passwordInputValues}
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={form?.control}
          render={({ field, fieldState }) => (
            <InputField
              field={field}
              fieldState={fieldState}
              item={passwordConfirmInputValues}
            />
          )}
        />
      </FieldGroup>
    </form>
  );
};

export default memo(SignUpFormContent);
