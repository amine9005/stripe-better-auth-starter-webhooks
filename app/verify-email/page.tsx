import VerifiyEmailAction from "@/components/ui/actions/forms/auth/VerifiyEmail.action";
import { authNotRequired } from "@/helpers/authHelper.helper";

const VerifyEmailPage = async () => {
  await authNotRequired();

  return <VerifiyEmailAction />;
};

export default VerifyEmailPage;
