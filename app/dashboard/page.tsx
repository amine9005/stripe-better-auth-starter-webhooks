import { authIsRequired } from "@/helpers/authHelper.helper";
import { signOutAction } from "@/app/api/actions/auth/auth.controller";
import { Button } from "@/components/ui/atoms/button/button";

const DashboardPage = async () => {
  await authIsRequired();
  return (
    <Button onClick={signOutAction} variant={"default"}>
      Logout
    </Button>
  );
};

export default DashboardPage;
