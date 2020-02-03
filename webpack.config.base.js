var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'production',
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
          use: ['style-loader', 'css-loader'],
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
    //这个对象用于输出html文件
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