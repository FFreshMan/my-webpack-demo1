var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const base=require("./webpack.config.base.js")

module.exports = {
  ...base,
  //将所有base属性复制
  //后续重定义属性会覆盖原属性
  devtool: 'inline-source-map',
  //webpack-dev-server部分
  devServer: {
    contentBase: './dist',
       },
  //webpack-dev-server部分  
  mode: 'development',
  //development 开发者模式
  //production 发布模式
    module: {
      rules: [
        {
          test: /.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },  
};