import "../app/globals.css";
import type { Preview } from "@storybook/nextjs-vite";

// yarn exec playwright -- install chromium --with-deps
import { withThemeByClassName } from "@storybook/addon-themes";
import { background, themes } from "storybook/theming";

/* snipped for brevity */

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
];

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
