"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "../../molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { SignInFormType } from "@/validations/user.zod";
import { FormEvent, memo } from "react";

interface Props {
  form: SignInFormType;
  handle_submit: (formEvent: FormEvent) => void;
  formName: string;
}

const emailInputValues = {
  name: "email",
  labelTitle: "Email",
  type: "email",
  placeholder: "John@mail.com ",
  autoComplete: "off",
};

const passwordInputValues = {
  name: "password",
  labelTitle: "Password",
  type: "password",
  placeholder: "Your password ",
  autoComplete: "off",
};

const LoginFormContent = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={`form-${formName}`} onSubmit={handle_submit}>
      <FieldGroup>
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
      </FieldGroup>
    </form>
  );
};

export default memo(LoginFormContent);
