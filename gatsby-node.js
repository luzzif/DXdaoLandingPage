const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  if (stage !== "build-javascript") return;

  const config = getConfig();

  config.output.filename = `static/js/[name].js`;
  config.output.chunkFilename = `static/js/[name].chunk.js`;

  const correctPlugins = [];
  for (let i = 0; i < config.plugins.length; i++) {
    const plugin = config.plugins[i];
    if (plugin instanceof GenerateSW || plugin instanceof WebpackManifestPlugin)
      continue;
    if (plugin instanceof MiniCssExtractPlugin)
      correctPlugins.push(
        new MiniCssExtractPlugin({
          filename: `static/css/[contenthash].css`,
          chunkFilename: "static/css/[contenthash].chunk.css",
        })
      );
    else correctPlugins.push(plugin);
  }
  config.plugins = correctPlugins;

  for (let i = 0; i < config.module.rules.length; i++) {
    if (config.module.rules[i].use && config.module.rules[i].use.length) {
      for (let j = 0; j < config.module.rules[i].use.length; j++) {
        if (
          config.module.rules[i].use[j].loader ===
            require.resolve("file-loader") ||
          config.module.rules[i].use[j].loader === require.resolve("url-loader")
        ) {
          config.module.rules[i].use[j].options.name =
            "static/media/[contenthash].[ext]";
        }
        if (
          config.module.rules[i].use[j].loader.includes(
            "mini-css-extract-plugin"
          )
        ) {
          console.log("HERE MUGU");
          config.module.rules[i].use[j].options.filename =
            "static/media/[contenthash].[ext]";
        }
      }
    }
  }
  config.optimization.moduleIds = "named";

  actions.replaceWebpackConfig(config);
};
