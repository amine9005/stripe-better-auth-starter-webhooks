import { memo } from "react";

const FormLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-dvh p-4">{children}</div>
  );
};

export default memo(FormLayout);
