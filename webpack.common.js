const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

// HtmlWebpackPlugin，模板生成相关的配置，每个对于一个页面的配置，有几个写几个
const pagesArr = ['index'];
const HtmlWebpackPluginArr = pagesArr.map(e => {
  return new HtmlWebpackPlugin({
    // 根据模板插入css/js等生成最终HTML
    favicon: './src/img/favicon.ico', // favicon路径，通过webpack引入同时可以生成hash值
    filename: `./${e}.html`, // 生成的html存放路径，相对于path
    template: `./src/view/${e}.html`, // html模板路径
    inject: 'body', // js插入的位置，true/'head'/'body'/false
    chunks: ['common', e], // 需要引入的chunk，不配置就会引入所有页面的资源
    minify: {
      // 压缩HTML文件
      removeComments: true, // 移除HTML中的注释
      collapseWhitespace: false, // 删除空白符与换行符
    },
  });
});

// 多页面应用有多个入口
const entryFiles = {
  index: './src/js/pages/index.js',
};

module.exports = {
  // 配置入口文件，有几个写几个
  entry: entryFiles,
  module: {
    // 加载器，关于各个加载器的参数配置，可自行搜索之。
    rules: [
      // 解析 ts
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: true,
                },
              },
            ],
            '@babel/typescript',
          ],
        },
        include: [__dirname],
        exclude: /node_modules/,
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        },
      },
    ],
  },
  // babel 识别 typescript
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // 将公共模块提取，生成名为`common`的chunk
      // chunks: ['index', 'business'], // 提取哪些模块共有的部分
      minChunks: 3, // 提取至少3个模块共有的部分
    }),
    // new BundleAnalyzerPlugin(), // 打包分析，只在需要的时候开启
  ],
};

module.exports.plugins = module.exports.plugins.concat(HtmlWebpackPluginArr);
