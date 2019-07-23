const path = require("path");
const webpack = require("webpack");
const htmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry: {
    app: path.join(__dirname, "src", "main.js"),
    detail: path.join(__dirname, "src", "detail.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "postcss-loader", 
          "sass-loader"
        ],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].production.[ext]",
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new htmlPlugin({
      template: path.join(__dirname, "src", "index.html"),
      chunks: ['app'],
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
        removeComments: true,
      },
    }),
    new htmlPlugin({
      filename:'detail.html',
      template: path.join(__dirname,"src","detail.html"),
      chunks: ['detail'],
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: false,
        removeComments: true,
      },
  }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
