const webpack = require("webpack"); //to access built-in plugins
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm

module.exports = {
  entry: {
    // entry files, can multiple files
    index: "./src/scripts/index.ts"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  ie: "10"
                }
              }
            ],
            "@babel/typescript"
          ]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html"
    })
  ]
};
