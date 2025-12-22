"use client";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { useResetPasswordForm } from "@/hooks/useAuthForms.hook";
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

const ResetPasswordAction = () => {
  const form = useResetPasswordForm();
  const { handle_submit, loading } = useResetPasswordSubmit();

  const formName = "reset-password";

  const emailInputValues = {
    name: "email",
    labelTitle: "Email",
    type: "email",
    placeholder: "Your Email Address ",
    autoComplete: "on",
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
          <form
            id={"form-" + formName}
            onSubmit={(e) => handle_submit(e, form)}
          >
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

export default ResetPasswordAction;
