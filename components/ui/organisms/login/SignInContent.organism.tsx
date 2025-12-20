"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import InputField from "../../molecules/input-field/InputField.molecule";
import { Controller } from "react-hook-form";
import { SignInFormType, SignInSchemaType } from "@/validations/user.zod";
import { memo } from "react";

interface Props {
  form: SignInFormType;
  handle_submit: (data: SignInSchemaType) => void;
  formName: string;
}
// email input values are defined similarly to the password input values. The `Controller` component is used to manage the form state, and it passes the form data to the `handle_submit` function when the form is submitted. The `FieldGroup` component is used to group the input fields together. The `emailInputValues` and `passwordInputValues` objects define the properties of each input field, such as name, label title and type. The `memo` function is used to optimize the component by preventing unnecessary re-renders when the form state changes.

const emailInputValues = {
  name: "email",
  labelTitle: "Email",
  type: "email",
  placeholder: "John@mail.com ",
  autoComplete: "off",
};

// password input values are defined similarly to the email input values. The `Controller` component is used to manage the form state, and it passes the form data to the `handle_submit` function when the form is submitted. The `FieldGroup` component is used to group the input fields together. The `emailInputValues` and `passwordInputValues` objects define the properties of each input field, such as name, label title and type. The `memo` function is used to optimize the component by preventing unnecessary re-renders when the form state changes.
const passwordInputValues = {
  name: "password",
  labelTitle: "Password",
  type: "password",
  placeholder: "Your password ",
  autoComplete: "off",
};

// LoginFormContent component is a functional component that takes in the form, formName and handle_submit props. It returns a form element with two input fields: email and password. The `Controller` component is used to manage the form state, and it passes the form data to the `handle_submit` function when the form is submitted. The `FieldGroup` component is used to group the input fields together. The `emailInputValues` and `passwordInputValues` objects define the properties of each input field, such as name, label title and type. The `memo` function is used to optimize the component by preventing unnecessary re-renders when the form state changes.
const LoginFormContent = ({ form, formName, handle_submit }: Props) => {
  return (
    <form id={`form-${formName}`} onSubmit={form?.handleSubmit(handle_submit)}>
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
