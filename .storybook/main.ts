import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-themes",
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["..\\public"],
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
};
export default config;
