const merge = require('webpack-merge');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
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
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
})
