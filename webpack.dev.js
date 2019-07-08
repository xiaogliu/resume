const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
    publicPath: '/', // 模板、样式、脚本、图片等资源对应的server上的路径
    filename: 'js/[name].[hash:8].js', // 每个页面对应的主js的生成配置
    chunkFilename: 'js/[id].chunk.js', // chunk生成的配置
  },
  module: {
    // 加载器，关于各个加载器的参数配置，可自行搜索之。
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap=true',
          'sass-loader?sourceMap=true',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './img/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(), // 热加载
  ],

  // 出错后显示源文件路径，方便调试
  devtool: 'inline-source-map',

  // 使用webpack-dev-server，提高开发效率
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
});
