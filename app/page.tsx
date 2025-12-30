// "use client";
import Hero from "@/components/ui/organisms/Hero";
import { Pricing } from "@/components/ui/organisms/Pricing";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Hero />
      <Pricing />
    </main>
  );
}
