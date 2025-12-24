import React, { FormEvent, memo } from "react";
import { Button } from "@/components/ui/atoms/button/button";
import { Loader2 } from "lucide-react";
import {
  VariantOptions,
  WidthOptions,
} from "@/components/ui/atoms/button/button.variants";

interface LoadingSubmitButtonProps {
  loading: boolean;
  formName?: string;
  width?: WidthOptions;
  type?: "submit" | "button" | "reset";
  children?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: VariantOptions;
  handle_click?: (formEvent: FormEvent) => void;
}

const LoadingSubmitButton = ({
  loading,
  formName = "",
  children,
  width = "md",
  type = "submit",
  leftIcon,
  rightIcon,
  variant,
  handle_click,
}: LoadingSubmitButtonProps) => {
  return (
    <Button
      disabled={loading}
      type={type}
      form={`form-${formName}`}
      width={width}
      variant={variant}
      onClick={handle_click}
    >
      {leftIcon}
      {children}
      {!loading ? rightIcon : <Loader2 className="size-5 animate-spin" />}
    </Button>
  );
};

export default LoadingSubmitButton;
