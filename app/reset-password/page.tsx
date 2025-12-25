import ResetPasswordAction from "@/components/ui/actions/forms/auth/ResetPassword.action";
import { authNotRequired } from "@/helpers/authHelper.helper";
import { Suspense } from "react";

const ResetPasswordPage = async () => {
  await authNotRequired();
  return (
    <Suspense fallback={<>Loading...</>}>
      <ResetPasswordAction />;{" "}
    </Suspense>
  );
};

export default ResetPasswordPage;
