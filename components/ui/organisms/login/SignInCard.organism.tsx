"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";
import LoginFormContent from "./SignInContent.organism";
import { SignInFormType, SignInSchemaType } from "@/validations/user.zod";
import { memo } from "react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import LoadingSubmitButton from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: SignInFormType;
  card: Card;
  formName: string;
  loading: boolean;
  handle_submit: (formData: SignInSchemaType) => void;
}

const SignInFormCard = ({
  form,
  card,
  formName,
  handle_submit,
  loading,
}: Props) => {
  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle className="flex justify-center items-center">
          <H2 size={"xl"}>{card.title}</H2>
        </CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginFormContent
          form={form}
          formName={formName}
          handle_submit={handle_submit}
        />
      </CardContent>
      <CardFooter className="flex justify-center items-center">
        <LoadingSubmitButton loading={loading} formName={formName}>
          Sign In
        </LoadingSubmitButton>
      </CardFooter>
    </Card>
  );
};

export default memo(SignInFormCard);
