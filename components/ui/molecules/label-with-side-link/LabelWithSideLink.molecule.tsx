import ButtonLink from "@/components/ui/molecules/Button-Link/Button-Link.molecule";

interface Values {
  labelText: string;
  href: string;
  linkText: string;
}

interface Props {
  values: Values;
}

const LabelWithSideLink = ({ values }: Props) => {
  return (
    <>
      {values.labelText}{" "}
      <div className="flex items-center justify-end w-full">
        <ButtonLink href={values.href}>{values.linkText}</ButtonLink>
      </div>
    </>
  );
};

export default LabelWithSideLink;
