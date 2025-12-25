import { Button } from "@/components/ui/atoms/button/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-between items-center p-10">
      <Link href={"/sign-up"}>
        <Button>Sign Up</Button>
      </Link>

      <Link href={"/sign-in"}>
        <Button>Sign In</Button>
      </Link>
      <Link href={"/verify-email"}>
        <Button>Verify Email</Button>
      </Link>
    </main>
  );
}
