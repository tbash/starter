const webpack = require("webpack");
const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

module.exports = {
  output: {
    publicPath: "/",
    chunkFilename: "static/[name].bundle.js",
    filename: "static/main.[hash:8].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextPlugin("static/main.[hash:8].css"),
    new PurgecssPlugin({
      paths: glob.sync("src/**/*.*"),
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["elm", "js"]
        }
      ]
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "env",
                {
                  targets: {
                    browsers: ["last 2 versions"]
                  }
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                minimize: { discardComments: { removeAll: true } }
              }
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: "elm-webpack-loader"
      }
    ]
  }
};
