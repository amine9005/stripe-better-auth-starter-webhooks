import { Meta, StoryObj } from "@storybook/nextjs-vite";
import SearchBar1 from "./searchBar1.molecule";

import { Search } from "@/components/ui/atoms/button/button.stories";
import { SearchInput } from "@/components/ui/atoms/input/input.stories";

const meta: Meta<typeof SearchBar1> = {
  title: "Molecules/Search/SearchBar1",
  component: SearchBar1,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    buttonProps: Search.args,
    buttonChildren: Search.args?.children,
    inputProps: SearchInput.args,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  // tags: ["!dev"],
};
