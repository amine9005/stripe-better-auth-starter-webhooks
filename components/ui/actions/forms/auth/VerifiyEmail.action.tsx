import EmailSent from "@/components/ui/organisms/email-sent/EmailSent";
import { memo } from "react";

const emailSentValues = {
  cardTitle: "Check your email",
  cardDescription: "We've sent a verification email to your email address .",
  alertDescription: "If you don't see the email, check your spam folder.",
  redirectText: "Back to sign in",
  redirectLink: "/sign-in",
};

const VerifiyEmailAction = () => {
  return <EmailSent props={emailSentValues} />;
};

export default memo(VerifiyEmailAction);
