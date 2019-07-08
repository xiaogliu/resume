const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    publicPath: '/', // 模板、样式、脚本、图片等资源对应的server上的路径
    filename: 'js/[name].[chunkhash:8].js', // 每个页面对应的主js的生成配置
    chunkFilename: 'js/[id].chunk.js', // chunk生成的配置
  },
  module: {
    // 加载器，关于各个加载器的参数配置，可自行搜索之。
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/[name].[contenthash:8].css'), // 单独使用link标签加载css并设置路径，相对于output配置中的publickPath
    new UglifyJSPlugin(),
  ],
});
