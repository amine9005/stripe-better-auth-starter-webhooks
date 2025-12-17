import SearchBar1 from "@/components/ui/molecules/search/searchBar1/searchBar1.molecule";
import Hero from "@/components/ui/organisms/Hero";
// import LoginTemplate from "@/components/ui/organisms/login/login.organism";
import { Pricing } from "@/components/ui/organisms/Pricing";
// import LabeledInputWithMessage from "@/components/ui/molecules/LabeledInputWithMessage.molecule";
// import UserZod from "@/components/validations/user.zod";

export default function Home() {
  return (
    <main>
      Hello World!
      {/* <Hero /> */}
      {/* <Pricing /> */}
      {/* <LoginTemplate /> */}
      {/* <LabeledInputWithMessage id={"1"} /> */}
      {/* <UserZod /> */}
      <SearchBar1 />
    </main>
  );
}
