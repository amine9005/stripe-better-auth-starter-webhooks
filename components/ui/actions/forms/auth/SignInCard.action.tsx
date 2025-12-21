"use client";
import { memo } from "react";
import { useSignIn } from "@/hooks/useAuthForms.hook";
import FormLayout from "@/components/ui/layouts/Form.layout";
import SignInFormCard from "@/components/ui/organisms/signin/SignInCard.organism";
import { useSignInSubmit } from "@/hooks/useAuthSubmit.hook";

const SignInCardAction = () => {
  const form = useSignIn();
  const { handle_submit, loading } = useSignInSubmit();

  const card = { title: "Welcome back, Login", description: "" };

  return (
    <FormLayout>
      {" "}
      <SignInFormCard
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
