import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Button } from "./button";
import { InputType } from "storybook/internal/types";
import { sizeOptions, variantOptions, widthOptions } from "./button.variants";

export const ActionData = {
  onClick: fn(),
  children: "Default Button",
};

const variantKnobs = {
  control: "select",
  description: "button variants",
  options: Object.keys(variantOptions),
} as InputType;
const sizeKnobs = {
  control: "select",
  description: "size variants",
  options: Object.keys(sizeOptions),
} as InputType;

const widthKnobs = {
  control: "select",
  description: "size variants",
  options: Object.keys(widthOptions),
} as InputType;

export const buttonKnobs = {
  variant: variantKnobs,
  size: sizeKnobs,
  width: widthKnobs,
};

const meta: Meta<typeof Button> = {
  title: "Atoms/Button/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { ...ActionData },

  argTypes: buttonKnobs,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    disabled: false,
    children: "Default button",
  },
};

export const Search: Story = {
  args: {
    variant: "default",
    size: "default",
    disabled: false,
    children: "Search",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "default",
    disabled: false,
    children: "Outline button",
  },
};
