const webpack = require("webpack");
const path = require("path");
const webpackConfig = require("./webpack.config.js");
const OfflinePlugin = require("offline-plugin");

function createConfig() {
  const config = Object.assign({}, webpackConfig);
  config.mode = "production";
  config.plugins = [
    new OfflinePlugin({
      ServiceWorker: {
        minify: false
      },
      safeToUseOptionalCaches: true,
      main: ["index.html", "bundle*.js", "*.bundle*.js"],
      additional: ["*.png"],
      optional: [":rest:"]
    })
  ];
  return config;
}

const configs = [createConfig()];

module.exports = configs;
