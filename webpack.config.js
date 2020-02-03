var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  //development 开发者模式
  //production 发布模式
  entry: './src/index.js',
  //这个是个js源文件目录
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
    //这里是转译后输出目录
    //使用一个哈希编码来更新缓存
  },
  devtool: 'inline-source-map',
  //webpack-dev-server部分
  devServer: {
    contentBase: './dist',
       },
  //webpack-dev-server部分
    module: {
      rules: [
        {
          test: /.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
            'css-loader',
          ],
          //输出成css文件
          // use: ['style-loader', 'css-loader'],
          //输出到页面中
        },
      ],
    },  
  plugins: [
    new HtmlWebpackPlugin({
      title: "my-webpack",
      //设置title，替代模板中的占位元素
      template: "src/asserts/template.html",
      //选择模板路径
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    })
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