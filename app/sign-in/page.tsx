import SignInCardAction from "@/components/ui/actions/forms/auth/SignInCard.action";
import { authNotRequired } from "@/helpers/authHelper.helper";

const SignInPage = async () => {
  await authNotRequired();

  return <SignInCardAction />;
};

export default SignInPage;
