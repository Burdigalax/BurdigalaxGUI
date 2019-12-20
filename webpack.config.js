const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const getConfig = env => ({
  entry: {
    vendors: ["babel-polyfill", "react-hot-loader/patch"],
    onShop: "./src/onShop.js",
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].burdigalax.js",
    publicPath: env.production
      ? "http://asset/burdigalax/client/gui/"
      : undefined
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require("html-webpack-template"),
      inject: false,
      appMountId: "app"
    }),
    new HtmlWebpackPlugin({
      filename: "onShop.html",
      template: "src/onShop.html",
      chunks: ["onShop", "vendors", "commons", "runtime"]
    })
  ],
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        demo_vendors: {
          test: /react-ace/,
          chunks: "initial",
          name: "demo-vendors"
        },
        common: {
          test: /[\\/]node_modules[\\/]((?!(react-ace)).*)[\\/]/,
          name: "commons",
          chunks: "initial"
        }
      }
    }
  }
});

module.exports = (env, argv) => {
  const config = getConfig(env);
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = "[name].[hash].js";
  }

  return config;
};
