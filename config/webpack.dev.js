const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    // output directory
    path: path.resolve(__dirname, "../dist"),
    // variable in []
    filename: "js/[name].[hash:8].js",
    // html static file directory
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  devtool: "inline-source-map",
  // 使用webpack-dev-server，提高开发效率
  plugins: [
    // 直接调用
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    hot: true,
    open: true
  }
});
