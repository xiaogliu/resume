const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  entry: {
    // entry files, can multiple files
    index: "./src/scripts/index.ts"
  },
  output: {
    // output directory
    path: path.resolve(__dirname, "dist"),
    // variable in []
    filename: "js/[name].[hash:8].js",
    // html static file directory
    publicPath: "/"
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
                  node: true
                }
              }
            ],
            "@babel/typescript"
          ]
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require('postcss-cssnext')(),
                require('cssnano')()
              ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require('postcss-cssnext')(),
                require('cssnano')()
              ]
            }
          },
          "sass-loader"
        ]
      }
      // {
      //   test: /\.(png|jpg|jpeg|svg|gif)$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "img/[name].[ext]"
      //       }
      //     }
      //   ]
      // }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      // 这个干嘛用？
      chunkFileName: "[id].[contenthash:8].css"
    }),
    new HtmlWebpackPlugin({ template: "./src/pages/index.html" }),
    // 直接调用
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  mode: "development",
  // 生产环境
  // devtool: "source-map",
  // 开发环境
  devtool: "cheap-module-eval-source-map",
  // 使用webpack-dev-server，提高开发效率
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    open: true
  }
};
