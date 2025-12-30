"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/atoms/button/button";
import { useEffect, useState } from "react";
import { isAuthenticatedAction } from "@/app/api/actions/auth/auth.controller";

interface Props {
  href: string;
  paymentLink?: string;
  text: string;
}

const PaymentLinkMolecule = ({ href, paymentLink, text }: Props) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const setUserData = async () => {
      setUser(await isAuthenticatedAction());
    };

    setUserData();
  });

  const handle_click = (href: string, paymentLink: string | undefined) => {
    if (paymentLink) {
      if (user) {
        redirect(paymentLink);
      } else {
        localStorage.setItem("stripe_payment_link", paymentLink);
        redirect("/sign-in");
      }
    }
    redirect(href);
  };

  return (
    <Button onClick={() => handle_click(href, paymentLink)}>{text}</Button>
  );
};

export default PaymentLinkMolecule;
