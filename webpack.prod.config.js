const webpack = require("webpack");
const path = require("path");
const glob = require("glob-all");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    publicPath: "/",
    chunkFilename: "static/[name].bundle.[hash:8].js",
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
      whitelist: ["body", "html"],
      paths: glob.sync([
        path.join(__dirname, "src/**/*.js"),
        path.join(__dirname, "src/**/*.elm")
      ]),
      extractors: [
        {
          extractor: {
            extract: c => c.match(/[A-z0-9-:\/]+/g) || []
          },
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
            presets: [
              [
                "env",
                {
                  targets: {
                    browsers: ["last 2 versions"]
                  }
                }
              ]
            ],
            plugins: ["syntax-dynamic-import"]
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
