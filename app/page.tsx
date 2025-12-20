import { auth } from "@/lib/auth";

export default function Home() {
  const session = auth.api.getAccessToken();

  return <main>Home Page</main>;
}
