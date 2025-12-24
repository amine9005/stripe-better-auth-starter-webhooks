import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/atoms/field/field";
import { Input } from "@/components/ui/atoms/input/input";
import { memo } from "react";

interface Item {
  name: string;
  labelTitle?: React.ReactNode;
  type?: string;
  placeholder?: string;
  autoComplete: string;
}
interface Props {
  item: Item;
  field: object;
  fieldState: {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    isValidating: boolean;
    error?: { message?: string | undefined } | undefined;
  };
}
const InputField = ({ item, field, fieldState }: Props) => {
  return (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={`form-${item.name}`}>{item.labelTitle}</FieldLabel>
      <Input
        {...field}
        id={`form-${item.name}`}
        type={item.type}
        aria-invalid={fieldState.invalid}
        placeholder={item.placeholder}
        autoComplete={item.autoComplete}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  );
};

export default InputField;
