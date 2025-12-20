import {
  Meta,
  // StoryObj
} from "@storybook/nextjs-vite";
import { BugReportFormCard } from "./BugReportCard.organism";

const meta = {
  component: BugReportFormCard,
} satisfies Meta<typeof BugReportFormCard>;

export default meta;
// type Story = StoryObj<typeof meta>;

// const ButtonWithHooks = () => {

//   return <BugReportFormCard   />;
// };

// export const Primary = {
//   render: () => <ButtonWithHooks />,
// } satisfies Story;

// export const Default: Story = {
//   args: {},
// };
