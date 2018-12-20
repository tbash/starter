const webpack = require("webpack");
const path = require("path");
const glob = require("glob-all");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  output: {
    publicPath: "/",
    chunkFilename: "static/[name].bundle.[hash:8].js",
    filename: "static/main.[hash:8].js"
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
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
    new MiniCssExtractPlugin({ filename: "static/main.[hash:8].css" }),
    new PurgecssPlugin({
      whitelist: ["body", "html"],
      paths: glob.sync(
        [
          path.join(__dirname, "src/**/*.js"),
          path.join(__dirname, "src/**/*.elm"),
          path.join(__dirname, "public/static/index.html")
        ],
        { nodir: true }
      ),
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
          from: "public/assets/",
          to: "assets/"
        },
        {
          from: "public/favicon.ico"
        },
        {
          from: "public/manifest.json"
        }
      ],
      {}
    ),
    new CompressionPlugin({
      test: /\.js$|\.css$|\.html$/,
      exclude: /index\.html$/
    })
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
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name].[ext]"
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              minimize: { discardComments: { removeAll: true } }
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: "elm-webpack-loader",
        options: {
          cwd: __dirname,
          runtimeOptions: "-A128m -H128m -n8m",
          optimize: true
        }
      }
    ]
  }
};
