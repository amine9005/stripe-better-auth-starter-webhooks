import { Button } from "@/components/ui/atoms/button/button";
import Link from "next/link";
import { WidthOptions } from "@/components/ui/atoms/button/button.variants";
import { memo } from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  width?: WidthOptions;
}

const ButtonLink = ({ width, children, href }: Props) => {
  return (
    <Button
      width={width}
      variant={"link"}
      type="button"
      className="text-primary font-bold px-1 ml-3"
    >
      <Link href={href} className="text-[1rem]">
        {" "}
        {children}
      </Link>
    </Button>
  );
};

export default memo(ButtonLink);
