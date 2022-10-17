const { config } = require("@storybook/addon-actions");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/Design-System/";
    }
    return config;
  },
  "staticDirs": [
    "../public"
  ],
    viteFinal: (config, {configType}) => {
      if(configType === 'PRODUCTION'){
        config.base = '/Design-System'
      }
    }
};
