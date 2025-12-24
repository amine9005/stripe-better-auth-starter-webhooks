import { Checkbox } from "@/components/ui/atoms/checkbox/checkbox";
import { Label } from "@/components/ui/atoms/label/label";
import { memo } from "react";
import { UseFormReturn } from "react-hook-form";

interface Values {
  labelTitle: string | React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
}

interface Props {
  values: Values;
  className?: string;
}

const FormsCheckBox = ({ values, className }: Props) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Checkbox
        id="remember"
        onClick={() => {
          values.form.setValue("remember", !values.form.getValues("remember"));
        }}
      />
      <Label className="hover:cursor-pointer" htmlFor="remember">
        {values.labelTitle}
      </Label>
    </div>
  );
};

export default memo(FormsCheckBox);
