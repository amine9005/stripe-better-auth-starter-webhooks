"use client";
import { memo } from "react";
import { useSignIn } from "@/hooks/useAuthForms.hook";
import FormLayout from "@/components/ui/layouts/Form.layout";
import SignInFormCard from "@/components/ui/organisms/signin/SignInCard.organism";
import { useSignInSubmit } from "@/hooks/useAuthSubmit.hook";

const SignInCardAction = () => {
  const form = useSignIn();
  const { handleSubmit } = form;
  const { onSubmit, loading } = useSignInSubmit(form);

  const card = { title: "Welcome back, Login", description: "" };

  return (
    <FormLayout>
      {" "}
      <SignInFormCard
        loading={loading}
        form={form}
        card={card}
        formName="sign-in"
        handle_submit={handleSubmit(onSubmit)}
      />
    </FormLayout>
  );
};

export default SignInCardAction;
