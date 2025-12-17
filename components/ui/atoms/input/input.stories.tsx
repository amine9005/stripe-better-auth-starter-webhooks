import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchInput: Story = {
  args: {
    disabled: false,
    placeholder: "Looking for...",
  },
};

export const Filled: Story = {
  args: {
    disabled: false,
    placeholder: "",
    value: "This How Your Text Looks Like",
  },
};

export const Empty: Story = {
  args: {
    disabled: false,
    placeholder: "Place Holder Text",
  },
};
