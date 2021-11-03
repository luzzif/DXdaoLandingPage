const { GitRevisionPlugin } = require("git-revision-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { GenerateSW } = require("workbox-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

exports.onCreateWebpackConfig = ({ stage, getConfig, actions }) => {
  if (stage !== "build-javascript") return;

  const gitRevisionPlugin = new GitRevisionPlugin();
  const shortCommitHash = gitRevisionPlugin.commithash().substring(0, 8);

  const config = getConfig();

  config.output.filename = `static/js/[name].${shortCommitHash}.js`;
  config.output.chunkFilename = `static/js/[name].${shortCommitHash}.chunk.js`;

  const correctPlugins = [];
  for (let i = 0; i < config.plugins.length; i++) {
    const plugin = config.plugins[i];
    if (plugin instanceof GenerateSW || plugin instanceof WebpackManifestPlugin)
      continue;
    if (plugin instanceof MiniCssExtractPlugin)
      correctPlugins.push(
        new MiniCssExtractPlugin({
          filename: `static/css/[name].${shortCommitHash}.css`,
          chunkFilename: "static/css/[name].chunk.css",
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
            "static/media/[name].[ext]";
        }
      }
    }
  }
  console.log(JSON.stringify(config.module.rules, undefined, 4));

  actions.replaceWebpackConfig(config);
};
