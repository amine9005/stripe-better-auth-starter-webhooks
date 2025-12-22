import ResetPasswordAction from "@/components/ui/actions/forms/auth/ResetPassword.action";
import { authNotRequired } from "@/helpers/authHelper.helper";

const ResetPasswordPage = async () => {
  await authNotRequired();
  return <ResetPasswordAction />;
};

export default ResetPasswordPage;
