"use client";
import { SignInSchemaType } from "@/validations/user.zod";
import { memo, useState } from "react";
import { useSignIn } from "@/hooks/useSignIn.hook";
import FormLayout from "@/components/ui/layouts/Form.layout";
import SignInFormCard from "@/components/ui/organisms/login/SignInCard.organism";

const SignInCardAction = () => {
  const form = useSignIn();
  const [loading, setLoading] = useState(false);

  const card = { title: "Welcome back, Login", description: "" };

  const handle_submit = (formData: SignInSchemaType) => {
    setLoading(true);
    console.log(JSON.stringify(formData));
    setLoading(false);
  };

  return (
    <FormLayout>
      {" "}
      <SignInFormCard
        loading={loading}
        form={form}
        card={card}
        formName="sign-in"
        handle_submit={handle_submit}
      />
    </FormLayout>
  );
};

export default memo(SignInCardAction);
