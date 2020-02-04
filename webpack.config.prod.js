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
        {
          test: /.css$/,
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
  // module: {
  //   rules: [
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       //正则，以....结尾
  //       use: ["file-loader"]
  //     },
  //     {
  //       test: /\.styl$/,
        
  //       loader: ["style-loader", "css-loader", "stylus-loader"]
  //     },
  //     {
  //       test: /\.less$/,
  //       loader: ["style-loader", "css-loader", "less-loader"]
  //     },
  //     {
  //       test: /\.scss$/i,
  //       use: [
  //         "style-loader",
  //         "css-loader",
  //         {
  //           loader: "sass-loader",
  //           options: {
  //             implementation: require("dart-sass")
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // }
};