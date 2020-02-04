var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base=require("./webpack.config.base.js")
//require和import的不同,前者是赋值，把相应对象复制过来，后者是编译时引用，后者性能好
module.exports = {
  ...base,
  mode: 'production',
  //development 开发者模式
  //production 发布模式
    module: {
      rules: [
        ...base.module.rules,
        {
          test: /\.(scss|css|less|styl)$/,
          //这里很重要，由于base中没有文件输出的路由，所以这里要覆盖
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            'css-loader',
          ],
        },
      ],
    },  
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false, 
    }),
    //这个对象用于输出css文件

  ],
};