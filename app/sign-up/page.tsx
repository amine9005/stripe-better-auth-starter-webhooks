import SignUpCardAction from "@/components/ui/actions/forms/auth/SignUpCard.action";
import { authNotRequired } from "@/helpers/authHelper.helper";

const SignUpPage = async () => {
  await authNotRequired();
  return <SignUpCardAction />;
};

export default SignUpPage;
