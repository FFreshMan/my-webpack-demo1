var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  //这个是个js源文件目录
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
    //这里是转译后输出目录
    //使用一个哈希编码来更新缓存
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "my-webpack",
      //设置title，替代模板中的占位元素
      template: "src/asserts/template.html",
      //选择模板路径
    }),
    //这个对象用于输出html文件
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader",// creates style nodes from JS strings
          "css-loader",// translates CSS into CommonJS
          {
            loader: "sass-loader",
            options: {
              implementation: require("dart-sass")
              // compiles Less to CSS
            }
          }
        ]
      }
    ]
  }
};