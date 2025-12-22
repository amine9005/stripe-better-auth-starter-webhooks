import { authNotRequired } from "@/helpers/authHelper.helper";

const VerifyEmailPage = async () => {
  await authNotRequired();

  return <div>VerifyEmailPage</div>;
};

export default VerifyEmailPage;
