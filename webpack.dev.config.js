const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    publicPath: "/",
    chunkFilename: "static/[name].bundle.js",
    filename: "static/main.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html")
    }),
    new CopyWebpackPlugin(
      [
        {
          from: "public/favicon.ico"
        },
        {
          from: "public/manifest.json"
        }
      ],
      {}
    )
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: {
          loader: "svg-inline-loader"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"],
            plugins: ["syntax-dynamic-import"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "postcss-loader"]
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: "elm-webpack-loader",
        options: {
          debug: true,
          warn: true
        }
      }
    ]
  },
  devServer: {
    inline: true,
    stats: { colors: true },
    compress: true,
    contentBase: "./public",
    watchContentBase: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    }
  }
};
