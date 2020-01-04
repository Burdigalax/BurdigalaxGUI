const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const config = require("./config.js");
const serverPackageName = config.serverPackageName;

const getConfig = env => ({
  entry: {
    vendors: ["babel-polyfill", "react-hot-loader/patch"],
    onShop: "./src/onShop.js",
    gasStation: "./src/gasStation.js",
    inventory: "./src/inventory.js",
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].burdigalax.js",
    publicPath: env.production
      ? `http://asset/${serverPackageName}/client/gui/`
      : undefined
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: require("html-webpack-template"),
      inject: false,
      appMountId: "app"
    }),
    new HtmlWebpackPlugin({
      filename: "onShop.html",
      template: "src/onShop.html",
      chunks: ["onShop", "vendors", "commons"]
    }),
    new HtmlWebpackPlugin({
      filename: "gasStation.html",
      template: "src/gasStation.html",
      chunks: ["gasStation", "vendors", "commons"]
    }),
    new HtmlWebpackPlugin({
      filename: "inventory.html",
      template: "src/inventory.html",
      chunks: ["inventory", "vendors", "commons"]
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
        commons: {
          test: /[\\/]node_modules[\\/]((?!(react-ace)).*)[\\/]/,
          chunks: "initial",
          name: "commons"
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
