import GoogleSignInButton from "@/components/ui/molecules/google-sign-in-button/GoogleSignInButton.molecule";
import { memo } from "react";

const SocialLoginsOrganism = () => {
  return (
    <div className="w-full">
      <GoogleSignInButton />
    </div>
  );
};

export default memo(SocialLoginsOrganism);
