const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/scss/app.scss")],
    },
  },

  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
});
