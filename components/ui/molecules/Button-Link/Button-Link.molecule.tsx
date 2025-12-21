import { Button } from "@/components/ui/atoms/button/button";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}

const ButtonLink = ({ children, href }: Props) => {
  return (
    <Button variant={"link"} className="text-primary font-bold px-1">
      <Link href={href}> {children}</Link>
    </Button>
  );
};

export default ButtonLink;
