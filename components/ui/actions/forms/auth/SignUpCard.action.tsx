"use client";
import { SignUpSchemaType } from "@/validations/user.zod";
import { FormEvent, memo, useState } from "react";
import { useSignUp } from "@/hooks/useSignIn.hook";
import FormLayout from "@/components/ui/layouts/Form.layout";
import SignUpFormCard from "@/components/ui/organisms/signup/SignUpCard.organism";
import { signUpAction } from "@/app/api/actions/auth/main";

const SignInCardAction = () => {
  const form = useSignUp();
  const [loading, setLoading] = useState(false);

  const card = { title: "Welcome, Sign Up", description: "" };

  const handle_submit = async (e: FormEvent) => {
    e.preventDefault();
    form.trigger();
    form.watch(() => {
      form.trigger();
    });
    if (form.formState.isValid) {
      console.log("here here");

      setLoading(true);
      const resp = await signUpAction(form.getValues());
      console.log(resp);
    }

    setLoading(false);
  };

  return (
    <FormLayout>
      {" "}
      <SignUpFormCard
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
