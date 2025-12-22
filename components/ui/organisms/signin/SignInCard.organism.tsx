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
import ButtonLink from "../../molecules/Button-Link/Button-Link.molecule";
import { Button } from "../../atoms/button/button";
import { useGoogleSignInHook } from "@/hooks/useGoogleSignIn.hook";
import Link from "next/link";
interface Card {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

interface Props {
  form: SignInFormType;
  card: Card;
  formName: string;
  loadings: boolean;
  handle_submit: (formEvent: FormEvent) => void;
}

const SignInFormCard = ({
  form,
  card,
  formName,
  handle_submit,
  loadings,
}: Props) => {
  const { signInWithGoogleFunc, loading } = useGoogleSignInHook();

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
      <CardFooter className="flex flex-col space-y-4">
        <Link href={"/reset-password"}>Reset Password</Link>
        <div>
          Don&apos;t have an account?
          <ButtonLink href="/sign-up">Sign Up</ButtonLink>
        </div>
        <div className="flex justify-center items-center">
          <LoadingSubmitButton loading={loadings} formName={formName}>
            Sign In
          </LoadingSubmitButton>
        </div>
        <span>Or</span>
        <Button
          disabled={loading}
          width={"full"}
          variant={"secondary"}
          type="button"
          onClick={signInWithGoogleFunc}
        >
          {" "}
          Google Sign In
        </Button>
      </CardFooter>
    </Card>
  );
};

export default memo(SignInFormCard);
