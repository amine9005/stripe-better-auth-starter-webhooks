import React from "react";
import { Button } from "@/components/ui/atoms/button/button";
import { Loader2 } from "lucide-react";
import { WidthOptions } from "@/components/ui/atoms/button/button.variants";

interface LoadingSubmitButtonProps {
  loading: boolean;
  formName: string;
  width?: WidthOptions;
  children?: React.ReactNode;
}

const LoadingSubmitButton = ({
  loading,
  formName,
  children,
  width,
}: LoadingSubmitButtonProps) => {
  return (
    <>
      <Button
        disabled={loading}
        type="submit"
        form={`form-${formName}`}
        width={width ? width : "md"}
      >
        {children}
        {loading && <Loader2 className="size-5 animate-spin" />}
      </Button>
    </>
  );
};

export default LoadingSubmitButton;
