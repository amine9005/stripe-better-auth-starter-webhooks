"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/atoms/card/card";

import { SignUpFormType } from "@/validations/user.zod";
import { FormEvent, memo } from "react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import LoadingSubmitButton from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";
import SignUpContentOrganism from "./SignUpContent.organism";
import ButtonLink from "../../molecules/Button-Link/Button-Link.molecule";

interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: SignUpFormType;
  card: Card;
  formName: string;
  loading: boolean;
  handle_submit: (formEvent: FormEvent) => void;
}

const LoginFormCard = ({
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
        <SignUpContentOrganism
          form={form}
          formName={formName}
          handle_submit={handle_submit}
        />
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex justify-center items-center w-full">
          <LoadingSubmitButton
            width="full"
            loading={loading}
            formName={formName}
          >
            Sign Up
          </LoadingSubmitButton>
        </div>
        <div>
          have an account?
          <ButtonLink href="/sign-in">Sign In</ButtonLink>
        </div>
      </CardFooter>
    </Card>
  );
};

export default memo(LoginFormCard);
