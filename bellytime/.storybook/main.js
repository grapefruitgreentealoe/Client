module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  name: "@storybook/addon-postcss",
  options: {
    cssLoaderOptions: {
      // When you have splitted your css over multiple files
      // and use @import('./other-styles.css')
      importLoaders: 1,
    },
    postcssLoaderOptions: {
      // When using postCSS 8
      implementation: require("postcss"),
    },
  },
};
const path = require("path");

// module.exports = {
//   stories: [
//     "../components/**/*.stories.mdx",
//     "../components/**/*.stories.@(js|jsx|ts|tsx)",
//   ],
//   addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
//     core: {
//       builder: "webpack5"
//     }
//     ,
// };
// const path = require("path");