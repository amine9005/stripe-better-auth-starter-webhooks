import React from "react";
import { Button } from "@/components/ui/atoms/button/button";
import { Loader2 } from "lucide-react";

interface LoadingSubmitButtonProps {
  loading: boolean;
  formName: string;
  children?: React.ReactNode;
}

const LoadingSubmitButton = ({
  loading,
  formName,
  children,
}: LoadingSubmitButtonProps) => {
  return (
    <>
      <Button
        disabled={loading}
        type="submit"
        form={`form-${formName}`}
        width={"md"}
      >
        {children}
        {loading && <Loader2 className="size-5 animate-spin" />}
      </Button>
    </>
  );
};

export default LoadingSubmitButton;
