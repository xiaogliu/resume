const merge = require("webpack-merge");
const path = require("path");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: "production",
  output: {
    // output directory
    path: path.resolve(__dirname, "../dist"),
    // variable in []
    filename: "js/[name].[chunkhash:8].js",
    // html static file directory
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            // postcss plugins is function
            options: {
              plugins: () => [
                require("postcss-cssnext")(),
                require("cssnano")()
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
                require("postcss-cssnext")(),
                require("cssnano")()
              ]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css"
    }),
    // es6 tree shaking, must use if add minicssextractplugin
    new TerserPlugin()
  ],
  optimization: {
    // webpack has compress code as default
    // but why config this will occur error (es6 code not transfered)
    // minimizer: [new UglifyJsPlugin()]
  },
  // 生产环境
  devtool: "source-map"
});
