"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { Controller } from "react-hook-form";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import LoadingSubmitButton from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";
import { useResetPasswordSubmit } from "@/hooks/useAuthSubmit.hook";
import { useResetPasswordForm } from "@/hooks/useAuthForms.hook";
import { memo } from "react";
import { redirect, useSearchParams } from "next/navigation";

const ResetPasswordAction = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const form = useResetPasswordForm();
  const { handleSubmit } = form;
  const { onSubmit, loading } = useResetPasswordSubmit(token);

  if (!token) {
    redirect("/request-reset-password");
  }

  const formName = "reset-password";

  const passwordInputValues = {
    name: "password",
    labelTitle: "New Password",
    type: "password",
    placeholder: "Your New Password ",
    autoComplete: "off",
  };

  const confirmPasswordInputValues = {
    name: "confirmPassword",
    labelTitle: "Confirm Password",
    type: "password",
    placeholder: "Confirm Your New Password ",
    autoComplete: "off",
  };
  return (
    <div className="flex justify-center items-center p-4 h-dvh">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle className="flex justify-center items-center">
            <H2 size={"xl"}>Reset Your Password</H2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form id={"form-" + formName} onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
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
              />{" "}
              <Controller
                name="confirmPassword"
                control={form?.control}
                render={({ field, fieldState }) => (
                  <InputField
                    field={field}
                    fieldState={fieldState}
                    item={confirmPasswordInputValues}
                  />
                )}
              />{" "}
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <LoadingSubmitButton width="lg" loading={loading} formName={formName}>
            Reset Password
          </LoadingSubmitButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default memo(ResetPasswordAction);
