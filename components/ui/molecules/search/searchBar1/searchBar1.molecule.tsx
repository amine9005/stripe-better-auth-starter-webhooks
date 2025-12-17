import { Button } from "../../../atoms/button/button";
import { Input } from "../../../atoms/input/input";

interface Props {
  buttonChildren: React.ReactNode;
  buttonProps: React.ComponentProps<typeof Button>;
  inputProps: React.ComponentProps<typeof Input>;
}

const SearchBar1 = ({ buttonChildren, buttonProps, inputProps }: Props) => {
  return (
    <div className="relative flex justify-center items-center gap-1">
      <Input {...inputProps} />
      <Button
        variant={buttonProps.variant}
        size={buttonProps.size}
        width={buttonProps.width}
        onClick={buttonProps.onClick}
        {...buttonProps}
      >
        {" "}
        {buttonChildren}{" "}
      </Button>
    </div>
  );
};

export default SearchBar1;
