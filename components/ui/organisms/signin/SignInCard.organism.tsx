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
import { SignInFormType } from "@/validations/user.zod";
import { FormEvent, memo } from "react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import LoadingSubmitButton from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";
import ButtonLink from "@/components/ui/molecules/Button-Link/Button-Link.molecule";
import SocialLoginsOrganism from "@/components/ui/organisms/social-logins/SocialLogins.organism";
interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: SignInFormType;
  card: Card;
  formName: string;
  loading: boolean;
  handle_submit: (formEvent: FormEvent) => void;
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
      <CardFooter className="flex flex-col space-y-2">
        <div className="flex justify-center items-center w-full">
          <LoadingSubmitButton
            width={"full"}
            loading={loading}
            formName={formName}
          >
            Sign In
          </LoadingSubmitButton>
        </div>
        <SocialLoginsOrganism />

        <div>
          Don&apos;t have an account?
          <ButtonLink href="/sign-up">Sign Up</ButtonLink>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SignInFormCard;
