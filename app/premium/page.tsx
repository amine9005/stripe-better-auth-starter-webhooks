import { isPremiumUser } from "@/helpers/authHelper.helper";

const PremiumPage = async () => {
  await isPremiumUser();

  return <div>Welcome to the Premium Page!</div>;
};

export default PremiumPage;
