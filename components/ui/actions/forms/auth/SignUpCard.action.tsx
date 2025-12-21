"use client";
import { memo } from "react";
import { useSignUp } from "@/hooks/useAuthForms.hook";
import FormLayout from "@/components/ui/layouts/Form.layout";
import SignUpFormCard from "@/components/ui/organisms/signup/SignUpCard.organism";
import { useSignUpSubmit } from "@/hooks/useAuthSubmit.hook";

const SignInCardAction = () => {
  const form = useSignUp();
  const { handle_submit, loading } = useSignUpSubmit();

  const card = { title: "Welcome, Sign Up", description: "" };

  return (
    <FormLayout>
      {" "}
      <SignUpFormCard
        loading={loading}
        form={form}
        card={card}
        formName="sign-in"
        handle_submit={(e) => handle_submit(e, form)}
      />
    </FormLayout>
  );
};

export default memo(SignInCardAction);
